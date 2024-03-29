---
title: Links Blog August 2022
slug: 2022/links-august-2022.html
description: Links! more links to things I've had open for most of August 2022
cover: "../../../assets/0411fe02-021e-4f3a-b45a-591907eea8a9.png"
heroAlt: "Links Blog August 2022"
pubDate: "Aug 30 2022"
---

I've committed to blogging more while also paying down my open tab debt. Once a month, I'll use the Session Buddy extension to export my current tabs on my personal computer.

- [pico.js, a face-detection library in 200 lines of JavaScript](https://nenadmarkus.com/p/picojs-intro/)
    - a few years old already, but things like this never cease to amaze me. When I was learning JavaScript, I would joke with my colleagues about far-fetched behavior like realtime face detection being done in JS, so to see it laid out so tersely makes me excited for the future. 
- [Architecture Notes — System Design & Software Architectures Explained](https://architecturenotes.co/)
    - the write-up here about Redis made it into my social feeds. I'm a sucker for diagrams and short paragraphs and database internals. I love systems, and I love Redis, despite having not used it for anything recently. Early on at Quick Left, I built a number of client projects that used Redis for caching or lightweight storage. I even made the mistake of trying to build an entire app with a Redis backend until it collapsed under it's own schema-less weight.
- [Shoelace.style](https://shoelace.style/)
    - I really, really don't want web components to be vaporware. Shoelace seems like a deliberate step in the right direction: making web-native components that are compatible with React (because that's where the developers are). Tools should embrace where developers are and help make them better at their jobs.
    - The Next.js integration looks ugly today, but I'm willing to bet that it improves over time.
- [Webhooks.fyi](https://webhooks.fyi/)
    - filed under: essential information. h/t to [Jeff Lindsay](https://progrium.com) for inventing webhooks in the first place. 
- [Deconstructing Bézier curves](http://blog.pkh.me/p/33-deconstructing-be%CC%81zier-curves.html)
    - tutorials about once-byzantine concepts are my jam. I could collect these infinitely. 
    - Two more links fell out of this one:
        - http://blog.pkh.me/p/29-the-most-useful-math-formulas.html
        - https://en.m.wikipedia.org/wiki/De_Casteljau%27s_algorithm
- [Instagram, TikTok, and the Three Trends – Stratechery by Ben Thompson](https://stratechery.com/2022/instagram-tiktok-and-the-three-trends/)
    - too long to summarize, but tldr social media destroyed the traditional media and now the next generation of apps are reshaping things again; we're all living through the consequences of it and won't know what trends matter for another decade.
- [CannedTXT](https://cannedtxt.com/)
    - widely shared, but a smart little source of "canned responses." It's tough to be terse, polite, and direct in writing without a lot of practice; this is a masterclass.
- [100 Rules — Personal Philosophy - Dru Riley](https://druriley.com/100-rules-2020/)
    - aphorisms are another fun thing to collect. I'd never thought of keeping a running list of the good ones.
- [The Unreasonable Effectiveness of Makefiles](https://matt-rickard.com/the-unreasonable-effectiveness-of-makefiles)
    - I'm on the fence about this hypothesis. At Credit Karma, I put Makefiles in lots of my projects because it seemed like a universal solution.
    - I've been using linux since I was a teenager, so the idea of running `make` in a project and just having it do the right thing appealed to me.
    - In practice, I found it to be less than ideal. Make syntax is "yet another" technology to weave into a project that's not already going to use it.
    - Using it to invoke npm commands and interface to other build and test scripts was fine, but it didn't remove any complexity. Rather, it added complexity in exchange for very little utility.
    - The only correct take on `make` is that there's really only _one_ Makefile. Every Makefile you encounter has been copypasta'd from the original.
- [Patterns.dev - Modern Web App Design Patterns](https://www.patterns.dev/)
    - huge collection of design patterns. Materials like this would have been extremely effective when I was learning how to build apps. Reading Stoyan Stefanov's JavaScript Patterns book was an eye-opening experience for me 10 years ago, so it's heartening to see that tradition continued.
- [Software Engineering Books](https://software-engineering-books.com/)
    - In a similar vein to the previous tab, here is a curated reading list. I've read a number of these already and the remainder are on the list.
    - I've already finished The Personal MBA because it was the only book listed in two different categories. It was dense, which is the only compliment for a business book, which tend to be 2 paragraphs worth of ideas spread across 100 pages of filler.
- [I Looked Into 34 Top Real-World Blockchain Projects So You Don’t Have To | Niko’s Blog](https://weh.wtf/34-blockchain-projects.html)
    - This is tongue-in-cheek because the "list" of 34 companies comes from an unknown media outlet and the original author is obviously pro crypto.
    - The original piece could very well be a link farming or affiliate marketing situation, and if you pick a year-old post on a site like that, you'd be shocked if the majority of the links weren't dead or redirects.
    - But yeah, crypto has so far only been provably good at creating exchanges to trade crypto, which exist to get market makers (the shills) and retail investors (the marks) to trade crypto. QED.
- [The Maintenance Race](https://www.worksinprogress.co/issue/the-maintenance-race/)
    - Long read by Stewart Brand. I recently finished reading his biography, Whole Earth, so Brand has been top of mind lately.
    - My only notes from the biography is that he occasionally seemed like a jerk, but I'm glad they left that stuff in, because honestly who's _not_ a jerk every now and then.
    - Anyway this is an interesting story and re-enforces an aphorism from Nassim Taleb that I'm fond of: "prepare for the worst, the best will work itself out".
    - [The Browser](https://thebrowser.com/) this is a paid newsletter that I don't pay for but seemed interesting, Brand tweeted about it having run a blerb about the article.
- [Implementing "seen by" functionality with Postgres](https://supabase.com/blog/2022/07/18/seen-by-in-postgresql)
    - smarties over at supabase demonstrating hyperloglog tables in postgres
- [codecrafters-io/build-your-own-x: Master programming by recreating your favorite technologies from scratch.](https://github.com/codecrafters-io/build-your-own-x#build-your-own-3d-renderer)
    - yet-another Rosetta Stone for building a wide variety of software projects
- [Burnout Guide: Symptoms, Causes, and Prevention - Commoncog](https://commoncog.com/g/burnout/)
    - haha an article about burnout that's a bit too long to read given my current energy and commitment levels. "I knows it when I sees it". Come back to this one later on down the road.
- [Cryptocurrency "market caps" and notional value](https://blog.mollywhite.net/cryptocurrency-market-caps-and-notional-value/)
    - I spent many years being biased _towards_ crypto.
        - In order to counteract that, I'm planning on spending as many years being well informed on the arguments against the industry.
        - My real opinion is more neutral. I look at it like gambling or day trading, neither of which I engage in, but I also don't care if my neighbor chooses to. Be safe and have fun!
        - That said, in a just society, regulatory frameworks should exist to protect people who gamble or trade securities from being scammed, mislead, or exploited.
    - The author, Molly White, is exceptionally good at presenting balanced and well-reasoned descriptions of current events and industry slip ups.
- [Fermat's Library | The Teletel/Minitel System in France annotated/explained version.](https://fermatslibrary.com/s/the-teletel-minitel-system-in-france)
    - France's pre-web barely-internet information services were ahead of their time and simultaneously offer a view into an alternate history of what could have been if that technology caught on like the web did.
- [CLIPasso: Semantically-Aware Object Sketching](https://clipasso.github.io/clipasso/?utm_campaign=%22Securities%22%20by%20Lux%20Capital&utm_medium=email&utm_source=Revue%20newsletter)
    - I'm not quite there with the maths in all the AI papers I read, but I still read them and try to understand what's going on at a casual level. I have the rest of my lifetime to get a grasp on the math parts.
- [マリウス . Running an Open Source Home Area Network](https://xn--gckvb8fzb.com/running-an-open-source-home-area-network/)
    - extremely detailed, extremely neckbeard (no offense intended) home networking setup. I simply don't have the patience to do anything more basic than running hard wired cables to a couple devices and plugging things into an unmanaged switch. Mad respect to the people that get creative with things like this.
- [Elegant Six-Page Proof Reveals the Emergence of Random Structure | Quanta Magazine](https://www.quantamagazine.org/elegant-six-page-proof-reveals-the-emergence-of-random-structure-20220425/)
    - Journalism about math is never boring.
- [Nadia Asparouhova | Idea machines](https://nadia.xyz/idea-machines)
    - remined me of the disney circular business model
- [SOC2: The Screenshots Will Continue Until Security Improves · Fly](https://fly.io/blog/soc2-the-screenshots-will-continue-until-security-improves/)
    - Security is such a deep topic, I could read about the procedural blood and guts like this all day. I'm glad to have done a stint with a security focused industry and for a company that treated it rigorously. But I don't miss being paranoid.
    - [Starting Up Security](https://scrty.io/)
    - [Internal Control Framework: A Practical Guide to the COSO Framework | Pathlock](https://pathlock.com/learn/internal-control-framework-a-practical-guide-to-the-coso-framework/)
- [Robert-van-Engelen/tinylisp: Lisp in 99 lines of C and how to write one yourself. Includes 20 Lisp primitives, garbage collection and REPL. Includes tail-call optimized versions for speed and reduced memory use.](https://github.com/Robert-van-Engelen/tinylisp)
    - wow
- [ML code generation vs. coding by hand - what we think programming is going to look like | Wasp](https://wasp-lang.dev/blog/2022/06/24/ML-code-gen-vs-coding-by-hand-future)
    - an area that I'm still in the "thinking deep thoughts" phase of
- [stateful/vscode-awesome-ux: Showcase of how to employ best practices to provide a high-fidelity user experience inside of VS Code extensions.](https://github.com/stateful/vscode-awesome-ux)
    - lots more can be done in vs code extensions than I had previously thought. Great seeing open source explorations like this.
- [Euler equations - fluid dynamics](https://en.m.wikipedia.org/wiki/Euler_equations_(fluid_dynamics))
    - more math-person envy on display
- [The Troubled History of Batman (1989): Burton! Keaton! Nicholson! Batmania! - YouTube](https://www.youtube.com/watch?v=941vlJw5y8I)
    - I like this channel.
