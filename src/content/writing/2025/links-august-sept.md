---
title: Links, late summer 2025
slug: 2025/links-august-sept
description: links and commentary
cover: ../../../assets/4c7b2d61-538d-4538-81f6-081f5e2dcb80.png
heroAlt: "prompt: 'a bob ross style painting of a sea otter' model: Reve"
pubDate: Sept 30 2025
---
I've been flipping between different browsers this year and have been accumulating links for a few months. It's halfway through October already but I'm backdating this.

- two markdown things from Vercel. Markdown is tricky to get right and it often means customizing an existing parser and renderer to get it right. Streamdown does that for you with sane defaults meant for streaming.
	- [markdown-sanitizers](https://github.com/vercel/markdown-sanitizers/tree/main/markdown-to-markdown-sanitizer)
	- [Streamdown](https://streamdown.ai/)
- normally I go for motion.dev but these GSAP components are exceptionally clever and there's lots of them
	- [React Bits - Animated UI Components For React](https://www.reactbits.dev/)
- another design trend made easy
	- [Dither Plugin](https://dither.floriankiem.com/)
- a [neat button](http://codepen.io/simeydotme/pen/ZEgJoXB)
- a [really good data table](https://github.com/openstatusHQ/data-table-filters)
- web browsers continue to grow to eat every category of application, including video
	- https://github.com/Vanilagy/mediabunny
- this is cool and not easy to build from scratch
	- [Announcing tldraw SDK 4.0 - tldraw: Build whiteboards in React with the tldraw SDK](https://tldraw.dev/blog/tldraw-sdk-4-0)
- I don't tend to go in for shock-and-awe changes to time honored workflows, but I have worked with folks who swear by stacked branches so maybe it's good and I'm missing out.
	- [Tutorial and bird's eye view - Jujutsu docs](https://jj-vcs.github.io/jj/latest/tutorial/)
- I'm rarely tempted into doing anything so complicated as to need something like this, but in the rare case that does deem it necessary, this seems like a good option 
	- [Cap'n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)
- ai maths
	- [Modular Manifolds - Thinking Machines Lab](https://thinkingmachines.ai/blog/modular-manifolds/)
- again this is in the category of things that I would fuck with if I were making things intentionally difficult or absurdly robust.
	- [Introduction - Flox Docs](https://flox.dev/docs/)
- a nice logger:
	- [LogTape](https://logtape.org/)
- I hope this doesn't link rot! it's a great little game.
	- https://x.com/abeto_co/status/1971219002614779991
	- [https://messenger.abeto.co](https://t.co/FNKiXFPk2K)

## databases

- I haven't tried this strategy but I like the idea: consume every possible stripe webhook and mirror their data in your database. feels much more sane than having a split-brained app with important details sequestered away in a thing that says to not use it as a database
	- [Stripe-To-Postgres Sync Engine as standalone Library](https://supabase.com/blog/stripe-engine-as-sync-library)
- next postgres db I spin up will be on planetscale.
	- [Announcing PlanetScale for Postgres — PlanetScale](https://planetscale.com/blog/planetscale-for-postgres)
	- I've wanted a reason to use them for years but I rarely go for MySQL over Postgres, and until I wrote this sentence I had never really thought about why. MySQL was the first database I used heavily as programmer. I started using Postgres in the early 2010s and then again in the 2020s when I changed jobs and started building greenfield projects more frequently.
- [Agile database schema migration tool for Java | by Sam Pullara | spullara | Medium](https://medium.com/spullara/agile-database-schema-migration-tool-for-java-379c8db8b248)
- another piece of benevolent open source from Vercel, this time to help clean up database connections when you're on their fluid compute platform.
	- [The real serverless compute to database connection problem, solved - Vercel](https://vercel.com/blog/the-real-serverless-compute-to-database-connection-problem-solved)
	- [`attachDatabasePool`](https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#attachdatabasepool)
	- an aside: I really like the Vercel fluid compute runtime. In many ways, it's like the web infrastructure that I built at Credit Karma: a Node.js execution layer that's quasi-ephemeral and scales gracefully. There are many differences but the end result has the same quality: you push your code and it runs without issue.
## caro

- I have been deep into the works of Robert Caro since 2022 after I first spotted the doorstopper-size copy of The Power Broker in my brother's Brooklyn office. Little did I know that I was entering a golden age of Caro readership, with lots of Caro-adjacent podcast media to consume in the years ahead. In addition to the thousands pages of reading. First, a link from my co-worker [Kevin Kwok](https://kwokchain.com) of a interview with Caro and another of my favorite authors:
	- [An Interview With Robert Caro and Kurt Vonnegut](https://www.robertcaro.org/post/an-interview-with-robert-caro-and-kurt-vonnegut)
- This got me thinking about what had steered me into this rabbit hole, and the Dwarkesh post on the LBJ bios was probably the next thing in the timeline that led me on. 
	- [Lessons from The Years of Lyndon Johnson by Robert Caro](https://www.dwarkesh.com/p/lyndon-johnson)
- As luck would have it, I had finished reading the book just in time for this book club series to start and I listened to every one of these running laps around the lake at Stanford after work.
	- [The 99% Invisible Breakdown: The Power Broker](https://99percentinvisible.org/power-broker/)

