---
title: Links, June 2023
slug: 2023/links-jun-2023
description: like a playlist but for my open tabs
heroImage: "/img/2e6dfddd-8124-405f-a98f-09c7c06ca044.png"
heroAlt: ( A cityscape with a river running through it, highrises and buildings on either side. In the foreground there is a park with people relaxing and children playing. The sky is a deep blue. ) High Detail, Tungsten Color Film. trending on artstation hq deviantart. by artist laurie greasley. — Stable Diffusion v1.5
pubDate: "June 30 2023"
---

June 2023.

The summer solstice in the Northern hemisphere came and went. I was busy:
* I started turning up the dial on my running volume in preparation for the Headlands 50k in August.
* We took a road trip down to Los Angeles to see my favorite band, King Gizzard and the Lizard Wizard, play their biggest gig yet at the Hollywood Bowl.
* We also spent a day at DisneyLand (but not California Adventure), which was my first time in a Disney park since the early 2000s and my first visit to the original location.

_Gee, a couple things happened in tech this month:_

* Reddit decided that it did not want all the free labor from 3rd party app developers and moderators, and that a thumb in the eye would be better for both parties.
* The AI hype wave has crested? As normal media moves on and all the "big news" around the possibilities of LLMs sobers up after 6+ months of drunken chatter. 
* Twitter is still broken and about to break a whole lot more, with Facebook throwing it's hat in the ring in the upcoming months.
* Apple announced that the headset is indeed real (admittedly, I was skeptical) and has a name but not a launch date. It promises... something interesting. For next year. Something different than what Facebook tried for the better part of a decade? Maybe. At least the industrial design will be high quality, that part is already clear.

With all that as context, I humbly submit this batch of links.

## Code
* [Who will understand consciousness?: Software engineers will be first to grok consciousness](https://bower.sh/who-will-understand-consciousness) - This is the closest thing to an AI post in the list and it resonated with me a lot. I've been reading [A Thousand Brains](https://worldcat.org/en/title/1275359186) by Jeff Hawkins recently and this post feels related.
* [The Secret Sauce behind 100K context window in LLMs: all tricks in one place](https://blog.gopenai.com/how-to-speed-up-llms-and-use-100k-context-window-all-tricks-in-one-place-ffd40577b4c) - While the breathless tech press might have slowed down, the technical explainer posts have kept up! This is about the various techniques used to expand context windows, or how to send more text in and get more text back from LLMs.
* [cohost! - "how (not) to write a pipeline"](https://cohost.org/tef/post/1764930-how-not-to-write-a) - Writing software is hard because you can easily describe a whole system with a few terms and think you know what you would have to build to make it work. But then, a fractal-like explosion of features and sub-features and errors and edge-cases to handle gets in the way of it ever being as simple as you first thought it would be. It's like having a box, knowing it's outer dimensions, and then having an uncountable number of equally sized boxes fall out of it. 
* [Unexpected downsides of UUID keys in PostgreSQL - CYBERTEC](https://www.cybertec-postgresql.com/en/unexpected-downsides-of-uuid-keys-in-postgresql/)
  * I had defaulted to using UUIDs over incremental numeric IDs a few years ago but now this has me questioning the reasoning behind it. Absolutely this is something that I cargo-culted along the way.
  * [jetpack-io/typeid: Type-safe, K-sortable, globally unique identifier inspired by Stripe IDs](https://github.com/jetpack-io/typeid)- Relatedly, this seems somewhat better? At least it overcomes some of the ergonomic annoyances of UUIDs.
* [juliangarnier/anime: JavaScript animation engine](https://github.com/juliangarnier/anime/) - This is slick; Great docs and demos.
* [SwiftUI stole the best parts of React…and my heart](https://www.mux.com/blog/swiftui-against-react) - I've used SwiftUI a few times in the last 2 years. I'm not an iOS developer but I found it to be an easier entry point for what I'd like to build than SDKs of years past.
* [I turned JS into a compiled language (for fun and Wasm) — surma.dev](https://surma.dev/things/compile-js/index.html)
  * [Bringing Javascript to WebAssembly for Shopify Functions (2023)](https://shopify.engineering/javascript-in-webassembly-for-shopify-functions)
  * These are two links that were in the "this should exist" folder in 2021/22 that have now materialized. As the web platform continues to evolve, there are lots of gaps that one could imagine being filled by a small, isolated, interoperable runtime that supports everyone's (least) favorite language.
* [Scaling the Linear Sync Engine - Linear Blog](https://linear.app/blog/scaling-the-linear-sync-engine) - Websockets are hard. Syncing is hard. Linear is very good. Good scaling story here.

## Tech Journalism
* [How Google Reader died — and why the web misses it more than ever - The Verge](https://www.theverge.com/23778253/google-reader-death-2013-rss-social) - Ok so I will admit that I mainly use these posts like a playlist for bookmarks. I haven't been "good" at bookmarks since 2009, and despite paying for a decade of Pinboard, I rarely use it for it's intended purpose. Google Reader was in heavy rotation for me back then, along with the "social" bookmarking site delicio.us. I've [written before](/writing/links-march-2023#rss) about RSS coming back into my media diet as mainstream social media continues to wane in usefulness. Nostalgia for Google Reader is misplaced. It was just a website, and now we have better websites.
* [Tech's Reckoning](https://wheresyoured.at/p/techs-reckoning) - Wherein Ed Z correctly identifies the trend toward absurd headcount growth, but missed the opportunity to point out how nakedly stupid "hypergrowth" is in absence of a coherent business model to support it.
* [The Damaging Results of The Mandated Return to Office is Worse Than We Thought | Entrepreneur](https://www.entrepreneur.com/growing-a-business/the-damaging-results-of-the-mandated-return-to-office-is/454043) - Nuance is one of the harder things for most people to grasp, when two contradictory ideas can be equally true. Certain functions benefit massively from in person interactions and don't translate well to remote teams. Other work is much better and healthier when optimized for remote workers. There's not silver bullet, each requires effort and imposes different constraints.
* [Remote Communication Concepts — The Holloway Guide to Remote Work](https://www.holloway.com/g/remote-work/sections/remote-communication-concepts) - The other half of the previous argument.
* [First Impressions of Vision Pro and VisionOS](https://daringfireball.net/2023/06/first_impressions_of_vision_pro_and_visionos)
* [News from WWDC23: WebKit Features in Safari 17 beta](https://webkit.org/blog/14205/news-from-wwdc23-webkit-features-in-safari-17-beta/)

## Misc
* [Lit up like a sparkler](https://www.robinsloan.com/newsletters/lit-up-like-a-sparkler/) - Of the many newsletters I get over the course of the month, this was a nice entry from author Robin Sloan. Eclectic selection of curiosities and links.
* [archives.design](https://archives.design/) - Bunch of neat "further reading" in here. Glad to live in an era where it's very difficult to run out of something interesting to read.
* [North Bay Python](https://2023.northbaypython.org/) - A conference in the North Bay! I may very well attend. Single track conferences can be hit or miss, but I have always preferred a small community organized conference to a corporate-mega-conf.