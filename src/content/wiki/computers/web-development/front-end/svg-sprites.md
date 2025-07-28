---
title: SVG icon sprites
description: What I've learned about optimizing SVGs to load icons
createdAt: 2024-08-07
type: note
categories:
  - Computers
  - Web Development
  - Front-End
---

SVGs are pretty cool.

Most applications use a variety of icons. High-quality open source icon sets are widely available. React (and adjacent frameworks) treat SVGs as inter-changable with components. The developer ergonomics of these large packages is hard to beat.

But inlining SVGs in JavaScript is probably the least cool way to deliver static images to your users.

Inline SVGs are not ideal for a few reasons:
- bundle size increases with every icon you add
- Icons rarely change, but users are forced to re-download them whenever your bundle changes

You could get around this with precise bundle splitting and file hashing across releases, but I consider that high-effort. Most frameworks optimize for bundling around routes rather than modules. [citation needed]

<aside>
Of course, "it depends"

You are probably fine if you're using a limited set of icons. Take the win of the good developer experience for now and worry about this later. In my experience most apps will have dozens of icons after a year of development.
</aside>

## Sprite sheets are cool

- pack several images into a single canvas, then load a subset of the image
	- the [street fighter 2 sprite sheet](https://fabiensanglard.net/sf2_sheets/) is a memorable example
- making and maintaining sprites by hand is hard
  - I first learned this technique for web development back in 2009 at my first job. I would spend hours in Photoshop packing transparent pngs with all the icons and rounded corners needed for the web apps I was building. And of course I always remembered to include the IE6 alpha transparency hack!
- You can make sprites with SVGs.
  - I don't know of any tools that exist for this, so I've been making my own.

## SVG icons

- SVG supports loading parts of a larger SVG by reference with the `<symbol>` and `<use>` tags
- Loading a single SVG is better than inlining dozens SVGs in your JavaScript bundle.
	- Any SVGs will be loaded in parallel with scripts
	- Cache that thing.
	- Keep an eye on the size. If you're loading an excessive amount of icons this file will get big. Even though it's only loaded once per session, you don't want this to be multiple megabytes. In larger projects I've spread Icons into one or more files.

## Example

Here's an over-wrought example of paging through lots and lots of icons.

<iframe class="w-full" style="height: 32rem; border: none; border-radius: 10px" src="https://icon-picker-demo.vercel.app/?icon=werewolf&color=black">
