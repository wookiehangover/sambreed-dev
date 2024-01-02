---
title: Links, December 2023
slug: 2023/links-december-2023
description: Every month I turn my open browser tabs into a blog post.
cover: "../../../assets/lofi_garden.png"
heroAlt: "“lofi garden” Steps: 1, Sampler: DPM++ 2M Karras, CFG scale: 1, Seed: 1435965077, Size: 1024x512, Model hash: 2e58e3704b, Model: sdxlTurbo_fullVersion, Version: v1.7.0 Time taken: 0.6 sec."
pubDate: "December 31 2023"
---

Final link dump of the year. I made it, I swear. Now that I'm duty bound to keep up the posting and build a little archive for myself, I'm going to try to keep the habit up into 2024. Enjoy!

## AI

* [LLM Visualization](https://bbycroft.net/llm) &middot; this is very cool. Massive parallelism is fundamentally difficult to visualize, as evidenced by the massive increase in scope between the 'nano' and 'gpt-3' architectures on display here.
* [Little Book of Deep Learning](https://fleuret.org/francois/lbdl.html) &middot; recommended by some of the AI researchers I work with and it's an excellent resource.
* [Quickstart Guide to SDXL Turbo - Civitai Education](https://education.civitai.com/quickstart-guide-to-sdxl-turbo/)
	* [stabilityai/sdxl-turbo · Hugging Face](https://huggingface.co/stabilityai/sdxl-turbo)
  * Models getting faster without dropping quality is a big deal. Having spent the better part of the past year with image gen models, I have come to think of them as very weird, very compressed databases for images: You put in a query, it starts with random noise and bumps each pixel until it gets closer to the target image. Do this enough times and with a specific enough prompt and you can make anything. When you can get results in less than a second on a consumer graphics card, it absolutely feels like a database.
* [Bash One-Liners for LLMs](https://justine.lol/oneliners/) &middot; 2023 has been a banner year for LLMs, evidenced by tools like this being readily available and easy to run.
* [Universal and Transferable Adversarial Attacks on Aligned Language Models](https://llm-attacks.org) &middot; Continuing on the theme that this tech is new in some ways but exactly the same as old tech in others, the various vulnerabilities of LLMs are a fascinating topic and importatnt area to study. 
* [Stuff we figured out about AI in 2023](https://simonwillison.net/2023/Dec/31/ai-in-2023/) &middot; A late entry in this list, Simon Willison was a prolific contributor to the AI space this year through his blog and social media presence. 

## Tech

* [Pipe Dreams - The Life and Times of Yahoo Pipes](https://retool.com/pipes) &middot; I am a huge fan of Yahoo Pipes. Back in the early days of Quick Left, my co-founder Collin and I got into all sorts of shenanigans with pipes.
* [blakewatson.com – omg.lol: an oasis on the internet](https://blakewatson.com/journal/omg-lol-an-oasis-on-the-internet/) &middot; you know the way fun ideas can make you feel out-of-the-loop? I have not tried omg.lol and probably am not the target audience, since I'm already trying to "do a website" here and I do not need another one.
	* The email forwarding thing is cool, too. I've been using `destroy.email` as a vanity domain for myself for many years, and it makes me curious about how omg.lol is running under the hood.
* [A forty-year career. | Irrational Exuberance](https://lethain.com/forty-year-career/) &middot; Will Larson is one of my favorite writers and thinkers in the software industry. He approaches everything so practically and thoroughly, and this is no exception. As I've gotten further in my career, I've been actively trying to shift towards strategic, long-term thinking while simultaneously delivering on short term goals.
	* It was linked from another post of his, [Advancing the Industry](https://lethain.com/advancing-the-industry/), which is also a banger. He has been relentlessly publishing on his [website](https://lethain.com/) the past few months and I find myself bookmarking every post in Feedbin.
* [Why and how we do work trials at Linear](https://linear.app/blog/why-and-how-we-do-work-trials-at-linear) &middot; We did something similar at Quick Left but didn't call it work trials or write a blog post about, nor did we really know what we were doing. But that said, if you want to grow a team and have the patience to hire like this, you should try it. Working with someone over a few days is much better way to get a read on their personality and preferences than grilling them for a few hours in a traditional interview.
* [Andy Matuschak - Self-Teaching, Spaced Repetition, Why Books Don’t Work](https://www.dwarkeshpatel.com/p/andy-matuschak) &middot; Sometimes you come across a podcast and it sounds just interesting enough to bite. I run a lot, so throwing on an hour or two of something (at 1.3-1.5x speed) is not a huge commitment. I was absolutely hooked within the first five minutes of this episode. I was casually familiar with Andy Matuschak's work before, but now I am an acolyte.
* [How We Clone a Running VM in 2 Seconds](https://codesandbox.io/blog/how-we-clone-a-running-vm-in-2-seconds) &middot; bookmarking this for the next time I need to build rapid-spinup infrastructure.
* [Rethinking Serverless with FLAME](https://fly.io/blog/rethinking-serverless-with-flame/)
* [Doom Guys Reminisce](https://arstechnica.com/gaming/2023/12/dooms-creators-reminisce-about-as-close-to-a-perfect-game-as-anything-we-made/) &middot; Doom's 30th anniversary was this year. Like most other computer users in the early 90s, DOOM completely changed what I thought of computer games.
* [hrvach/deskhop: Fast Desktop Switching Device](https://github.com/hrvach/deskhop) &middot; bookmark
* [Eric Kissane - Root & Branch](https://erinkissane.com/root-and-branch) &middot; Well designed personal site and important social / internet research.
* [Lapsus$ member hacks GTA VI while in custody](https://www.bbc.com/news/technology-67663128)
	* This story was widely reported but I couldn't find any details about how, specifically, he managed to perpetrate the hack with only a phone, a hotel television, and an Amazon FireTV stick.
	* My guess: he jailbreaks (lol) the FireTV to get a shell, then telnets to a jump host with more juice/tools than the tv stick, and then does his thing to infiltrate Rockstar from there. Presumably he'd already compromised Rockstar and re-infiltrating was simply a matter of course.
* [4-year campaign backdoored iPhones using possibly the most advanced exploit ever | Ars Technica](https://arstechnica.com/security/2023/12/exploit-used-in-mass-iphone-infection-campaign-targeted-secret-hardware-feature/) &middot; This is nuts. I can only imagine you get to this level of sophistication through years of concentrated effort to reverse engineer the hardware, or get otherwise stone-silent former Apple employees to spill their guts. Good to remember that every device can be hacked, almost like in the movies. Real life Mr Robot shit.
* [iMessage, explained - JJTech](https://jjtech.dev/reverse-engineering/imessage-explained/) &middot; While we're security-adjacent, there's been quite a lot written about the recent attempts to skirt Apple's iMessage walled garden. This is a good read.
* [Is software getting worse?](https://stackoverflow.blog/2023/12/25/is-software-getting-worse/) Nope.
* [Stirling-Tools/Stirling-PDF: locally hosted web application that allows you to perform various operations on PDF files](https://github.com/Stirling-Tools/Stirling-PDF) &middot; pdf tricks!


## Front End

* [Honey, I shrunk the telemetry](https://blog.bitdrift.io/post/honey-i-shrunk-the-telemetry)
	* Story Time: when I first heard of Bit Drift, I racked my brain trying to think of why their founder Matt Klein seemed so familiar to me. Was it because I used Envoy? I didn't recall knowing any of the other core team members. It was a mystery.
	* Finally it hit me: I met Matt very briefly in 1999 or 2000 when he was a college student at Duke University. He was with a group of my brother's friends that briefly stayed at my house while they were on their way to some other spring/winter vacation destination in Florida.
	* The reason why he stood out in my memory was simple: Matt introduced me to Linux. He clearly noticed that I had a bedroom full of computers all networked together and connected to a big stereo and several monitors. I was roughly aspiring to Neo's desk in his real-life apartment.
	* Matt showed me how to download distros from university servers (I remember getting Redhat and Slackware). From that moment I was hooked. It gave me a whole new way to use my computers! He also showed me [Linux From Scratch](https://www.linuxfromscratch.org/museum/lfs-museum/1.1/LFS-HOWTO-1.1-HTML/), which I printed out and proceed to compile the a kernel from source and install everything to get to a gnome desktop. I remember showing my dad but he didn't really get it.
	* Anyway, Client Telemetry is a big problem! All of the serverside solutions tend towards bloated client implementations that drain batteries and kill performance. Bit Drift's ring buffer memory and control plane architecture are both points of interest, as well as their choice to target native clients.
* [Nuclear Anchored Sidenotes](https://meyerweb.com/eric/thoughts/2023/09/12/nuclear-anchored-sidenotes/) &middot; great exploration of an experimental API 
* [Defining styles | StyleX](https://stylexjs.com/docs/learn/styling-ui/defining-styles/) &middot; In 2023 I wrote more CSS than I would have guessed. While I like and appreciate [Tailwind CSS](/wiki/computers/web-development/front-end/zen-of-tailwind) I don't think it's the final word in styling. The main criticism that hits it is that carrying around tons of very long or complex class strings in a large project is as terrible as a dragon's hoard of unorganized CSS.
  * I don't think StyleX has a future outside of Facebook, but seeing the compiler-driven, close-to-the-code approach while ditching all the strings is a step in the right direction.
* [Examples of Great URL Design - Jim Nielsen’s Blog](https://blog.jim-nielsen.com/2023/examples-of-great-urls/) &middot; No matter how many projects I do, I always come away feeling like I could have made better or different URL choices. Ask me about UUIDs sometime 🤡
* [Modern CSS Reset / Global Styles](https://www.joshwcomeau.com/css/custom-css-reset/) &middot; Funny story, I had been writing the CSS for this website by hand since moved from Next to Astro, and I hadn't used a proper global reset from the outset. CSS is weird when you don't reset things! I've been using resets in some fashion my entire career without reallt appreciating their value.
* [The NBA, Ranked](https://nbarankings.theringer.com/) &middot; Good website!
* [The await event horizon in JavaScript](https://frontside.com/blog/2023-12-11-await-event-horizon/) &middot; This is deeper than I've every bothered to go into JavaScripts concurrency problems.
* [Pagefind — Static low-bandwidth search at scale](https://pagefind.app/) &middot; New-to-me but not new, and as I've been jamming a bit on search lately, this is in the to-investigate pile.
* [Introducing the new Wasmer JS SDK](https://wasmer.io/posts/introducing-the-wasmer-js-sdk) &middot; More proof that web browsers are continuing to grow as a compile target for other platforms and runtimes. Having interop with other languages via WASM expands the types of tools that can be built. WASM hasn't caught on in a major sense, but I feel like we're going to look back in a few years and see browsers as a much richer and more capable platform than what we have today.

## Misc

* [52 things I learned in 2023.](https://medium.com/magnetic/52-things-i-learned-in-2023-a3bbb9f9323d) &middot; End of year lists are always popular and make the rounds this time of year. I am choosing to share this one because I had the tab open.
* [Ishkur's Guide to Electronic Music](https://music.ishkur.com/) via [jwz](https://www.dnalounge.com/backstage/log/2023/12/16.html)
* [The iA Writer Template for Screenwriters](https://ia.net/topics/ia-writer-fountain-template) &middot; Back in college, I spent a lot of time in Final Draft and still carry the battle scars. iA Writer, on the other hand, has been making joyful software that I'vehappily been using for more than a decade, so I was stoked when I heard about their screenwriting template. It's inspired me to look back on my old work and maybe write a little bit of new stuff.
* [Poor Charlie’s Almanack: The Essential Wit and Wisdom of Charles T. Munger](https://www.stripe.press/poor-charlies-almanack/) &middot; This should be required reading for everyone. I wish I had gotten on to this way earlier in my career, having only found out about it 4-5 years ago. Charlie was a great American and a singular thinker. We are blessed to have such a volume.
* [Aphantasia - Wikipedia](https://en.m.wikipedia.org/wiki/Aphantasia) &middot; The diversity of human experience blows my mind, and I can picture that quite vividly in a variety of different ways, which itself is not universal. Some people lack the ability to project mental images at all. Brains are tricky!
* [November blend of links](https://thejollyteapot.com/november-2023-blend) &middot; A very nice website that is also a link dump.
* [JOHN HODGMAN — Judge John Hodgman Settled Law](https://www.johnhodgman.com/post/131161007023/judge-john-hodgman-settled-law) &middot; These are all great and true, especially the Tom Waits rule. You cannot make your friends like everything you like!
* [Boardwatch Magazine 1994-12 : Boardwatch Magazine : Free Download, Borrow, and Streaming : Internet Archive](https://archive.org/details/Boardwatch1994-12/page/n7/mode/2up) &middot; also from jwz. I am a sucker for old tech magazines, and I had never seen Boardwatch before. Hours of fun to be had flipping through the archive here.