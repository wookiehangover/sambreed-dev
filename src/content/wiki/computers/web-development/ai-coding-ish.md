---
title: AI Coding-ish
description: Thoughts on new tools
createdAt: 2023-11-20
categories:
  - Computers
  - Web Development
type: note
---
I've been using LLMs for general coding tasks since late 2020. Here are a few examples of novel / interesting workflows. I've included some embeds of chats using one of the tools I maintain for work.

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

## Chat Recipes

- [Git Explainer](https://chat.0x01.ai/share/FEuWEKM). I know that git subcommands exist but I've never been able to keep them straight beyond the core of my daily get workflow: pull, push, checkout, commit, clone, rebase, stash, & merge are about all I have room for.
