---
title: Coding assumptions in 2026
description: Adventures in the field of software engineering in the AI era
pubDate: "Jul 24 2026"
---

The unhobbling of AI agents has brought a rush of changes to software over the last several years. 2026 has only increased the pace.

## All prompts are underspecified

The jaggedness of frontier models is most apparent when they expand simple instructions. Your goal is to steer agents towards parts of distribution that favor your codebase.

Do this by managing steering files (`agents.md`, `design.md`, `docs/`), skills, and attending the other trappings of SDLC (CI/CD, pull requests, issue tracking, automated testing).

## We are all QA engineers now

Running the software is a requirement to determine that it's working.

Design is how the thing works. There's no better way to know how something works than by using it obsessively.

## Reading the code is no longer a requirement

You are better off spending your time coming up with increasingly clever ways to validate the code you're generating This does not mean an abdication of understanding, far from it. Now you have to work even harder to understand the abstractions because there are probably more of them than can fit in your head.

The era of the software architect is finally here. The collective imagination anchors the phrase to the 1990s and the rise of object-oriented programming. Every time we ascend another rung up the ladder of abstraction, we pause for a moment and look back down at the ridiculous toil of our forebears. Amelia described this really well in [Code is medium for thought](https://wattenberger.com/thoughts/code-is-a-medium-for-thought/)

## All work should be massively parallelized

The job has always been to explore the possibility space for a given product and you used to be limited massively by how quickly you could go.

In the past moving quickly meant adding people. People create communication overhead, work needs to be planned and coordinated and aligned with business goals. With a finite supply of developer time you have to pick and choose what to work on precisely or risk large cost overruns and low quality output.

The trick is to strike the balance between wasting tokens and maximizing your output. Not every branch is worth pursuing.

There are many flavors of coordination. Plan mode, loops, graphs, workflows, and countless skills and plugins. Do whatever works for you.

This is what I've found to work: a Coordinator writes a spec document and delegates tasks in waves to Implementors. Implementors have a fresh context and are instructed to follow tasks written by the Coordinator. Implementors commit changes as they go, followed by Verifiers that analyze the output of implementors with their own fresh context. The Coordinator dispatches a final Verifier as waves of Implementors finish.

***

Writing code is no longer the bottleneck. Producing the software was never the moat, but it was something that required operational excellence avoid becoming a sunk cost. That's still true. Now we're able to move faster and produce more code with fewer people, while trying to reckon with the consequences of generating more and more of the system