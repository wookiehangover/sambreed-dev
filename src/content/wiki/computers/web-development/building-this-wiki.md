---
title: "Building this Wiki"
description: "The map is not the territory"
createdAt: 2023-07-18
categories: ["Computers", "Web Development"]
type: 'note'
---

Three things were on my mind of late:
1. I don't ever seem to have the patience or wherewithal to write an entire blog post.
2. I have been getting a lot of use, joy, and mileage out of my personal notebook.
3. Knowledge graphs and text processing have been frequent themes in my work over the last few years.

Then, I was inspired by:
* [Maggie Appleton's digital Garden](https://maggieappleton.com/garden)
	* The idea of sharing little unfinished notes without shame, and then growing them over time
	* [Work with the garage door up](https://notes.andymatuschak.org/zCMhncA1iSE74MKKYQS5PBZ)
* Blogs that are websites
	* [Dave Rupert](https://daverupert.com/)
	* [Chris Coyier](https://chriscoyier.net/)
	* [Will Larson](https://lethain.com/)
	* [Kottke](https://kottke.org/), [Doctorow](https://pluralistic.net/), et al

Conclusion: I'm starting a wiki, [because it's never been done before](https://www.youtube.com/watch?v=ga0ksTIagsg).

## Table of Contents

## 1. Failing as a blogger
I have wanted to build a hypertext for a long time. I built my first website around 1996 on Geocities and I have been trying to make [places made of language](../places-made-of-language) ever since.

I blogged for about 6 months in [2008 and 2009](https://samuelbreed.blogspot.com/). From 2011-15, my website was just [animations and ascii art](https://web.archive.org/web/20120122225802/http://wookiehangover.com/). Sometimes [there were even links](https://web.archive.org/web/20150628070525/http://wookiehangover.com/). Since 2016 I've had a version of this website running, with the occasional blog post here and there.

In the past year, I got inspired to [dump](/writing/links-part-one.html) [my](/writing/links-august-2022.html) [tab](/writing/links-december-2022) [debt](/writing/links-january-2023) (almost) every month. This practice serves two purposes: active, chronological bookmarking; and an opportunity to gather a thought or two around a link. If I want to.

## 2. Note taking rules

Astro 2.0 added some interesting content management features. Namely, you can keep standalone directories of markdown files that are logically addressable _but entirely separate_ from routes. Databases are cool and all, but having solid conventions for addressing flat-file content will get you a lot of mileage.

Earlier versions had content and code living together, which made me lean towards editing posts in VS Code, which, well, feels more like coding than writing or taking notes. There's just something about an IDE that makes it hard for me to use it as a writing surface. Too many bells and whistles, not to mention having to switch off Co-Pilot when I'm authoring markdown.

Having a separate content directory makes it perfect for opening in a note taking app like Obsidian. This makes it easier for me to write, because I'm already using Obsidian to take notes every day.

A brief history of my preferred note-taking apps, 2013-2023:

- I have been using Obsidian since the beginning of the year and it's the first file-based note taking app that's caught my attention since iA Writer.
- I used Roam Research from 2020 - 2022. The novelty of a forced daily note was extremely good for my ADHD brain, where new habits and routines can take hold only under duress. I moved away from it because I wanted concrete, syncable files on a disk instead of a mystery database + cloud sync. It was a perfectly fine program with good ideas, but wasn't for me.
- I used iA Writer heavily from 2013-16, but had tapered off when the corporate IT policies at my last job forbade it from my daily driver.

## 3. A modest personal wiki

I've had the tagline "modest personal website" up for a year or two. It means that I want something that's simple, unfancy, and hand built. I strive to make a little website that changes when I want it to change, and that has value to one person: me.

My private notebook has become the main place where I think, document, and plan. Working asynchronously with a small, distributed team means that most of my correspondence with colleagues is in writing, and I don't like making people work hard to get the meaning. Rubber-ducking a message is 

In that spirit, I would like to build and maintain a little knowledge graph in public. 

## 4. Build Notes

I switched over the site over to [Astro](https://astro.build) after 5 good years on [Next.js](https://nextjs.org). Astro has been a project that I've been closely tracking since it's early releases. It takes a lot of the best parts of modern frameworks and seeks to tie them together with something approaching a compiler for your website.

In many ways, Astro paved a cowpath that I was already on. In 2017 I used unify, remark, and rehype to create a way in Next.js to author posts directly in markdown. This work presaged things like MDX and used the same toolchain that powers markdown compilation in Astro. I used projects in the unified ecosystem several other times, so having it baked into the framework is a bonus.

### Custom Elements

I hope to make more use of custom elements as time goes on. Here's what's in play:
- `<code-block>` is a wrapper around the [shiki](https://shiki.matsu.io/) code highlighter. A remark plugin automatically wraps markdown code blocks in wiki posts. The component follows the "light-dom" pattern, adding syntax highlighting to its children. With javascript off, you get a more basic `<pre><code>` without highlighting.