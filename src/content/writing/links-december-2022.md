---
title: Links, December 2022
slug: links-december-2022
description: More links to tabs I've kept open for 4 months

heroImage: "/img/f7d62a45-a2c6-48fb-be8a-1735bf3f2d5f.png"
heroAlt: these four yet crouched at the edge of the firelight among their strange chattels and watched how the ragged flames fled down the wind as if sucked by some maelstrom out there in the void - Stable Diffusion v1.5
pubDate: "Dec 31 2022"
---

Yikes! When I last posted a batch of links, I said I would get to this every month. That didn't happen. September rolled into October, Fall became winter and here we are, at the end of the year with a big crop of tabs to round up.

### Technology

* [Blogs about Hardware (ooh.directory)](https://ooh.directory/blogs/technology/hardware/)
	* I had been secretly wanting for something just like this to come back in fashion, essentially the Yahoo! directory concept from 1995 but curated, up to date, and with modern features.
* [Why writing by hand is still the best way to retain information](https://stackoverflow.blog/2022/11/23/why-writing-by-hand-is-still-the-best-way-to-retain-information/)
	* I prefer to take meeting notes by hand, since typing is difficult to be discrete about and I'm not enough of an inborn stenographer to take verbatim notes and stay engaged in a conversation. My notes during meetings tend to me for me to organize my thoughts around what I'm hearing, capturing themes and motives and plot points but rarely dialog or executive summaries in real time. These notes often aren't even helpful when I look back at them! Yet I have a dozen notebooks full of them covering as many years of meetings, and rarely if ever have I returned to the content of a specific note after more than a few weeks. 
* [A Faster Horse](https://redmonk.com/sogrady/2022/12/09/faster-horse/)
	* Some AWS history and ruminations on it's future, in the context of its own ever-increasing complexity and the emergence of higher level platforms like Vercel, Fly, et al. In broad strokes, AWS in 2022 is similar to Microsoft in 2005 when AWS first launched. Do they innovate by building for customers or developers?
*  [Work Is Work | codahale.com](https://codahale.com/work-is-work/)
	* An exceptionally clever take on what grinds the gears in large organizations and some advice on how to combat them. None of this is bad advice.
* [The Web’s Next Transition | Epic Web Dev by Kent C. Dodds](https://www.epicweb.dev/the-webs-next-transition)
	* It's taken me 15+ years to have strong intuition and first hand experience with different application patterns discussed here, and Kent gets it all right. I've been using Remix for some time now and their implementation of these patterns make for a powerful and flexible way to build things quickly. Say what you will about React, but it's undeniable that there's something good going on in this part of the web development community if these types of frameworks are the end result.
* [A year of new avenues](https://www.robinsloan.com/lab/new-avenues/)
	* Before the events prompting this post, I had written a bit about why I was dissatisfied with Twitter and social media in general in 2022. The specific circumstances don't warrant any more than, "I don't post there anymore" but Robin Sloan's post nails the obituary for the last generation of platforms with a tone of optimism that can still be found in the right places online.
* [Some Tricks To Making Mastodon Way More Useful](https://www.techdirt.com/2022/12/29/some-tricks-to-making-mastodon-way-more-useful/)
	* Continuing on the thread of life online after Twitter, the new website has some interesting quirks and features and ways to use it. Protocols are more resilient than platforms. 

### Code / Software

* *[FFmpeg - Ultimate Guide | IMG.LY Blog](https://img.ly/blog/ultimate-guide-to-ffmpeg/)
	* (In no particular order here,) ffmpeg is a swiss army knife of video and audio processing that I got to know well for a project for Freeskier Magazine in 2009 and have been using when the need arises ever since. It's a daunting tool so having a crisp how-to around is a good thing.
* [CRDT: Fractional Indexing - Made by Evan](https://madebyevan.com/algos/crdt-fractional-indexing/)
	* Conflict-Resistant Data Types continue to be cool!
* [Making the Web Developer’s Pilgrimage · Jens Oliver Meiert](https://meiert.com/en/blog/web-developer-pilgrimage/)
	* What a great idea that I'll never have time to do! This is a level of pedantry that I can really appreciate. I learned so much from reading the JavaScript spec when I was getting deeper knowledge of the language but I hadn't ever considered exploring the HTML spec in the same way. 
* [The HTTP crash course nobody asked for](https://fasterthanli.me/articles/the-http-crash-course-nobody-asked-for)
	* Continuing on the theme from the link above.
* [The state of HTTP in 2022](https://blog.cloudflare.com/the-state-of-http-in-2022/)
	* A late addition to the list. HTTP/3 had been on my radar but I hadn't done much reading about it before this. I knew part of the story with HTTP/2 push being hollow from following Jake Archibald but didn't know that it was enough of a wash for Chrome to remove it altogether in favor of 103 response hints and it absent from all HTTP/3 implementations (but still present in the spec.)
* [The Modern Algorithmic Toolbox (CS168), Spring 2022](https://web.stanford.edu/class/cs168/index.html)
	* I love collecting bookmarks like this. I'll likely never go through these course materials but it's always fun to dunk my head into the icy fresh waters of academia sometimes and pretend I was a college student who wanted to learn about computers.
* [Algorithms you should know before you take system design interviews](https://blog.bytebytego.com/p/algorithms-you-should-know-before?triedSigningIn=true)
	* I don't believe in quiz style interviews but these types of lists are useful because they usually corelate to real world use cases.
* [Creating a Zoom UI - Steve Ruiz](https://www.steveruiz.me/posts/zoom-ui)
	* Having learned this the hard way, this was worth bookmarking.
* [AWS Well-Architected - Build secure, efficient cloud applications](https://aws.amazon.com/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate&wa-lens-whitepapers.sort-order=desc&awsm.page-wa-lens-whitepapers=1&wa-guidance-whitepapers.sort-by=item.additionalFields.sortDate&wa-guidance-whitepapers.sort-order=desc)
	* The Redmonk article linked above is not wrong about the labyrinthian complexity that one can get mired in when doing just about anything in AWS. So much so that a compendium of best practices and example architectures spanning the myriad choices within AWS is more than necessary.
* [Rob Pike's simple C regex matcher in Go](https://benhoyt.com/writings/rob-pike-regex/)
	* Coding is tough and people are really clever about it!
* [Web technology optimism hour](https://macwright.com/2022/11/18/optimism-updates.html)
	* The note from above on Kent C. Dodd's article listed above, The Web's Next Transition, hits on this same theme: it's a great time to be a web developer! Things can be better but I'd rather be building things today than 10 or 20 years ago. The tools are better, the browsers are better, 
* [The Distributed Computing Manifesto](https://www.allthingsdistributed.com/2022/11/amazon-1998-distributed-computing-manifesto.html)
	* AWS-heavy linkage this go around, but man oh man is this a good one. I had the pleasure of meeting Wernver Vogels when I was on business in Amsterdam some years ago, and spent an afternoon watching the Seahawks in the playoffs in a bar with him and a large group of people. I don't remember talking to him beyond introducing myself and that he was in a Marshawn Lynch jersey. A few years later I would be sitting at my desk on the 7th floor of the Credit Karma office and I would see Marshawn Lynch pop his head out of the door to the stairwells, look in either direction with big eyes before scampering (light feet on a big dude!) down the hall. He was looking for his sister, who worked there, but I didn't have that fact in that moment. Anyway, this post should be essential reading for any software engineer.
* [Modules, monoliths, and microservices](https://tailscale.com/blog/modules-monoliths-and-microservices/)
	* More good information on systems design. Remined me of [Boundaries](https://www.destroyallsoftware.com/talks/boundaries)  because most anything that touches on modularity will remind me of _Boundaries_. 
* [ReDoS "vulnerabilities" and misaligned incentives](https://blog.yossarian.net/2022/12/28/ReDoS-vulnerabilities-and-misaligned-incentives)
	* Can't agree with this more. I posted about it here: https://mastodon.social/@sambreed/109598537983995990
* [Cache your CORS, for performance & profit](https://httptoolkit.com/blog/cache-your-cors/)
* [How I’m a Productive Programmer With a Memory of a Fruit Fly](https://hynek.me/articles/productive-fruit-fly-programmer/)
	* I'm a sucker for descriptions of other people's workflows. In practice people use computers in wildly different ways to accomplish the same task. This is both frustrating and amazing.
* [Playing with ActivityPub](https://macwright.com/2022/12/09/activitypub.html)
	* The reason why the events surrounding social media platforms at the end of this year seem different than the last schism is that there are now alternative platforms that have a few years of hardening under their belt. Underlying these new platforms are a set of protocols and conventions for distributing content across independent host applications, rather than a single central authority. ActivityPub and its ilk are noteworthy and ought to be explored. The prospect that any website can become follow-able across a large network feels like a concept from an earlier era being brought back to life.

### Design

* [Adventure game graphics with DALL-E 2](https://hpjansson.org/blag/2022/08/16/adventure-game-graphics-with-dall-e-2/)
* [Clustering high-dimensional data: 3D point clouds | Towards Data Science](https://towardsdatascience.com/fundamentals-to-clustering-high-dimensional-data-3d-point-clouds-3196ee56f5da)

### AI

* [The AI Unbundling – Stratechery by Ben Thompson](https://stratechery.com/2022/the-ai-unbundling/)
* [Nvidia In the Valley – Stratechery by Ben Thompson](https://stratechery.com/2022/nvidia-in-the-valley/)
* [sw-yx/ai-notes: notes for my AI studies, writing, and product brainstorming](https://github.com/sw-yx/ai-notes/)
* [Stable Diffusion Based Image Compression | by Matthias Bühlmann | Towards AI](https://pub.towardsai.net/stable-diffusion-based-image-compresssion-6f1f0a399202)
* [The Illustrated Stable Diffusion – Jay Alammar – Visualizing machine learning one concept at a time.](https://jalammar.github.io/illustrated-stable-diffusion/)

### etc.
* [We don’t have a hundred biases, we have the wrong model - Works in Progress](https://www.worksinprogress.co/issue/biases-the-wrong-model/?utm_campaign=%22Securities%22%20by%20Lux%20Capital&utm_medium=email&utm_source=Revue%20newsletter)
* [Maintenance Is Sorely Needed In The Fight Against Global Warming](https://www.noemamag.com/the-disappearing-art-of-maintenance/?utm_campaign=%22Securities%22%20by%20Lux%20Capital&utm_medium=email&utm_source=Revue%20newsletter)
* [100 Rules To Live By - Dru Riley](https://druriley.com/100-rules-2020/)