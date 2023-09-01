---
title: "What is Front End Infrastructure?"
description: "Unpacking the evolution of web app devlopment"
createdAt: 2020-10-10
updatedAt: 2023-07-31
categories: ["Computers", "Web Development", "Front-End"]
type: 'note'
---

*Note: This was an unpublished drafted from October 2020 that I wrote as I was winding down my role at [Credit Karma](/cv.html#credit-karma). Part of the motivation for [building this wiki](../building-this-wiki) was to get incomplete thoughts like these into a space where they can grow.*

I was recently asked to give an overview of "Front End Infrastructure" for someone trying to navigate the industry. After giving my typically rambling-but-accurate impromptu answer, I reflected a bit about how to define this pocket of technology that I've been operating in professionally for the last ten years.

To start, both "front end" and "infrastructure" are loaded terms.

## Table of Contents

## Definitions

"**Front end**" conjures up whatever comprises the UI layer of an application, be it a website or a native app. In a large organization, it is maintained by specialists who conjure up the right incantations for each platform. Platforms are important, and today there are 3 to care about: the web, iOS, and Android.

"**Infrastructure**" is the "thing" that runs the piece of software _which you don't have to care about_. It is the layer of abstraction in the software stack that is manged for you. It could be a group of servers in a network, or a VM instance running on server, or a pod in a Kubernetes cluster, or serverless function behind an API gateway. Infrastructure is the boundary between what you need to know about to build an application and what you don't. Everything responsible for running your code that you don't need to worry about counts as infrastructure. It is prebuilt and generic; fit for myriad use cases, one if which is yours.

## Scope
  
"**Front End Infrastructure**" can cover:

- The "web tier"
	- Layer 7 proxy
	- Configuring the network edge (your CDN, see below)
	- Server side rendering (aka serving unique HTML responses)
	- Form submissions, file uploads
	- Cookie management
- (Negotiating with) the "API tier"
	- Getting and updating data
	- Authentication / identity
	- Various acronyms: CRUD, REST, GraphQL
- The CDN
	- Static file delivery
	- Cache policy
	- WAF / DDoS protection / Network Edge
	- Edge runtimes
- Security
	- Authentication / identity
	- Cache policy
	- 3rd party js (ad industry toxic waste)
	- Protect against XSS, reflection
	- Various acronyms: CSP, CORS, SRI, CSRF
- The "App Platform"
	- Curating frameworks and libraries
	- Build tools
	- Design system / UI primitives
	- Tracking and analytics
	- Observability / Tracing / Performance monitoring
	- Error handling
	- App store releases

You only need to consider a fraction of this list if you only have a one front end app. But when you start needing different categories of front end apps (admin tools, marketing sites / blogs, native webviews, SPA's, etc), you'll definitely encounter all of the above.

## Outcomes

Here's a big, dumb list of questions you might be forced to think about at some point:
  
- How is your Wordpress blog (_not your choice_) going to use  your design system / branding?
- How will you track users between your CRM, your marketing sites, your blog, and your app?
- How front end does security work across those same services?
- Who manages CORS headers?
- Who manages CSP?
- How does data from your API make it to your blog pages?
- How do you handle errors for all of your web properties? Do you care?
	- Same question, but for performance.
  
With one app, lots of these are a single decision point. But with many apps, decisions will get re-made with divergent outcomes, leading to a patchwork of incompatibilities and inefficiencies. Even worse, a wrong turn at the highest level can represent years of technical debt.

The decisions get more important as the size and scope of your front end grows, with compounding effects on three axes:  **developer productivity**, **performance**, and **reliability**.

## Developer productivity

- **Build tools.** These will either slow you down immensely or fade into the background of your test and release workflows, providing you immense productivity boosts if executed correctly. Slow or unreliable builds create bottlenecks that back up entire production workflows, and navigating the trade-off between insufficient and inefficient testing will make the difference between a smooth release pipeline and a bumpy one.
- **Preview / test environments.** Safe and effective last mile testing is an essential ingredient to de-risking fast moving front end teams. Due to the constraints of [Test Boundaries](https://www.destroyallsoftware.com/talks/boundaries), there is a limit to how accurate a unit or integration test can be without touching the "rest" of the system. Since the "front end" is typically rendered at (or near) the network edge, the "rest of the system" often means, quite literally, every other database and service that's upstream of your front end servers. Without a way to safely test either in production or in a production-like environment (with identical configuration), it's extremely difficult to achieve high velocity without sacrificing quality.
- Experimentation. 
  
## Performance

- Optimal CDN usage: protocol, caching, compression
- Observability / Tracing
- Analytics
  
## Reliability

- Uptime
- Error handling
- Observability
- Deployments / rollbacks / canary releases
- Testing / Quality engineering

## Solutions

Thankfully, most of these concerns are covered quite well by the current crop of "last mile" hosting services like Vercel, Netlify, or Fly.io and meta frameworks like Next.js, Remix, and Sveltekit.

But the list above can't be addressed by a framework alone, even if it does come with sensible defaults. CSP is a good example of a gap in coverage from the major frameworks, where inevitably CSP needs to be handled with some level of custom code. When security moves away from being declarative and into something that defined at runtime for each route or class, your surface area for bugs and attacks gets a lot bigger.