---
title: Links, April 2025
slug: 2025/links-april
description: automated link harvesting
cover: "../../../assets/links-april-2025-reve.png"
heroAlt: "prompt: 'A stylized, digital illustration of a cherry blossom tree with code snippets and web elements falling instead of petals. The background should have a subtle tech aesthetic with faint circuit patterns. The overall mood should be spring-like and optimistic, with soft colors that blend technology and nature. Photorealistic, detailed.' model: Reve preview"
pubDate: "Apr 10 2025"
---

I've been heads-down working on [Bench](https://bench.io/) since the end of last year, and let me tell you, it has come a long way.

Bench is an AI-powered intelligent workspace. The idea is simple: Take the best models, give them well designed tools, access to files & the web, and let it rip. It can do things like:

- look at your open browser tabs
- search the web
- visit websites
- generate structured data and do data-science
- analyze files like PDFs, images, and videos
- generate images
- create documents
- plus all of the usual things a well-prompted state-of-the-art LLM can do.

Bench has come so far that it can write a blog post like this one. In fact, everything in this post except the introduction was [sourced and written by Bench in a few minutes](https://bench.io/share/21NJLhvH5N5dYzZqBti4gN). Bench can even serve as a publishing platform, here's a [published page](https://bench.io/share/artifact/5Rs3CrNg4Wfkqk4kyfX0sN) of the raw content of this post.

To write this post, Bench looked at my open tabs on my iPad, wrote a draft post, I gave feedback, it visited the links to get better summaries, then it generated an image with [Reve](https://preview.reve.art/).

Bench is currently in private preview. You can sign up with [this link](https://bench.io/invite/4a6nd6).

Now to my months-long backlog of open tabs.

## Front End

- [Fine-tuning Text Inputs](https://garrettdimon.com/journal/posts/fine-tuning-text-inputs) · Garrett Dimon's exploration of HTML form attributes is the kind of deep dive I live for. Adding attributes like `spellcheck`, `autofocus`, and `autocapitalize` can dramatically improve form UX without a single line of JavaScript. It's a reminder that sometimes the browser already has what you need€”you just have to know where to look.

- [Minimal CSS-only blurry image placeholders](https://leanrada.com/notes/css-only-lqip/) · This technique for creating blurry image placeholders using only CSS is genuinely clever. By encoding a simplified version of an image into a single integer and then decoding it with bit manipulation in CSS, the author creates a lightweight placeholder that loads instantly. The bit-packing approach feels like the kind of elegant hack that makes the web special.

- [the html review](https://thehtml.review/about) · An annual online journal of literature made specifically for the web. In an era where everything is a React app wrapped in a NextJS wrapper inside a Vercel deployment, it's refreshing to see people celebrating the foundational technology of the web. I've bookmarked this to revisit when I need inspiration.

## Databases & Code

- [The Part of PostgreSQL We Hate the Most](https://www.cs.cmu.edu/~pavlo/blog/2023/04/the-part-of-postgresql-we-hate-the-most.html) · Andy Pavlo doesn't hold back in this critique of PostgreSQL's MVCC implementation. The way Postgres copies entire rows for updates rather than using delta records (like Oracle and MySQL) leads to massive bloat and performance issues. Having battled the autovacuum daemon myself, this piece resonated deeply. Sometimes the tools we love have fundamental flaws we just learn to work around.

- [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/) · Peeking at the Git configs of Git's own developers is like getting cooking tips from professional chefs. The nine settings they consider essential€”like `merge.conflictstyle = zdiff3` and `diff.algorithm = histogram`€”have already made their way into my `.gitconfig`. The fact that even Git's creators need to tweak the defaults speaks volumes about software design tradeoffs.

- [MAKING SOFTWARE](https://www.makingsoftware.com/) · A refreshingly honest reference manual about how everyday software works. It's not a tutorial or guide but rather an exploration of the inner workings of technology we use daily. The illustrations are delightful, and the approach of explaining complex concepts visually makes this accessible even to non-technical readers. I wish more technical content had this level of clarity.

- [Point of WebGPU on native](https://kvark.github.io/web/gpu/native/2020/05/03/point-of-webgpu-native.html) · An older but still relevant piece on WebGPU's potential beyond browsers. The vision of a unified graphics API that works across platforms is compelling, especially as the boundaries between web and native continue to blur. I've been experimenting with some visualization work lately, and the promise of "write once, run anywhere" for graphics code is tantalizing.

## Tech History

- [A USB interface to the "Mother of All Demos" keyset](https://www.righto.com/2025/03/mother-of-all-demos-usb-keyset-interface.html) · Ken Shirriff continues to be a computing archaeology hero. This modern implementation of Engelbart's chord keyset from his legendary 1968 demo makes me want to build one myself. The fact that someone is keeping this 57-year-old innovation alive in 2025 is both wonderful and slightly mad. I love these projects that connect us to computing's rich history.

## AI & Future Thinking

- [Dario Amodei – Machines of Loving Grace](https://darioamodei.com/machines-of-loving-grace) · Anthropic's CEO offers a thoughtful perspective on AI's potential upside that avoids both doomerism and blind techno-optimism. His vision of AI transforming fields like biology, neuroscience, and economic development is compelling, though I remain cautiously skeptical about how this plays out in practice. The essay's title nod to Richard Brautigan's poem sets just the right tone.

- [reclaiming the utopian vision - by Patricia Mou](https://wellnesswisdom.substack.com/p/reclaiming-the-utopian-vision) · Patricia's exploration of utopian thinking in urban planning hit me at the right time. Her argument that we shouldn't abandon utopian visions but rather see them as dynamic processes rather than static endpoints resonates with my own oscillation between optimism and pessimism about technology. The case studies of Auroville and Bhutan as examples of ongoing utopian experiments are particularly fascinating.

## Work & Life

- [The 80-hour Myth](https://nav.al/the-80-hour-myth) · Naval's take on work hours cuts through a lot of the hustle culture nonsense. His point that nobody truly works 80 productive hours a week€”that our best work comes in "tremendous, focused bursts, surrounded by long periods of dullness and inactivity"€”matches my experience. I've been tracking my own deep work time and the results have been... humbling. Quality over quantity remains the hardest lesson to internalize.
