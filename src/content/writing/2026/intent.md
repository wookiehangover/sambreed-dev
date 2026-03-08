---
title: Writing This From Inside the Machine
description: What it's like to use Augment Intent as my daily driver
pubDate: "Mar 8 2026"
---

I'm writing this from inside [Augment Intent](https://www.augmentcode.com/intent). The tool I'm writing about is the tool I'm using to write about it. Turtles all the way down.

I've mentioned Augment before — [Chrome Cool Copy](/writing/2026/chrome-cool-copy), [AgentDB search migration](/writing/2025/little-better-vector-search) — but haven't talked about the daily workflow. I did a [livestream](https://www.youtube.com/watch?v=Ednpn1mjKiY) recently showing it, figured I should write some down too.

## Figma comp, 45 minutes

I took a full Figma design — 10 pages, design system, custom fonts, gradients — and built it in about 45 minutes with Intent's Figma MCP integration. Day or two of work, gone.

The MCP server pulls design tokens, spacing, components directly into the workspace. No eyeballing hex codes or measuring padding. Got to 95% fidelity on the first pass.

## How I actually use it

**Opening moves matter.** I seed the workspace with my preferences and opinions before delegating anything. The coordinator drafts the spec, but because I've front-loaded good context, it has real material to work with.

**PR-sized tasks are the sweet spot.** Intent shines when the work fits in a single PR. You _can_ go bigger — hundreds of files, tens of thousands of lines — but those need more planning and are harder to evaluate. When adding to the plan would invalidate 40% of what's there, merge and start fresh.

**Context precision over volume.** A million tokens is a stack of phone books two meters tall. You don't need all that. Less but accurate context means faster responses and less wandering. You develop instincts for it, like tuning a carburetor.

## The meta bit

Yes, an agent is doing the typing. But the ideas are mine, the voice is mine, the decisions about what to cut are mine. The mechanical part got delegated.

The bottleneck used to be "can I type fast enough." Now it's "can I think clearly enough."

I'll take that trade.
