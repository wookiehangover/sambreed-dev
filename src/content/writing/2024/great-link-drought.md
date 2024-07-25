---
title: "The great link drought of 2024"
slug: 2024/great-link-drought
description: whoops I stopped linkdumping
pubDate: "Jul 23 2024"
---

I had a good run with my linkdump blog posts. Here's why I stopped, followed by a brief list of links.

I've never been able to blog consistently, despite keeping a daily writing habit going for many years now. Just look at the sad history of my posts: mostly clustered around holidays or, in true developer fashion, when I make updates to my website.

The main reason for petering out after [February 2024](/writing/2024/links-february): I switched to using the [Arc Browser](https://arc.net/) for my daily driver.

Arc isn't without controversy. I've heard complaints about their shift towards AI features like search indexing and summarization. For me, those features are not what makes Arc interesting: it's the design.

One UX feature that caught me off guard when I first started using it: it automatically discards unpinned tabs after 24 hours. While the timeout can be adjusted, this significantly disrupted in my blogging strategy of letting ~~dead~~ interesting tabs accumulate for a month before compiling them into a list to post here.

As source of tabs dried up, I stopped posting. As a consequence, the criteria for me saving a link became more rigorous: I needed to remember to capture it somehow, usually by moving it to a text document.

It's telling how badly broken browser bookmarking is that I never considered saving these as acutal bookmarks. The same goes for Pinboard. Ideally, these linkdumps to be built up automatically, perhaps through a heuritic analysis of my browser history.

## March
- [BrushNet: A Plug-and-Play Image Inpainting Model with Decomposed Dual-Branch Diffusion](https://tencentarc.github.io/BrushNet/)
  - a paper I read when working with image models earlier in the year, specifically around masked inpainting with segment anything + grounding dino and some clever masking. It's better than nothing but you still have to re-roll a lot to get good results.
- [Ontology for Media Creation - MovieLabs](https://movielabs.com/production-technology/ontology-for-media-creation/)
  - just about everything you can possibly think of probably has a normative specification, should you ever need one
- [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/)

## April
- [GitHub - karpathy/llm.c: LLM training in simple, raw C/CUDA](https://github.com/karpathy/llm.c)
  - one of my colleagues is doing a training run for gpt-2 using this code.
- [JARVIS-1: Open-world Multi-task Agents with Memory-Augmented Multimodal Language Models](https://craftjarvis-jarvis1.github.io/)
  - somewhat anticipating the SeeACT link below. someday working agentic programming patterns will shake out of academia into commerical use.
- [The Forest](https://theforest.link/#info)
  - clever metaphor but I wish it were more visual. also seems to be in need of curation.
- [Introducing Idefics2: A Powerful 8B Vision-Language Model for the community](https://huggingface.co/blog/idefics2)
  - Multimodal models unlock a lot of previously closed doors. Semantic understanding of images is a powerful primitive.
- [Nature of Code](https://natureofcode.com/)
  - I love a free code book and this one seems good.
- [Apple's Future Computer: The Knowledge Navigator - YouTube](https://www.youtube.com/watch?v=9bjve67p33E)
  - had never seen this but it's an uncanny vision that seems close-ish to reality today with the right tools.
- [Fermat's Library | The Uncanny Valley annotated/explained version.](https://fermatslibrary.com/s/the-uncanny-valley#email-newsletter)
- [Collatz conjecture - Wikipedia](https://en.wikipedia.org/wiki/Collatz_conjecture)
- [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
- [Introducing Augment: a company dedicated to empowering developers with AI](https://www.augmentcode.com/blog/introducing-augment)
  - I've had the priviledge to work with the Augment team since day 1 and have been using their product constantly since the first alpha. Watch this space, Augment has a seriously talented team.

## May
- [Generate open graph social preview images with Remix](https://www.jacobparis.com/content/remix-og)
  - Vercel has done the lion-share of the work here but I needed to do this in Remix and found this specific guide helpful. Dynamic preview card images go a long way to make a product feel more complete.
- [FIELD.IO](https://field.io/)
  - I still appreciate a good agency site.
- [Figma’s journey to TypeScript | Figma Blog](https://www.figma.com/blog/figmas-journey-to-typescript-compiling-away-our-custom-programming-language/)
  - People complain about TypeScript but I don't get it. TypeScript is great, and a more sensible long term bet for your company than a homemade dialect.
- [Stanford CS25: V4 I Jason Wei & Hyung Won Chung of OpenAI - YouTube](https://www.youtube.com/watch?v=3gb-ZkVRemQ)
  - Recommended by the ai researchers I work with as a good introduction to training techniques.
- [Language agents: a critical evolutionary step of artificial intelligence](https://yusu.substack.com/p/language-agents)
  - [SeeAct](https://osu-nlp-group.github.io/SeeAct/)
  - I saw Yu Su present his work on language agents and appreciate his breakdown of the space. The hardest part of agentic programming is knowing when a task is done, especially when your history overflows the available context. My hunch is that you'll need split-brained or adversarial architectures to achieve even rudimentary autonomy.

## June
- [Ask a Manager: I was rejected because I told my interviewer I never make mistakes](https://www.askamanager.org/2024/06/update-i-was-rejected-because-i-told-my-interviewer-i-never-make-mistakes.html)
  - A tautology of a question, very hard work to miss something this obvious.
- [Fast Crimes at Lambda School](https://www.sandofsky.com/lambda-school/)
  - I was an early advocate for code school (Galvanize and then later Turing Academy) and hired some great people that way, so it was shocking to learn about how badly things went for lambda school.
- [common.wtf — commonly used unicodes](https://www.common.wtf/)
- [Crispin](https://www.crispin.com/)
  - fka Crispin Porter Bogusky. I did a lot of work for them at Quick Left in the early 2010s. I _still_ appreciate a good agency website.
- [MUMU: Bootstrapping Multimodal Image Generation from Text-to-Image Data](https://arxiv.org/abs/2406.18790#)
  - The authors, [@alexy_peys](https://x.com/alex_peys) and [@williamLberman](https://x.com/williamLberman), are on my team at shv and it was a pleasure to watch them work on this. They made very notable progress using simple architectures, clever data preparation, and limited GPU hours.

## July
- [The Magic of Clip Path](https://emilkowal.ski/ui/the-magic-of-clip-path)
- [jbilcke-hf/clapper: Clapper.app, the video editor designed for the age of AI cinema](https://github.com/jbilcke-hf/clapper)
- [The E.U. Goes Too Far – Stratechery by Ben Thompson](https://stratechery.com/2024/the-e-u-goes-too-far/)
	- [The American digital backwater](https://www.garbageday.email/p/american-digital-backwater)
