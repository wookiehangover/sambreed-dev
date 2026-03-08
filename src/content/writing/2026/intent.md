---
title: Writing This From Inside the Machine
description: What it's like to use Augment Intent as my daily driver
pubDate: "Mar 8 2026"
---

I'm writing this blog post from inside [Augment Intent](https://www.augmentcode.com/intent), which is a fun sentence to type. The tool I'm writing about is the tool I'm using to write about it. Turtles all the way down.

I've mentioned Augment before — building [Chrome Cool Copy](/writing/2026/chrome-cool-copy), [migrating my search to AgentDB](/writing/2025/little-better-vector-search) — but I haven't talked about what the daily workflow actually looks like. I did a [livestream](https://www.youtube.com/watch?v=Ednpn1mjKiY) recently where I showed it, and figured I should write some of it down too.

## Ripping through a Figma comp

The demo that got the biggest reaction: I took a full Figma design — about 10 pages, complete design system, custom fonts, gradients, the works — and built it in roughly 45 minutes using Intent's Figma MCP integration. That's work that would've taken me a day or two by hand.

The Figma MCP server pulls design tokens, spacing, components, all of it directly into the workspace context. I didn't have to eyeball hex codes or measure padding. Intent's agents just... built it. Got to about 95% fidelity, which is where things get interesting: the designer on the project, who had never touched Git in her life, opened Intent and iterated on that last 5% herself. That's the part I didn't expect.

## How I actually use it

A few things I've learned after a few months of daily use:

**Opening moves matter.** I do my own setup before delegating anything. I seed the workspace with my preferences, my opinions about how the code should work. I edit the spec directly rather than letting the coordinator rewrite it — coordinators tend to over-specify, and I'd rather keep things loose.

**PR-sized tasks are the sweet spot.** Intent really shines when the work fits in a single pull request. You _can_ go ambitious — hundreds of files, tens of thousands of lines changed — but those need way more planning and are harder to evaluate. When adding to the plan would invalidate 40% of what's already there, it's time to merge what you have and start a new workspace.

**Context precision beats context volume.** A million tokens is a stack of phone books two meters tall. You don't need all that. Less but more accurate context means faster responses and less wandering off-task. You develop instincts for where context will be most useful, like tuning a carburetor.

## The meta bit

Yes, I'm aware of the recursion here — writing about the tool with the tool, an agent doing the typing. But the ideas are mine, the voice is mine, the decisions about what to cut are mine. The mechanical part got delegated. That's kind of the whole point.

The work changed shape but it's still work. The bottleneck used to be "can I type fast enough." Now it's "can I think clearly enough."

I'll take that trade.
