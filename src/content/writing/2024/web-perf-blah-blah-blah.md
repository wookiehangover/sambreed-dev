---
title: "Web Performance Blah Blah Blah"
slug: 2024/web-perf-blah-blah-blah
description: "what I tell people about web performance in 2024"
pubDate: "Nov 5 2024"
cover: "../../../assets/j2LPaGXU8DZj5i5vQReSc.jpeg"

---

Recently an engineer I'm working with hit me up with a broad question about web performance:

> I'm trying to see if I can make site loading times faster, do you have any good profiling tools besides the browser? <br> -- Specifically I want to make frontpage as fast as possible <br> I want to CDN cache the whole page (so I added a vercel header -- is that the best way to go about it?)"

This is a very reasonable question. Everything should be as fast as possible, and you've got work to do until it is. Web performance has been a recurring theme topic in my career and I have some earned wisdom on the topic.

### 1. Use tools to measure performance

tldr, know what you're trying to measure and collect the right data.

- The performance tab in Chrome dev tools is still the best tool for diagnosing and debugging performance issues.
- Performance is not a single number.
	- Users will have slow devices, bad networks, memory pressure, etc. Assume the worst.
	- **Performance is a statistical distribution of response times across a population of users with different devices and networks.**
	- Remember that "fast for me" != "fast for everyone"
		- _BUT_
		- Making it fast on your device and your connection is the best place to start.
		- If it's slow for you then it's definitely slow for everyone else.
- So there are limits to what you can do with local tools.
	- Using a remote performance test like [WebPageTest](https://www.webpagetest.org/) can help identify problems that you might miss with local testing.
- **Measuring performance from real users on your real infrastructure is the only way to understand the gaps in your performance architecture***, and the only true feedback mechanism to tell you if you're fixing them over time.
- _HOWEVER_
	- This is a deep rabbit-hole. Measuring on the client is not free and too much telemetry can adversely tip the scales.

### 2. Cache when possible, but not too much

tldr, cache static requests aggressively, be very careful with dynamic content

- Physical distance between your servers and users is a large source of latency in any web request.
	- Goal is to make the request travel as short a distance as possible.
- So what is CDN caching?
	1. Your server responds to an incoming request.
	2. A proxy between your server and the outside world detects a special header in the response and caches it. 
		- The cached response is propagated across a globally distributed network of servers.
	3. When the next request comes in, it gets served the cached response instead of hitting your server. 
- This is great for content that is **exactly the same every time**: your server does less work and your clients get the fastest possible response.
- _BUT_
	- **You should never CDN cache authenticated pages**
	- There is a huge risk of showing your users someone else's account data 💀
- Make sure you understand how your CDN is configured and how to flush it.
	- Common symptom will be the complaint "I can't see my changes," and reply, "Are you seeing cached content?"

### 3. Find out what's slow and eliminate bottlenecks

tldr, know your performance floor.

- How fast is your infra when you're doing zero work?
- Lots of architectures can go fast. Most of the things I work on follow the "BFF" pattern.
- "Backend-for-the-frontend" is when your web server makes calls to a separate API server for database access and business logic.
	- Server A handles html generation, content negotiation, and session handling.
	- Server B talks to the database and handles the application logic of your API.
- Server A's _minimum_ response time is governed by the _slowest_ response from Server B.
- To increase performance your best option is to reduce Server A's time spent waiting on Server B as much as possible. That means:
	- request only the data needed to generate a response
	- send the fewest requests possible
	- always send requests in parallel, avoid waterfalls
- When the non-rendering, non-request handling parts of your workflow is fast, you can focus on the frontend.
	- then reduce the frontend payload as much as possible. That means:
		-	compressing and caching all assets, with content hash fingerprints.
		- shipping little to no JS, only the CSS you need to render the elements on the page, and optimizing and caching  images and videos.

### 4. Blame the framework, last

tldr, you're probably slower than the framework

- Look, React is fine.
	- anecdotally, ~100ms is a pretty typical "cost of business" to fetch data + do a react render + stream the results
		- you can make this a little faster, but if you have sub-100ms p95 then you're doing great tbh.
	- usually there's lots of headroom even just in sending slimmer payloads from the API server to the client.
- _HOWEVER_
	- if you have optimized to the point where React is holding you back from silky smooth frame rates and instant loading, congratulations! or if you start with that as an explicit goal, React probably _will_ hold you back.
- _BUT_
	- if you are trying to move quickly with the best developer ergonomics and a decade+ of mass adoption, React is fine.You will not be fired for choosing it.
- _REMEMBER_
	- This is an exhaustive topic.
	- The web platform provides many, many ways to build the same application experiences.
	- Every interaction can be optimized and tuned to an absurd degree, so you have to pick your battles.
	- The ideal web site is fast, accessible, and works on every device. Don't lose track of that.
