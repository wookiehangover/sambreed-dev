---
title: Links, September 2023
slug: 2023/links-sept-2023
description: faintly falling, falling faintly, fall links
cover: "../../../assets/IMG_1162.jpeg"
heroAlt: "Sunset behind the flatirons, Boulder CO"
pubDate: "September 30 2023"
---

I write these posts on the last day of the month, so it's very easy for recency bias to creep in. This month, I kept a document open as a running list of the links I felt were noteworthy.

In addition to these swell links, a few months ago I added an RSS feed that mirrors my favorites from Feedbin: https://sambreed.dev/starred.xml

## AI
- Simon Wilson continues to have excellent takes on AI. https://simonwillison.net/2023/Sep/29/llms-podcast/#comparing-llms-to-crypto
	- Particularly, what he says about being able to convince yourself that it's useless. This type of motivated reasoning is shallow skepticism.
- https://maggieappleton.com/squish-structure
  - Maggie's website and takes on, well, everything are fantastic. The content here has a lot of parallels to work that I've been party to on the SHV design team for the last 3 years, and I'm excited to see similar ideas presented so well here.
- https://www.leebutterman.com/2023/06/01/offline-realtime-embedding-search.html
- https://supabase.com/blog/increase-performance-pgvector-hnsw
- https://arxiv.org/abs/1901.05103

## Long Reads
- [Understanding WASM](https://www.neversaw.us/2023/09/04/understanding-wasm/part3/you-are-here/) Part 3 of a tour-de-force blog post by Chris Dickinson. I've never met Chris, but know some of the folks he's worked with and have been following him for several years. He's a sharp thinker and this is an all-timer. It opens with the most concise definition of how processes work that I've ever read.
- https://www.ben-evans.com/benedictevans/2023/8/24/when-tech-says-no
	- People like to rag on Ben Evans but I don't get it. I've always gotten a lot out of his newsletter, and posts like this that help frame broader problems of the tech industry's interplay with politics and legislation are a primary example of that.
- https://thetaoofwealth.wordpress.com/2013/02/17/harry-brownes-17-golden-rules-of-financial-safety/
	- a 10+ year old post, gotta love the web.
- [List of digital bookshelves](https://tomcritchlow.com/wiki/books/bookshelves/)
	- I used to do this (sort of) but then fell off. Sourcing cover images and links and keeping it up to date was a pain. I don't want to give in to Goodreads, I have enough Amazon in my life already without giving them even more data.
- https://pluralistic.net/2023/09/05/not-that-naomi/
	- If I linked to every Cory Doctorow post I read, this blog would mostly be links to Cory Doctorow posts. I've been reading him since 2007, when I first started noticing "blogging" and "bloggers" were a thing. I read Eastern Standard Tribe and Someone Comes to Town, Someone Leaves Town
- https://books.worksinprogress.co/book/maintenance-of-everything/vehicles/digression-3-corrosion-rust-never-sleeps/3
	- Rust is super interesting and I'm looking forward to reading more of this book as it comes out, BUT
	- My hot takes from reading his biography last year are still heavy in my mind:
		- Brand is a trust fund baby and an unrepentant asshole, treated his first wife like shit, entertaining multiple affairs while stringing her along. If I knew someone that did this IRL, I would not want to associate with them. If you're unhappy and want to be with other people, fine. End it and move on. Don't hurt the other party. The book describes him as being miserably depressed during all of this, to which my response was, "yes."
		- He frequently used people. He didn't ever comprehend that his easy relationship to money wasn't universal. It's easy to think that nobody needs something you have in abundance.
		- He shows up at the right place at the right time. It's luck. He's just a lucky guy.

## Frontend

- https://deck-24abcd.netlify.app/
	- https://vercel.com/blog/building-an-interactive-webgl-experience-in-next-js
- https://github.com/shikijs/shiki
	- I used this to add code highlighting to and AI chat ui I maintain for work.
- https://xtermjs.org/
	- This is cool!
- [why not react](https://dev.to/tigt/why-not-react-2f8l)
	- Q3 2023 will be marked as the quarter that I lost faith in React, embraced Svelte, and learned that not all choices will stand the test of time. React will remain the leader in frontend imaginations for a bit longer, but I think that its time in the sun is starting to wane. The failure and complexity of Next.js's App directory.
- https://www.joshwcomeau.com/react/server-components/ 'splainer on React Server components. I love Josh's website.
- [Using Stencil to make a live poll Web Component](https://blog.partykit.io/posts/live-polls-with-stencil/) Someday, somehow, Web Components will be something that we all use. Not yet, however, we're getting closer.
- https://begin.com/blog/posts/2023-09-28-introducing-enhance-music More jangle and discord concerning Web Components. I wish this weren't shackled to a custom deployment infrastructure (squints) that's somehow not considered a build step by the authors. Get this tech on other platforms and it's way more interesting.
- [Chis Coyier on Live Coding Interviews](https://chriscoyier.net/2023/09/16/live-coding-interviews/)
	- This is a complex issue! and I have opinions!
		- Everyone hates coding interviews.
		- Interviewing a candidate is fundamentally a low trust situation.
		- Interviews must build trust between the company and the developer.
	- Background. I hired 120 front end developers at Credit Karma between 2015-2019. By the time I left in 2020, I had conducted over 400 interviews. I helped build the interview loop that was used by the entire company as it grew by 5x during my tenure. Before that, at my consultancy, I hired ~60 developers in 6 years (unfortunately I only have the numerator here, but it's safe to assume that I interviewed more developers here than we hired.) Since 2020, I've been advising and building companies at Sutter Hill Ventures.
	- Live coding helps build conviction that the candidate can do the work themselves.
		- Take homes place a lot of trust in a candidate. Take-homes can be the source of a hiring signal, but there's not a good way to falsify that the candidate did the work themselves. AI tools have made this even more difficult.
	- Take-homes present a Moral Hazard for the candidate. Nobody wants to assume bad intent. But there is an opportunity for a candidate to misrepresent themselves in a take home exercise in ways that insert doubt into the process.
		- Taking longer than the time allocated. The separation between a new developer and one with years of experience is the time it takes to solve an unfamiliar problem. This is fine, but if you're hiring someone for their experience, you can't judge the speed of their responses. If someone completes a take home successfully but takes 8 hours instead of 1, you'll never know without blindly trusting the candidate.
		- Using outside resources. Phone a friend, ask AI, crib from an open source project. Of course, given the situation on the job, these behaviors are normal and appropriate in the day to day. Resourcefulness is good! But so is situational awareness. If you wouldn't do it during a coding interview, you shouldn't do it during a take home. But who's watching...
		- Sharing evaluation materials. Your interview questions will get out no matter what. Having a backup is important.
		- At best, a take home should be time-boxed and then evaluated in a follow-up session with the candidate. This is more work for both parties.
	- Hiring is tough. The company is trying to find someone to perform in a technical role. Finding out if they'll be able to fulfill the job expectations. Trust cannot be built up instantly. In a negotiation, each party must be willing to give something up in order to proceed. For the company, they're willing to part with their time, resources, and capital.
	- Good hiring is about building trust. The company must trust that a candidate is representing themselves honestly. Likewise, a candidate must trust that the company is presenting the role and benefits accurately.
		- Everyone lies a little. It's what humans do!
	- Take-home's are great, if
		- You have limited time to conduct in-person interviews.
		- You can balance out moral hazards.
		- You understand that they provide different signals than live-coding.

## Backend

- https://avestura.dev/blog/explaining-the-postgres-meme
- More postgres things. Serverless Status, one of the newsletters that I've been subbed to for many years, wound down in September. This was offered as something to replace it with? ok, I'll drop it in feedbin. https://postgresweekly.com/issues/522


## Etc

- https://platinuminch24.notion.site/platinuminch24/100-lesser-known-but-useful-websites-78a9949a56fa422997a76f5331da02c9
	- I'm not sure about notion as a long-term hosting platform, but what do I know. Lists are good and cool.
- https://journals.sagepub.com/doi/10.1177/17456916221148147
- https://motd.co/2023/09/postmarks-launch/