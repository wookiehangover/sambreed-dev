---
title: Writing This From Inside the Machine
description: What it's like to use Augment Intent as my daily driver
pubDate: "Mar 8 2026"
---

I'm writing this blog post from inside [Augment Intent](https://www.augmentcode.com/), which is a fun sentence to type. Not in a "the call is coming from inside the house" way, more like — the tool I'm writing about is the tool I'm using to write about it. It's turtles all the way down.

Intent is the workspace and agent IDE I've been using at [Augment](https://www.augmentcode.com/) for the past few months. I've mentioned Augment before when I wrote about building [Chrome Cool Copy](/writing/2026/chrome-cool-copy) and again when I [migrated my search to AgentDB](/writing/2025/little-better-vector-search). But I haven't really talked about what the day-to-day workflow actually looks like, and it's changed how I think about coding enough that it feels worth writing down.

## The workspace thing

The core idea is that every unit of work gets its own workspace. A workspace has a spec, notes, and agents. Think of it like a project war room, except the war room fits in a tab and you can have dozens of them.

When I sit down to work on something — a feature, a bug, a blog post — I open a workspace and write a spec. The spec is just a markdown doc: here's the goal, here's the tasks, here's what "done" looks like. It sounds like project management busywork but it's actually the opposite. Writing the spec _is_ the work now. Once you've described what you want clearly enough, you can delegate chunks of it to agents that go off and do the implementation.

This is the part that took some getting used to. I spent 15 years building muscle memory for "think about the problem, then type the solution." Now the loop is more like "think about the problem, write down what you want, review what comes back." The typing-code part shrank. The thinking-and-planning part grew.

## Agents, plural

The multi-agent thing is where it gets interesting. You can spin up implementor agents that work on tasks in parallel, then run a verifier agent to check their work. It's coordination, not just code generation.

When I built Chrome Cool Copy, the feature list kept growing because each new thing was cheap to try. "What if it had a command palette?" becomes a task in a spec, gets delegated, comes back implemented. The [hedonic agentic treadmill](https://en.wikipedia.org/wiki/Hedonic_treadmill) is real and I'm on it.

For the AgentDB migration, I connected the MCP server and had Augment draft the schema, create the table, migrate the embeddings, and update the search implementation. That whole flow happened inside a workspace with a spec and task delegation. It wasn't me prompting a chatbot in a loop — it was structured work with persistent context.

## Notes that remember

Speaking of persistent context: notes. Notes in Intent survive across sessions. You close your laptop, come back the next day, and the context is still there. Every decision, every reference, every "we tried X and it didn't work because Y" is preserved.

This matters more than it sounds. The number of times I've had a great conversation with an AI assistant, closed the tab, and then had to re-explain everything from scratch the next day is... a lot. Notes fix that. They're shared across agents too, so when you delegate a task, the agent can see the same context you see.

## MCP and the real world

Intent connects to external tools through MCP — GitHub, Linear, the browser, terminals. This is what makes agents actually useful for real workflows instead of just generating code in a vacuum.

I wrote about being [skeptical of MCP](/writing/2025/fall-links) last year, then warming to it, then getting skeptical again as tool definitions proliferated. Intent's approach of delegating to sub-agents with access to the _right_ tools is closer to what I think the answer looks like. You don't give every agent every tool. You give the right agent the right tools for the right job.

## The honest bit

It's not all smooth sailing. The mental model shift is real — you have to learn to plan in a way that's decomposable into agent-sized tasks, and that's a skill. Sometimes I catch myself writing a spec that's more work than just doing the thing would have been. There's a calibration period.

And the meta-ness of this moment isn't lost on me. I'm writing a blog post about the tool I'm using to write the blog post, and an agent is doing the actual typing. Is this still writing? I think so — the ideas and the voice are mine, the structure is mine, the decision about what to include and what to cut is mine. The mechanical act of putting words in a file is the part that got delegated.

That's kind of the whole point, actually. The work changed shape but it's still work. It's just that the work is now planning, reviewing, and deciding instead of typing, compiling, and debugging.

I don't know if this is what coding looks like in five years or if we'll all look back on this and cringe. But right now, writing a spec and watching agents execute it feels like a genuine step change. Not because the code is better — it's about the same — but because the bottleneck moved. It used to be "can I type fast enough." Now it's "can I think clearly enough."

I'll take that trade.

