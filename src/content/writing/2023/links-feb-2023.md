---
title: Links, February 2023
slug: 2023/links-feb-2023
description: The link posting will continue until morale improves!

cover: "../../../assets/b3629593-a641-497a-b289-7a8c06466605.png"
heroAlt: carbon flowviz paint - Stable Diffusion v1.5
pubDate: "Feb 28 2023"
---

Winter. Low light. Short days. Cool weather. And finally, a month so short that it seems to be anticipating Spring waiting around the corner.

For me, this winter has been characterized by [lots for low-effort running](https://www.strava.com/athletes/3256286) to train for my upcoming _first_ marathon at Big Sur in April.

I have also been collecting tabs.

### AI
- [Introducing the AI Mirror Test, which very smart people keep failing](https://www.theverge.com/23604075/ai-chatbots-bing-chatgpt-intelligent-sentient-mirror-test) - We're in the third month of frenzy following the release of ChatGPT and the hot takes simply will not stop coming. I've been working in-and-around the LLM / transformers / diffusers space since 2020, so finding journalism that resonates with me has been challenging, this piece being a clear exception. Bottom line: it is waaaay easy to oversell or invent capabilities of, or explanations of "how", a model like ChatGPT produces completions. There's definitely something cool and spooky going on here, but it's probably not what you think it is! Developing intuition for how these models behave and how to manipulate their output is challenging. They seem to have net-new qualities but are still very raw, so writing soberly about them seems to be very difficult.
- [Copilot Internals](https://thakkarparth007.github.io/copilot-explorer/posts/copilot-internals.html) - Impressive piece of reverse engineering! Co-pilot is great and it's nice to think of it as an assemblage of pieces on top of an LLM rather than as something magic or abstruse.
- [Illustrating Reinforcement Learning from Human Feedback (RLHF)](https://huggingface.co/blog/rlhf) - Staying on the theme of explicating the complex, this is how you grow a _very_ sophisticated model out of a merely sophisticated one.
- [Storing OpenAI embeddings in Postgres with pgvector](https://supabase.com/blog/openai-embeddings-postgres-vector) - The team at Supabase rocks. I've been a customer of theirs for 2 years and I feel like it's more than paid off with the features that they've added since I started using them. This is a perfect example, where in the same week that I needed do this very task, they release a blog post telling me exactly how to do it. Pretty on point. Gotta appreciate a freebie like that when it comes your way!
- [PodSearch Reborn](https://www.david-smith.org/blog/2023/02/02/podsearch-reborn/) - Very clever to index podcasts with OpenAI Whisper to make a searchable audio database. 
- [Diffusion-based Generation, Optimization, and Planning in 3D Scenes](https://arxiv.org/abs/2301.06015) - The last 5 months since the release of Stable Diffusion have been very exciting. There are papers like this one being published every week, and [new techniques](https://huggingface.co/spaces/kadirnar/stable-diffusion-2-infinite-zoom-out) to [generate](https://huggingface.co/spaces/akhaliq/Analog-Diffusion) [images](https://huggingface.co/lllyasviel/ControlNet), 3D scenes, and animation are coming online as an outcome. It's breathless and no one has time to read and digest everything. It will be great to look back in 5 - 10 years and see where the high water mark left its line.


### Code

- [Dark mode one-liner](https://twitter.com/flaviocopes/status/1627609246014619649) - I _gasped_ when I tried this and saw the results. Granted this might not work everywhere, but if you want a dark mode (or light mode if you're dark-first) without having to do, well, anything, then buddy this tweet's for you.
- [Making the world’s fastest website, and other mistakes](https://dev.to/tigt/making-the-worlds-fastest-website-and-other-mistakes-56na) - This echoes a lot of my experience working at Credit Karma and being responsible for website performance. I used all of the tricks mentioned here: measuring bare infrastructure and being a bit shocked at how slow sending 0 bytes could be; eliminating as much 3rd party JS as possible and quarantining the rest in an iframe; inlining important CSS; swapping out React for Preact in places; and event using an [islands architecture](https://jasonformat.com/islands-architecture/) to render parts of the page on the server with zero client-side scripting.
- [Bringing Javascript to WebAssembly for Shopify Functions](https://shopify.engineering/javascript-in-webassembly-for-shopify-functions) - This idea was kicked around on my team in 2021 but we didn't execute on it, but I'm glad someone else did because this is, in many ways, so obvious. Sandboxing code is very tricky and it's one of the core qualities of WASM, so getting a way to run untrusted JS in safely and reliably is very useful and cool.
- [Speeding up the JavaScript ecosystem - eslint](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-3/) - Another style of deep dive on super in-the-weeds optimizations found in eslint. Some really good strategies at play here, especially looking for subtle gotcha's in modern syntax that's de-optimized with outdated transpiling. I bet you could find this everywhere if you went looking for it.
- [Error: cause](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause) - TIL that you can pass a contextual data specifying a `cause` to an Error in JavaScript. This is fairly new. I remember wanting to do this years ago and not being able to. Love it when intellisense hints at an field that's new-to-you.

### Software

- [A better way to build software](https://sarharibhakti.substack.com/p/a-better-way-to-build-software) - Karri Kivela, CEO of Linear, talks about the importance of design for success, reducing friction & providing defaults for momentum, measuring engineering productivity & shipping velocity, and the challenges of remote work.
- [Carving the Scheduler Out of Our Orchestrator](https://fly.io/blog/carving-the-scheduler-out-of-our-orchestrator/) - Over the years I've been increasingly impressed with the high-quality content coming out from the team at Fly.io. They first got my attention in 2019 with their open source work around V8 isolates, and I've been following them ever since. They're solving common infrastructure problems in modern, novel ways. Like Vercel but without the JS-eats-the-world endgame. Anyway I love by-the-numbers engineering pieces like this, and orchestrators / schedulers are classic "hard" problems that are fun to think about but tough to get right.
- [Developer with ADHD? You're not alone.](https://stackoverflow.blog/2023/02/19/developer-with-adhd-youre-not-alone/) - I wasn't diagnosed with ADHD until my early 30s, but the diagnosis snapped a lot of aspects of my personality, career, and relationships into sharp relief. Not surprising to learn that there's a large number of programmers who share a similar diagnoses, I only took the steps to see someone about it after a friend had shared about their story on twitter. But it makes sense, the structure and feedback of programming are intensely rewarding and can be self-taught, perfect fit for the dopamine seekers in the world.
- [Algorithmic Trading: A Practitioner’s Guide](https://henrikwarne.com/2023/02/12/algorithmic-trading-a-practitioners-guide/) - wow, please print a copy of this and send it back to me circa 2016-2017. I read several books on the topic and wrote a bit of automation but ultimately put it aside as a hobby.
- [Xerox scanners/photocopiers randomly alter numbers in scanned documents](http://www.dkriesel.com/en/blog/2013/0802_xerox-workcentres_are_switching_written_numbers_when_scanning) - yes, you read that correctly. Software in Xerox copy machines could, under certain conditions, scramble numbers in scanned documents. This was a bug in the wild for several **years** before it was fixed!


### Opinion Section

- [Don't be a doomer](https://noahpinion.substack.com/p/dont-be-a-doomer) - Point: modernity and human psychology make it easier and more rewarding to be a pessimist, especially as a reactionary reward-seeking mechanism. Things are pretty good even though they can still get a hell of a lot better. Both can be true at the same time!
- [Social Media is a Major Cause of the Mental Illness Epidemic in Teen Girls. Here’s the Evidence.](https://jonathanhaidt.substack.com/p/social-media-mental-illness-epidemic) Counter-point: there are big harms that we're self-inflicting and maybe we should cut it out? or at least not deny the mounting piles of evidence? Jonathan Haidt is an author I came across last year while actively seeking out books recommended by people I don't agree with, and his Moral Foundations theory really resonated with me a way to frame contemporary history and political division. I don't agree with everything he has to say, but he's a good and thought-provoking writer.


### Misc.

- [Mt Tamalpais Webcam](https://alertca.live/cam-console/2192) - I've been in the habit of regularly checking the Mt Tam webcams for a few years now, ever since I moved closer to the center of Mill Valley. That is until a few months ago, when the two cameras went offline. I looked again today and they're back online and have added more, better cameras. There is even a full panorama now! It's cool that there's a continuous live feed from the top of the the mountain which I live at the foot of.
- [personalsit.es](https://personalsit.es/) - Everyone should have a personal website! I love seeing the clever things that people get up to. Really under-appreciated genre.