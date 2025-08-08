---
title: LLMs and theory building
description: Reflections on the limitations of coding agents mid-2025
createdAt: 2025-07-26
categories:
  - Computers
  - AI
type: note
---

LLMs have no theory of the program.

Naur talks about programming as theory-building. You develop intuition about a system over time, leading to an unspoken understanding of _what the thing does_.

> Very briefly, a person who has or possesses a theory in this sense knows how to do certain things and in addition can support the actual doing with explanations, justifications, and answers to queries, about the activity of concern

A program is rarely ever completed; the small changes, bugs, and adjustments that pile up of the months and years demand maintenance or to be wound down. (I keep coming back to The Maintenance Race.)

> The conclusion seems inescapable that at least with certain kinds of large programs, the continued adaptation, modification, and correction of errors in them, is essentially dependent on a certain kind of knowledge possessed by a group of programmers who are closely and continuously connected with them.

At issue are the shortcomings of software agents in 2025. On one hand, we live in an age of wonders. LLM-powered tools like Claude Code, Cursor, and Augment enable the creation of larger and larger chunks of working software through prompting. These systems rely on a combination of retrieval, heuristic observations, and user-curated rules to steer generations across a codebase. LLMs do not current learn dynamically; you are limited to guiding them through [context engineering](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) and prompting

> What characterizes intellectual activity, over and beyond activity that is merely intelligent, is the person's building and having a theory, where theory is understood as the knowledge a person must have in order not only to do certain things intelligently but also to explain them, to answer queries about them, to argue about them, and so forth. A person who has a theory is prepared to enter into such activities; while building the theory the person is trying to get it.

You see this lack of a coherent theory frequently whenever you correct the model and it agrees with you and criticizes its earlier actions.

It can know which abstractions are present, but not which are the most appropriate; another way of saying its solutions are often inelegant.

But what about when humans program? Most code is sloppy, barely working, and riddled with vulnerabilities. Flaws are flaws, right? Is an uncaring programmer worse than a sycophantic agent?
