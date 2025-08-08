---
title: AI Coding circa 2023
description: Thoughts on new tools
createdAt: 2023-11-20
updatedAt: 2023-12-10
categories:
  - Computers
  - AI
type: note
---

I've been using LLMs for general coding tasks since late 2020. This is where I've started to corral together thoughts and techniques for "doing computers" with LLMs in the passenger seat.

## 2025

Enter the vibe coding era.

- LLMs, specifically Anthropic's Claude models, are good enough to do lots of the grunt work of projects, allowing you to surf on pure vibes
- Agents

## 2024

Code completion gets good enough to go mainstream.

## 2023 and earlier

## LLM as Search Engines

Plain language questions can be easier to write than good search queries.

Sometimes describing a situation is necessary to create good search terms anyway. Here's a prompt about finding empty markdown files compared with equivalent search terms. I went to ChatGPT first, then followed by searches with DuckDuckGo and Google.

- Prompt: "I have directory with many markdown files, with many subdirectories also containing markdown files. Most of the files have content, but some of them are empty. Please help me write a simple bash script for finding all the empty files. Assume I'm on a mac."
- Search: "bash find all empty files recursive"

The results were roughly equal.

The prompt quickly wrote a bash script with a single call to `find` with appropriate arguments and detailed instructions for saving and running the file. It jogged my memory, that yes, of course this a one-liner with find that I have never bothered committing to memory. It was a bit wordy for the one-line answer that my question _really_ needed, but I was satisfied none the less.

The searches led to the same StackOverflow question, and incorporated the meat of the content directly into the results listing, effectively one-shotting the question by printing the `find` call from the answer. It doesn't tailor my answer to markdown files, so if I was missing some basics I might struggle to substitute the correct glob for my markdown files and have a bad time. So overall more of a hit than a miss but probably lacked a bit of specific context on the question.

Two notable observations:

1. The LLM returns passable results for both the prompt and the search query.
   - In contrast, the search engine only performs well with the search query and delivers lower quality results with the prompt. I actually prefer the LLM's response from the search query, as it leaves out supplementary details about saving and running the bash script in the first prompt.
2. The search query is a compressed expression of the problem statement in the prompt.
   - I probably made the prompt a bit more explicative and redundant for the sake of the model, meaning I feel like this is nakedly "prompt language" rather than a "true" expression of the problem statement, but it came out in one fluid motion and I didn't linger on any of the details.

## Recipes

Here are a few examples of novel / interesting workflows and I've come across and found helpful. I've included some embeds of chats using one of the tools I maintain for work.

- [SQL Query help](https://bench.io/share/6LwIvGnaOJ9jDenPxNNh9u) &middot; SQL has always been something that I never seem to develop strong muscle memory for. Given the highly structured nature of SQL, it seems immune to good documentation. There are many, many reasonable queries that I can describe in plain english, but then I fail to remember the syntax to get there in the query. Usually there's a lot of trial and error to get working chunks of a query to come together. LLMs significantly tighten the feedback loop.
- [Git Explainer](https://chat.0x01.ai/share/FEuWEKM) &middot; I know that git subcommands exist but I've never been able to keep them straight beyond the core of my daily get workflow: pull, push, checkout, commit, clone, rebase, stash, & merge are about all I have room for.
- [Calendar Availability](https://chat.openai.com/g/g-0yja9C7Ik-calendar-availability) &middot; A custom GPT that takes a screenshot of a calendar and responds with a text block of your availability. I used to have an entire [side project](https://github.com/wookiehangover/when.works) just for doing this!

## Tools

- `chat` command line helper &middot; h/t to [@sampullara](https://twitter.com/sampullara) for sharing this script. If you place this in your shell path, you can ask it for help writing commands.
  - Despite more than 2 decades as a Linux user, my muscle-memory for shell commands is paltry. I know what I know and, of course, I know how to look things up.
  - This script skips a bunch of steps and gets right to the answer, showing you a preview of the command and the choice to run it. And the fun part is that ChatGPT also helped write the script itself!
  - Here are a few examples of how I've called this recently:
    - `chat show info about my cpu`
    - `chat list size of my the current directory in gb`
    - `chat mount the usb drive sdf1`
    - `chat "what git branch is this commit in? 2e90fc13..."`

```bash
#!/bin/bash
TOKEN=<your open ai token goes here>
PROMPT="You are the best at writing shell commands. Assume the OS is Ubuntu. I want you to respond with only the shell commands separated by semicolons and no commentary. Here is what I want to do: $@"
RESULT=`curl -s https://api.openai.com/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer $TOKEN" \
  -d "{
  \"model\": \"gpt-3.5-turbo\",
  \"messages\": [{\"role\": \"user\", \"content\": \"$PROMPT\"}]
}" | jq '.choices[] | .message.content' -r`
echo $RESULT
read -rp "Execute? [n]: " input_var
input_var=${input_var:-n}
[ "$input_var" = "y" ] && bash -c "$RESULT"
```
