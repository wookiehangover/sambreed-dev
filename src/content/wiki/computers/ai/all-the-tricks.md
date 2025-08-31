---
title: All the LLM Agent Tricks
description: Everything I've learned working on AI agents
createdAt: 2025-08-28
categories:
  - Computers
  - AI
type: note
---

Some background: I started working with LLMs in 2020 when I joined SHV. Back when GPT-3 was the main game in town, context windows were small, RLHF hadn't yet refined responses, prompting was difficult, and returning structured data was _rough_. Since then, I've been building prototypes, tools, and applications for portfolio companies and internal use.

This is a list of the shortcuts and patterns  gleaned from working on companies like [Bench 🪦](https://bench.io), [Augment](https://augmentcode.com), and [Reve](https://reve.art).

First off: the basic patterns are exceptionally well-implemented and thoroughly documented in Vercel's AI SDK. My standing advice is to start there unless you have a good reason not to (and then I'll argue with you about it).

This is not a piece about the user experience of AI products. There are plenty of good posts about that on LukeW's blog. Rather, this is about the application patterns, from an implementer's perspective, that enable compelling AI product experiences.

I've split this into 3 sections:

1. **Agent patterns** discusses the client/server architectures that emerge in mature AI products.
2. **Model strats** covers picking the right model for the right job and how to optimize for cost and control.
3. **Power tools** is all about how good tool design can solve upstream context management problems before they begin. 


## Table of Contents

## Agent patterns

From my vantage point, AGI was first unlocked in June 2024 when Claude Sonnet 3.5 with tool calling was released. OpenAI had been the first lab to popularize tool use, but their 2023-2025 models were not on par with Claude for tool calls. But why are tool calls so important?

**Boundaries.** Tool calls are an important boundary between systems. The control model is in the driver's seat. It knows about the user and the system, has a larger system prompt that includes important context about the user, and it has the ability to discover and call tools. Tools open the door to having sub-systems that generate and manage context with different goals than the main thread.

**Flexibility.** Building for AI integrations means balancing trade-offs between provider-specific features and the desire to have swappable parts. Any good system will leave ample room for switching between models at all layers; switching between models might someday unlock new capabilities and should not require a re-write. 

###  Background everything

When a user submits a prompt it should finish whether or not they leave the page immediately or stick around to see the results stream in. Background execution has become table stakes for AI agents as models become increasingly capable of handling long-running tasks.

Our solution was to use websockets.

- On load, connect users to a websocket channel
- When they submit a prompt, create a record in the database and start streaming from the upstream model
- Write the stream over the websocket and to a temporary cache (Redis)
- Listen for user interrupts over the websocket
- If a user disconnects or enters a task that is mid stream, hydrate from the cache and continue streaming

In a theme that will be repeated throughout this doc, the AI SDK team released [their own clever solution](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot-resume-streams) a few weeks after we had shipped our own.

- only send the most recent message
- save everything to a database at every step
- track usage and cost for every call. cost is a major component of trading-off between models

### Stream everything

The AI SDK provides an excellent set of patterns to follow for delivering LLM responses as an HTTP event stream.

However, there are several areas where we can improve on the AI SDK defaults:

- **Interruption Support**: Allows users to interrupt long responses when they have enough information
- **Error Visibility**: Errors can be detected and handled before complete response generation
- **Stream Transforms:**
	- **Smooth Streaming**: Implements controlled delays (20ms) to prevent overwhelming the client
	- **Buffer Management**: Splits large buffers into manageable chunks (max 1000 chars)
	- **Markdown Filtering**: Prevents rendering of incomplete markdown structures
	- **Tool Call Streaming**: Enables real-time tool call visibility

- streamable JSON patches for view model updates

LLM -> structured data -> create view model
LLM -> view update -> JSON patch -> view model

### Files and RAG

RAG works but only if you have good retrieval. A good retrieval system starts with a file processing pipeline.

Different files need different strategies:
- text files and PDFs need be broken down, indexed, and summarized
- images need their metadata extracted and then sent to a model
- audio should be transcribed, diarized, and summarized
- videos should go to a dedicated video model
- zip and tar archives need to be unpacked
- everything needs to be private and secure

It's a lot!

Once you have all (or part) of that done, then you need to implement the retriever itself. This will look like a combination of vector (cosine similarity) and keyword (bm25) search paired with a re-ranker to prune sources by relevance. The you need to append the user's prompt with relevant chunks and some instructions with how to cite them.

Citations are an area of great interest, because they often make or break the credibility of a response. The ability to provide a corpus of sources up-front and receive accurate well-formed citations is an area to watch as model providers.

## Model strats

It all starts by picking the right model for the job.
Models have a strike zone and each model's is different.

Usually it comes down between picking where you want to be on this axis:

```
Fast model <--------------> Smart model
```

Or you can just pick Claude.

### Multi-Provider fallbacks

This is a must.

- **High Availability**: Prevents single points of failure in AI model access
- **Load Distribution**: Distributes load across multiple providers to avoid rate limits
- **Cost Optimization**: Allows switching to more cost-effective providers when available
- **Performance Optimization**: Routes requests to the fastest available provider
- **Vendor Independence**: Reduces dependency on any single AI provider
- 
**Provider-Specific Error Handling:**
```typescript
// Different error handling strategies per provider
if (AISDKError.isInstance(error)) {
    if (!isAISDKErrorToRetry(error)) {
        // Some errors shouldn't trigger provider switching
        throw error;
    }
}

// Rate limiting handling
if (APICallError.isInstance(error) &&
    (error?.statusCode === 429 || error?.statusCode === 529)) {
    streamWriter.writeData({
        type: 'high-demand',
        id: jobId
    });
    throw error; // Don't retry rate limits immediately
}
```

**Provider State Management:**
- **Color Tracking**: Each provider is assigned a color for UI identification
- **Performance Metrics**: Track response times and success rates per provider
- **Health Monitoring**: Monitor provider availability and automatically exclude unhealthy providers
- **Load Balancing**: Distribute requests based on provider capacity and performance

### Error handling

Building products around AI models requires sophisticated error handling, with plenty of room for fallbacks, retries, and failovers. Different types of failures need their own unique recovery strategies to enable graceful degradation and intelligent recovery.

Importantly, pushing a decision back to the user is a strategy we can build in these types of apps.

**Justification:**
- **Precise Error Handling**: Different error types require different recovery strategies
- **User Experience**: Provides meaningful error messages and recovery options to users
- **System Stability**: Prevents cascading failures by containing errors appropriately
- **Debugging**: Facilitates troubleshooting by providing detailed error context
- **Monitoring**: Enables proper alerting and metrics collection for different error types

**Implementation Details:**
```typescript
// Custom error class definitions
class ContextLengthError extends Error {
    constructor() {
        super('context_length_exceeded');
        this.name = 'ContextLengthError';
    }
}

class ImageDimensionsExceededError extends Error {
    constructor() {
        super('image_dimensions_exceeded');
        this.name = 'ImageDimensionsExceededError';
    }
}

// Import additional error types from orchestrator errors module
import {
    AuthRequiredError,
    isAISDKErrorToRetry,
    isContextLengthError,
    isImageDimensionError,
    isShouldStopToolError,
    isUseClientSideToolError,
    ShouldStopTool,
    SystemAbortedError,
    UseClientSideTool,
    UserAbortedError
} from '$lib/server/orchestrator/errors';
```

**Error Classification Logic:**
```typescript
catch (error) {
    if (error instanceof ContextLengthError) {
        logger.info('ContextLengthError in chat stream', { jobId });
        streamWriter.writeData({
            type: 'context-length-exceeded',
            id: jobId
        });
        setJobStatus('FAILED');
        throw error;

    } else if (error instanceof ImageDimensionsExceededError) {
        logger.info('ImageDimensionsExceededError in chat stream', { jobId });
        streamWriter.writeData({
            type: 'image-dimensions-exceeded',
            id: jobId
        });
        setJobStatus('FAILED');
        throw error;

    } else if (error instanceof AuthRequiredError) {
        // Handle authentication requirements
        const errorInfo = {
            type: error.type,
            provider: error.provider,
            scopes: error.scopes,
            loginHint: error.loginHint || '',
            toolState: error.toolState
        };
        setErrorInfo?.(errorInfo);
        streamWriter.writeData({
            type: 'job-status',
            status: 'WAITING_FOR_INPUT',
            id: jobId,
            error: errorInfo as JSONValue
        });
        setJobStatus('WAITING_FOR_INPUT');
        throw error;

    } else if (error instanceof UseClientSideTool) {
        // Handle client-side tool requirements
        streamWriter.writeData({
            type: 'job-status',
            status: 'WAITING_FOR_INPUT',
            id: jobId
        });
        setJobStatus('WAITING_FOR_INPUT');
        throw error;

    } else if (error instanceof ShouldStopTool) {
        // Handle graceful stopping
        streamWriter.writeData({
            type: 'job-status',
            status: 'COMPLETED',
            id: jobId
        });
        setJobStatus('COMPLETED');
        throw error;
    }
}
```

**Tool Error Recovery:**
```typescript
// Convert tool execution errors to tool results for model visibility
if (ToolExecutionError.isInstance(part.error)) {
    logger.debug('Converting tool execution error to tool result', {
        error: part.error,
        toolCallId: part.error.toolCallId,
        toolName: part.error.toolName
    });

    // Create error result that the model can see and respond to
    const errorResult = {
        type: 'tool-result' as const,
        toolCallId: part.error.toolCallId,
        toolName: part.error.toolName,
        result: {
            error: part.error.message || 'Tool execution failed',
            artifactsCreated: [],
            annotations: []
        }
    };

    // Write error result to stream for model processing
    streamWriter.write(messageConverter.transformChunk(errorResult));
    continue; // Continue processing instead of failing
}
```

**Error Context and Logging:**
- **Structured Logging**: All errors include contextual information (jobId, sessionId, etc.)
- **Severity Classification**: Different error types have appropriate log levels
- **Error Aggregation**: Similar errors are grouped for monitoring and alerting
- **Recovery Tracking**: Success/failure rates of different recovery strategies are monitored

### Context management

**Description:**
The system implements sophisticated context length management to ensure conversations stay within AI model token limits while preserving the most important information. This involves intelligent message truncation, token tracking, and optimization strategies.

**Justification:**
- **Model Compatibility**: Different AI models have varying context length limits that must be respected
- **Performance**: Shorter contexts lead to faster response times and lower costs
- **Information Preservation**: Critical information must be retained while less important content is truncated
- **User Experience**: Prevents context length errors that would interrupt conversations
- **Cost Control**: Token usage directly impacts operational costs

**Implementation Details:**
```typescript
// Context length calculation and truncation
const { truncatedMessages, truncatedTokens } = truncateOriginalMessages(
    userInfo,
    modelDef.modelLimit - MAX_OUTPUT_TOKENS, // Reserve space for output
    messages,
    'chat'
);

// Validate truncation results
if (truncatedMessages.length === 0) {
    // Truncation resulted in no messages left
    throw new ContextLengthError();
}

// Convert to core messages for AI model
let coreMessages: CoreMessage[];
if (toolHelpers.flags.loadToolsEnabled) {
    coreMessages = convertToCoreMessages(truncatedMessages, activeTools);
} else {
    coreMessages = convertToCoreMessages(truncatedMessages, tools);
}
```

**Token Counting and Tracking:**
```typescript
// Comprehensive token tracking across conversation turns
onStepFinish: async (result) => {
    const currentTokens = result.usage.totalTokens;
    const cacheReadTokens =
        (result.providerMetadata?.anthropic?.cacheReadInputTokens as number) || 0;
    const cacheCreateTokens =
        (result.providerMetadata?.anthropic?.cacheCreationInputTokens as number) || 0;

    // Adjust totals by truncated amount for accurate bookkeeping
    const totalTokens = currentTokens + cacheReadTokens + cacheCreateTokens + truncatedTokens;

    // Find previous token count for incremental tracking
    const previousMessage = [...messages].reverse().find((message) => {
        return message.role === 'assistant' &&
               message.annotations?.find(annotation =>
                   (annotation as TokenCountAnnotation)?.type === 'token_count'
               );
    });

    let previousCount = 0;
    if (previousMessage) {
        const previousTokenCountAnnotation = previousMessage.annotations?.findLast(
            annotation => (annotation as TokenCountAnnotation)?.type === 'token_count'
        ) as TokenCountAnnotation | undefined;

        if (previousTokenCountAnnotation) {
            previousCount = previousTokenCountAnnotation.totalTokens;
        }
    }

    // Create token count annotation
    const tokenCountAnnotation: TokenCountAnnotation = {
        type: 'token_count',
        totalTokens,
        messageTokens: totalTokens - previousCount
    };

    // Add to message for caching algorithm
    if (messages.length > 0) {
        const lastMessage = messages[messages.length - 1];
        if (!lastMessage.annotations) {
            lastMessage.annotations = [];
        }
        lastMessage.annotations.push(tokenCountAnnotation);
    }

    // Stream token count for persistence
    toolHelpers.streamWriter?.writeMessageAnnotation(tokenCountAnnotation);
}
```

**Intelligent Truncation Strategy:**
- **Priority-Based**: System messages and recent messages have higher priority
- **Tool Context**: Tool calls and results are preserved when possible
- **User Intent**: User messages are prioritized over assistant responses
- **Conversation Flow**: Maintains logical conversation flow even after truncation

**Cache-Aware Context Management:**
```typescript
// Optimize context for Claude prompt caching
if (supportsClaudePromptCaching(modelId)) {
    const currentProcessingInfo = getCurrentProcessingInfo(messages);
    const isSubtaskRun = overrideToolSelection !== undefined;

    addCacheMarkers(
        allMessages,
        messages,
        modelDef.provider!,
        Boolean(toolHelpers.flags.loadToolsEnabled ?? false),
        toolHelpers.flags.loadToolsEnabled ? activeTools : tools,
        currentProcessingInfo,
        TOKEN_BOUNDARIES,
        isSubtaskRun
    );
}
```


### Prompt caching

Big system prompts lead to slow responses.

**Description:**
The system implements an advanced prompt caching strategy specifically optimized for Claude models, which can cache portions of the conversation context to reduce token processing costs and improve response times for subsequent requests.

**Justification:**
- **Cost Reduction**: Cached tokens are significantly cheaper than processing new tokens
- **Performance**: Cached content doesn't need to be reprocessed, reducing latency
- **Efficiency**: Reduces computational load on AI providers
- **Scalability**: Enables handling longer conversations without proportional cost increases
- **User Experience**: Faster response times for continued conversations

**Implementation Details:**
```typescript
// Cache support detection and application
if (supportsClaudePromptCaching(modelId)) {
    // Determine which parts are currently being processed
    const currentProcessingInfo = getCurrentProcessingInfo(messages);
    const isSubtaskRun = overrideToolSelection !== undefined;

    // Apply sophisticated cache markers
    addCacheMarkers(
        allMessages,           // Messages to mark for caching
        messages,             // Original message context
        modelDef.provider!,   // Provider-specific caching rules
        Boolean(toolHelpers.flags.loadToolsEnabled ?? false), // Tool loading state
        toolHelpers.flags.loadToolsEnabled ? activeTools : tools, // Available tools
        currentProcessingInfo, // Current processing state
        TOKEN_BOUNDARIES,     // Token boundary configuration
        isSubtaskRun         // Whether this is a subtask execution
    );
}
```

**Processing-Aware Cache Management:**
```typescript
// Determine current processing state for cache optimization
function getCurrentProcessingInfo(
    messages: Message[]
): { messageIndex: number; currentStep: number } | null {
    if (messages.length === 0) {
        return null;
    }

    // The last message is the one being processed
    const lastMessage = messages[messages.length - 1];
    const messageIndex = messages.length - 1;

    if (lastMessage.role === 'assistant' && lastMessage.parts?.length) {
        // Find current step being processed
        let currentStep = 0;
        for (const part of lastMessage.parts) {
            if (part.type === 'step-start') {
                currentStep++;
            }
        }

        return { messageIndex, currentStep: Math.max(1, currentStep) };
    }

    return { messageIndex, currentStep: 1 };
}
```

**Provider-Specific Cache Headers:**
```typescript
// Configure provider-specific caching headers
let headerString = '';
if (isClaude4(modelId)) {
    headerString = 'interleaved-thinking-2025-05-14';

    // Extended cache TTL only available on Anthropic provider
    if (modelDef.provider === 'anthropic') {
        headerString += ',extended-cache-ttl-2025-04-11';
    }
}

const additionalStreamTextOptions = {
    tools,
    ...(isClaude4(modelId) ? {
        headers: {
            'anthropic-beta': headerString
        }
    } : {})
};
```

**Cache Performance Monitoring:**
```typescript
// Track cache performance metrics
onStepFinish: async (result) => {
    const cacheReadTokens =
        (result.providerMetadata?.anthropic?.cacheReadInputTokens as number) || 0;
    const cacheCreateTokens =
        (result.providerMetadata?.anthropic?.cacheCreationInputTokens as number) || 0;

    // Log cache performance for first requests
    if (modelDef.provider === 'anthropic' && messages.length === 1) {
        logger.info('Anthropic provider details:', {
            metadata: result.providerMetadata?.anthropic,
            finishReason: result.finishReason,
            cacheReadTokens,
            cacheCreateTokens,
            latencyMs
        });
    }
}
```

**Cache Invalidation Strategy:**
- **Content Changes**: Cache is invalidated when system prompts or tools change
- **Time-Based**: Extended TTL headers for longer cache retention
- **Context Boundaries**: Cache markers respect conversation boundaries
- **Processing State**: Active processing areas are excluded from caching




## Power tools

Tool calls are king. Tools ain't free; sooner or later you run out of space in the system prompt. Tools definitions can inserted into chat history at any time, creating an opportunity to select tools via another tool call.

Tools allow you to combine the strengths of different models and offset their weaknesses. Gemini has blazing-fast large context models that are weaker at writing prose or complex code but excellent at searching and summarizing large documents; OpenAI has great image generation and unique voice, but is prone to straying from factual grounding; Anthropic has the best instruction following, tool calling, and coding models. There are benefits to mixing your models and evaluating them in different scenarios.

Tool design

Two things are held in tension
- tools should have a narrow scope
- tools should should be open ended

Take a tool to crawl a webpage. The simplest version might look like this:

```
{
  name: "crawl_webpage",
  description: "fetch the contents of a webpage"
  arguments: {
    url: z.string()
  }
}
```

When you first use this, it will probably work ok! But it has some problems. For one, webpages can get pretty big, and if the tool result contains the entire response you're likely to run out of context relatively quickly. You might try extracting the text with something like mozilla/readability, but you're still subject to the same problem.

There's a larger problem with this naive pattern: **the burden of dealing with the response is placed back on the control model**. The more times you call the tool, the more context gets dedicated to attending to the previous response regardless if they're relevant to the session. 


### Dynamic loading

- **Dynamic tool loading**: Prepares and loads tools based on user context and permissions
- **Tool state management**: Tracks tool invocations, results, and error states
- **Manual tool execution**: Supports executing tools outside of the AI model's direct control

The dynamic tool loading system is one of the most sophisticated aspects of the orchestrator, implementing a multi-layered approach to tool management that adapts to user context, permissions, and system state.

**Core Loading Process:**
```typescript
const {
    allTools,
    coreToolNames,
    mcpServerNames,
    connectedNonCoreTools,
    nonConnectedTools,
    browserExtensionRequiredTools
} = await prepareTools(
    userInfo,
    toolHelpers,
    toolHelpers.flags,
    developer ?? false,
    toolHelpers.metadata,
    modelId
);
```

**Tool Categories & Classification:**
1. **Core Tools**: Essential tools available to all users (ask-user, complete, create-document)
2. **MCP Server Tools**: Tools provided by Model Context Protocol servers
3. **Connected Non-Core Tools**: External service tools with active connections
4. **Non-Connected Tools**: Tools requiring setup or authentication
5. **Browser Extension Tools**: Tools requiring browser extension capabilities

**Context-Aware Loading Strategy:**
- **User-based filtering**: Tools are filtered based on user permissions and subscription level
- **Developer mode**: Additional tools become available when developer flag is enabled
- **Model compatibility**: Tools are filtered based on the target AI model's capabilities
- **Feature flags**: Tool availability controlled by feature flags in `toolHelpers.flags`

**Load-Time vs Runtime Tool Selection:**
The system implements a two-tier tool selection mechanism:

1. **Load-Time Selection** (`loadToolsEnabled` flag):
   - When enabled, only core tools are initially loaded to the AI model
   - Reduces token usage and improves response time
   - Non-core tools are loaded on-demand when needed

2. **Runtime Tool Override** (`overrideToolSelection`):
   - Allows dynamic tool selection for specific subtasks
   - Enables focused tool sets for specialized operations
   - Supports tool restriction for security or performance reasons

**Tool State Management:**
```typescript
// Active tools tracking
let activeToolNames = coreToolNames;
let activeTools = Object.fromEntries(
    Object.entries(allTools).filter(([toolName]) =>
        coreToolNames.includes(toolName)
    )
) as Record<string, Tool>;

// Override mechanism
if (overrideToolSelection !== undefined) {
    tools = Object.fromEntries(
        overrideToolSelection.map((tool) => [tool, allTools[tool]])
    ) as Record<string, Tool>;
    activeToolNames = overrideToolSelection;
    activeTools = tools;
}
```

**Permission-Based Tool Filtering:**
- Tools are filtered based on user's organizational unit (ouId)
- Project-specific tools are loaded based on user's current project context
- External service tools require proper authentication tokens
- Rate limiting and quota management per tool type

**Tool Metadata Integration:**
The system uses `toolHelpers.metadata` to:
- Track tool usage statistics
- Manage tool-specific configuration
- Handle tool deprecation and versioning
- Provide tool-specific help and documentation

**Performance Optimizations:**
- **Lazy loading**: Tools are loaded only when needed
- **Caching**: Tool definitions are cached to avoid repeated preparation
- **Batching**: Multiple tool operations are batched for efficiency
- **Memory management**: Unused tools are garbage collected

**Error Handling in Tool Loading:**
- **Graceful degradation**: System continues with available tools if some fail to load
- **Fallback mechanisms**: Core tools always available as fallback
- **Tool validation**: Each tool is validated before being made available
- **Connection testing**: External tools are tested for connectivity

This dynamic approach ensures optimal performance while maintaining flexibility and security, allowing the system to adapt to different user contexts and requirements without compromising functionality.

### Client-side tools

- **Client-side detection**: Identifies tools that need client-side execution
- **Auth flow handling**: Manages OAuth and authentication flows for external services
- **Tool state preservation**: Maintains tool state across client-side interactions

### Tool call repairs

**Description:**
The system implements an advanced tool call repair mechanism that automatically detects and fixes malformed tool arguments using AI-powered schema validation and repair, ensuring robust tool execution even when the primary AI model makes formatting errors.

**Justification:**
- **Reliability**: Prevents tool execution failures due to minor formatting issues
- **User Experience**: Reduces interruptions from tool argument validation errors
- **Robustness**: Makes the system more resilient to AI model inconsistencies
- **Efficiency**: Automatically fixes issues without requiring user intervention
- **Quality**: Maintains high success rates for tool execution

**Implementation Details:**

```typescript

experimental_repairToolCall: async ({ toolCall, tools, error, parameterSchema }) => {
    const startTime = Date.now();
    try {
        // Create repair prompt with context
        const promptContent = [
            `Your task is to fix the arguments for a tool call.`,
            `The model tried to call the tool "${toolCall.toolName}" with the following arguments: ${toolCall.args}.`,
            `The tool accepts the following schema: ${JSON.stringify(parameterSchema({ toolName: toolCall.toolName }))}.`,
            `Error: ${error.message}`,
            'Please fix the arguments to match the required schema.'
        ].join('\n');

        // Use AI model to repair the arguments
        const result = await generateObject({
            model,
            schema: tools[toolCall.toolName].parameters,
            prompt: promptContent
        });

        // Return repaired tool call
        return {
            toolCallType: 'function',
            toolCallId: toolCall.toolCallId,
            toolName: toolCall.toolName,
            args: JSON.stringify(result.object)
        };

    } catch (error) {
        logger.error('Failed to repair tool call', error);

        return null; // Repair failed, let original error propagate
    }
}
```

**Repair Strategy:**
1. **Error Analysis**: Analyzes the specific validation error to understand the issue
2. **Schema Context**: Provides the correct schema to the repair AI model
3. **Contextual Repair**: Uses the original arguments as context for intelligent repair
4. **Validation**: Ensures repaired arguments match the required schema
5. **Fallback**: Returns null if repair is impossible, allowing graceful error handling

**Performance Monitoring:**
```typescript
// Comprehensive metrics collection for repair operations
recordLLMUsage({
    userInfo,
    source: 'repair-tool-call', // Separate tracking for repair operations
    provider: modelDef.provider ?? 'unknown',
    result,
    latencyMs: Date.now() - startTime,
    requestData: {
        messages: [{ role: 'user', content: promptContent }],
        model: modelId
    }
});

// Event tracking for repair success/failure rates
recordEventNonBlocking(userInfo, 'repair-tool-call', 'success', {
    model: modelId,
    toolName: toolCall.toolName,
    latencyMs: Date.now() - startTime
});
```

**Error Types Handled:**
- **Type Mismatches**: Converting strings to numbers, booleans, etc.
- **Missing Required Fields**: Adding required parameters with sensible defaults
- **Format Issues**: Fixing date formats, URL structures, etc.
- **Validation Errors**: Correcting values that don't match schema constraints

**Repair Quality Assurance:**
- **Schema Validation**: All repairs are validated against the original schema
- **Semantic Preservation**: Repairs maintain the original intent of the tool call
- **Performance Tracking**: Monitor repair success rates and latency
- **Fallback Handling**: Graceful degradation when repair is not possible

### MCP

While I was initially skeptical about MCP, the level of adoption across the industry over the past 8 months is hard to ignore.