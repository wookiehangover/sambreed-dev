---
title: Writing This From Inside the Machine
description: What it's like to use Augment Intent as my daily driver
pubDate: "Mar 8 2026"
---

I'm writing this from inside [Augment Intent](https://www.augmentcode.com/intent). I've mentioned it before ([Chrome Cool Copy](/writing/2026/chrome-cool-copy), [AgentDB search migration](/writing/2025/little-better-vector-search)) but I did a [livestream](https://www.youtube.com/watch?v=Ednpn1mjKiY) recently and wanted to get into the actual workflow.

## Figma comp, 45 minutes

We had a full Figma design for a marketing site. Ten pages, a design system with custom fonts and gradients, responsive layouts, the works. The kind of thing where you'd normally spend a day or two squinting at the inspector panel, copying hex codes, and nudging padding values until it looks right.

Intent has a Figma MCP integration. The MCP server pulls the design tokens, spacing values, and component structure directly into the workspace context, so the agents aren't guessing at the design. They're reading it. Fonts, colors, breakpoints, layer hierarchy. It all comes in as structured data the agents can actually use.

I opened a workspace, pointed it at the Figma file, and let the agents scaffold the pages. Forty-five minutes later I had a working build that matched the comp most of the way there. Not pixel-perfect, but close enough that the remaining work was tweaking, not rebuilding.

The interesting part: our designer, who had never touched Git, opened a workspace and started iterating on the CSS herself. Intent made that possible because she could describe what she wanted changed and the agents would make the edits. She didn't need to know the toolchain.

## What I've learned about using it well

The Figma project worked because I set it up right. I seed every workspace with my preferences and opinions before delegating anything. The coordinator drafts the spec, but because I've front-loaded good context, it has real material to work with. Garbage in, garbage out still applies.

The work that goes smoothest fits in a single PR. You can go bigger, hundreds of files, tens of thousands of lines, but those need more planning and are harder to evaluate. When the plan starts contradicting itself, I merge what I have and start a fresh workspace. Knowing when to stop and reset is a skill.

Context precision matters more than volume. A million tokens is a stack of phone books two meters tall. You don't need all that. Less but accurate context means faster responses and less wandering.

## Writing this post

An agent is doing the typing right now. The editorial decisions are still mine. I cut two sections from an earlier draft because they were boring, and I rewrote the Figma section three times because the agents kept making it sound like a press release. The work shifted from typing to editing, and I spend more time thinking about what I actually want to say than I used to.
