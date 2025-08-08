---
title: Links, January 2024
slug: 2024/links-january
description: what's happening in the world of links
cover: "../../../assets/skate-dawg.png"
heroAlt: A skateboarding dog but make it cooler. Dalle-3 + SAM + Grounding DINO + SDXL Inpainting
pubDate: "Jan 31 2024"
---

Ok, I have been bad at this so far. It's already nearly the halfway point of February and I still haven't posted this (thank god for back-dating). But I have an excuse! Since mid-December I've shifted gears into a new round of company-building at SHV and have been feverishly building prototypes to help us "see around the corner" as it were.

Here's what I got.

## AI

- [Run local models with pinokio.computer](https://docs.pinokio.computer/) &middot; good idea, great execution. I've been writing lots of python over the last 2 months and recently compared working with python dependencies is like eating off of the floor. Pinokio makes running gradio demos for popular models much easier than wading through the swamp of pyenv, venv, conda, torch and everything else.
  - [mirror/app.py at main · cocktailpeanut/mirror](https://github.com/cocktailpeanut/mirror/blob/main/app.py#L45-L153)
- [PhyscalX/gradio-image-prompter](https://github.com/PhyscalX/gradio-image-prompter) &middot; Gradio has become impossible to ignore, but it is still too difficult to extend. In some ways, that's not the point, but as a frontend leaning developer it has a lot of idiosyncrasies that cannot be changed, merely tolerated. Seeing high quality components in the wild is encouraging and makes me hopeful for the future.
- [Repl.it Friction Log](https://bensu.notion.site/Repl-it-137e3120605245698e6a414a5d7dd4c4) &middot; Adding AI assistance is very challenging. I've had an on/off relationship with Replit over the past year, most recently using it to create [Frasier Bingo](https://frasier-bingo.replit.app/) on my iPad, where I struggled to find their AI features and got little use out of them when I did. I think desktop web is better, but if I'm on a real computer then I have no reason to use Replit.
- [Okapi BM25 - Wikipedia](https://en.m.wikipedia.org/wiki/Okapi_BM25) &middot; hey more AI searchy things to learn about.
- [Paper page - LLM in a flash: Efficient Large Language Model Inference with Limited Memory](https://huggingface.co/papers/2312.11514)
- [[2310.20360] Mathematical Introduction to Deep Learning: Methods, Implementations, and Theory](https://arxiv.org/abs/2310.20360)
  - [How I’m (re)learning math as an adult - Gabriel Mays](https://gmays.com/how-im-relearning-math-as-an-adult/)
  - These are on a theme that's dear to me: learning math as an adult outside of academic contexts. My history with math is troubled, and I've learned only-what-I-need-to in my professional life to get by, and, while I can clearly handle multi-dimensional reasoning, I long for the intuitive knowledge of even the basics of linear algebra and calculus that some of my colleagues over the years have possessed. That said, I've been extremely utilitarian in my approach and only have learned precisely what's need to get by as a developer. The second link here is good inspiration for taking a more measured and serious approach. There's always more to learn!
- [2023 reflection: on conviction and building 20+ AI prototypes](https://whichlight.substack.com/p/2023-reflection-on-conviction-and)
  - Kawan's work and the energy he brings is very inspiring.
- [Temporal Scene Generation with Stable Diffusion](https://huggingface.co/blog/Bilal326/stable-diffusion-project) &middot; The more I work with generative AI, the more convinced I am that my hunch that there was much deeper complexity below the surface of the iceberg than above.

## Front End

- [Tailwind css shine effect](https://www.julienthibeaut.xyz/blog/create-shine-effect-on-card-with-tailwind-css)
  - [Click Spark](https://ryanmulligan.dev/blog/click-spark/)
  - [Border gradient CodePen by Dennis Brotzky](https://codepen.io/brotzky/pen/JjzrzQm)
  - &middot; these are cheesy and perhaps overdone but I still like little effects like this. I don't have any muscle-memory for the technique so I've found myself on this page more than once. Bookmarking.
- [5 CSS snippets every front-end developer should know in 2024](https://web.dev/articles/5-css-snippets-every-front-end-developer-should-know-in-2024) &middot; lots of cleverness to be done with `:has()` now that "you can finally use it." Same for nesting.
- [Understanding SVG Paths](https://www.nan.fyi/svg-paths) &middot; The arcana of SVG path syntax isn't difficult on its surface but I can never remember the details.
- [2024: The Year of the Personal Website · Matthias Ott – User Experience Designer](https://matthiasott.com/notes/2024-the-year-of-the-personal-website) &middot; Yes.
- [missing the point of webassembly](https://wingolog.org/archives/2024/01/08/missing-the-point-of-webassembly) &middot; I've been a spectator and fan of WASM since before it was a standard, but I largely agree with this take. There's an odd failure to materialize around what's possible in the new design space it opened up; it seems like the forces preventing anyone from authoring high quality web experiences cannot be countermanded (solely) by improving low-level primitives. But hey at least now we have a decent version of Photoshop that runs in the browser.

* [Using alternative browser engines in the European Union - Support - Apple Developer](https://developer.apple.com/support/alternative-browser-engines/) &middot; Apple seems to be playing the malicious compliance card on this one, but it is promising that the door for alternate web runtimes on iPhones is being cracked open (in the worst possible big-government-y way, but still.) Let's hope that some version of this comes to the US someday.

## Code

- [Trade-offs between Different CRDTs](https://interjectedfuture.com/trade-offs-between-different-crdts/) &middot; like the WASM link above, I feel like CRDTs are a trend that's failed to accelerate as fast as I thought it would. Building for multiplayer is still as hard in 2024 as it was in 2021 or 2018. CRDTs are more widely available but the problem still has a "minimum complexity" to it that's hard to shake.
- [Stitchy — Rust application // Lib.rs](https://lib.rs/crates/stitchy) &middot; stupid image tricks!
- [ArchiveBox/ArchiveBox: Open source self-hosted web archiving. Takes URLs/browser history/bookmarks/Pocket/Pinboard/etc., saves HTML, JS, PDFs, media, and more...](https://github.com/ArchiveBox/ArchiveBox) &middot; I'm not a digital hoarder, but part of me deeply wants to save off a point-in-time copy of everything I link to or bookmark. The oddest quality of the web to come to terms with is how stunningly impermanent it is. The Internet Archive picks up some of the slack but there's more left on the table than there is archival bandwidth. A less busy and more-hoarderish version of myself could have fun with ArchiveBox.
- [Portable EPUBs](https://willcrichton.net/notes/portable-epubs/) &middot; Last year I did a much less comprehensive dive into EPUB rendering and came up without any results. It just seemed like a mountain of work and the Apple Books handling of epubs was fine. Will Crichton made it considerably further and it pleases me greatly to learn more about this. I have a small hoard of epub files that I someday hope to be able to read and browser without having to suffer through Calibre (which is great software, but terrible on the eyes.)
- [How Standard Ebooks serves millions of requests per month with a 2GB VPS; or, a paean to the classic web - Alex Cabal](https://alexcabal.com/posts/standard-ebooks-and-classic-web-tech) &middot; Speaking of accumulating digital ephemera, this post outlining the infrastructure at Standard Ebooks really hit the spot. I've downloaded a good chunk of their library over the years and now I know how they've been serving it. A very scrappy and well-run project.
- [Hack The Box: Bookworm](https://blog.0x7d0.dev/writeups/hack-the-box/bookworm/) &middot; CTFs stress me out too much to be fun but man reading through a tour de force like this fills me with wonder.

## Misc

- [Mourning Google](https://www.tbray.org/ongoing/When/202x/2024/01/15/Google-2024)
- [APOD: 2024 January 20 - Falcon Heavy Boostback Burn](https://apod.nasa.gov/apod/ap240120.html)
- [The One with Christopher Nolan](https://johnaugust.com/2023/the-one-with-christopher-nolan)

* [Unicode Fraction Creator](https://lights0123.com/fractions/) &middot; The web is so, so good for single use tools it's ridiculous. Sometimes you just need a fraction! Like when I wanted to specify my preferred hat size, 7⅞.
