---
title: Layered Architecture
description: A Theory of Applications
createdAt: 2023-07-31
updatedAt: 2023-08-09
categories:
  - Computers
  - Web Development
  - Front-End
type: essay
---

A better name for this page might be _Types of Frontend Systems_.

This essay describes a way to categorize software applications that I developed as a consultant and developer on product and app platform teams. I started dropping this metaphor without ever laying it out formally, having tuned into common the vibrations and reoccurring patterns across dozens of applications of different levels of complexity.

The starting point is not original: applications are made up of layers of abstraction [[1]](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html). Layers determine complexity and limit what types of features you can build. Layers pile on top of on another, and each new layer conceals and adapts the layer below [[2]](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html). In practice, an application will touch many layers simultaneously to achieve its goal.

This concept builds upon foundational principles in software engineering, particularly David Parnas's seminal work on modularization, which emphasizes how proper decomposition of systems into modules can improve flexibility and comprehensibility [[3]](https://dl.acm.org/doi/10.1145/361598.361623). The layered approach also embodies the principle of information hiding, where each layer provides a stable interface that protects other parts of the system from implementation details that are most likely to change [[4]](https://en.wikipedia.org/wiki/Information_hiding). This architectural style is widely recognized as one of the most common patterns in software development, offering clear separation of concerns and dependency structures [[5]](https://www.sciencedirect.com/topics/computer-science/layered-architecture).

The history of computing tracks the accretion of layers of technology: electrical switches and relays gave way to vacuum tubes, which yielded to transistors and solid state devices; programming in binary led to assembly language and hexadecimal, ultimately ceding to the first "high level" languages; stateless machines requiring tedious input on each power cycle drove the need for boot loaders and BIOS, accidentally birthing operating systems in the process. Operating Systems, for a time, became the venue for applications. Web browsers emerged to offer a new delivery vector for software applications, and today, after 30 years of growth, the web touches every business on the planet.

"Layer 0" is the computer. The definition of the computer changes over time.

| When | Layer 0 |
|-|-|
| 60 years ago | assembly language |
| 30 years ago | operating systems / PCs |
| Today | web browsers / mobile devices |

## Table of Contents

## Layer 1 - Static Content

Static content, once deployed, doesn't change. The client is the only runtime. With no shortage of hosts offering free or nearly-free options, static hosting has long been a commodity.

- Static websites can _do a lot_ without having to interact with backend services. [Squoosh](https://squoosh.app/) is one of the best examples of something that _feels_ dynamic but isn't.
- Books are the original technology that best fits this description. Hypertext is not a requirement. Billboards, magazines, graffiti, most Fine Art; all static content.
- Content can only change with a **deployment**

Here's a little table to help count the layers. The first layer is obviously simple:

| Layer | Description |
|-------|-------------|
| 1     | Static      | Fixed content |

## Layer 2 - Templates

Dynamic content

A runtime that generates content on each request using fixed templates.

- PHP + MySQL are the canonical example of this: Put some text or HTML into a database, then recall that text with a script at runtime to serve a page. The database layer isn't strictly necessary, any runtime that chooses content dynamically. PHPMyAdmin is your admin page.
- Templates do not change dynamically between deploys. Editable templates earn you two extra layers (see below.)
- _How_ the content changes is crucially not defined in this setup. This type of application will _pull_ data from a source without ever writing data back to it.
- Certain runtime-driven content can change without a **deployment** but the template that establishes the frame around the content is static, changes require a deployment.
- Geocities lives here in spirit. It blurred the line between a Layers 2 and 3, but never approached the additional complexity of Layer 4.

Our little table gets bigger! You can very much think of Templates as an outgrowth of Static content, so a new cell has been added to the right:

| Layer | Description |
|-------|-------------|
| 1     | Static      | Fixed content |
| 2     | Templates   | Dynamic content |

## Layer 3 - Content from a Database

Interactive multi-user application, Content Management System, Client <-> Database

Layers are cumulative. Building on the 2-Layer system, users manipulate the content they see using the application itself.

This is your standard CRUD app.

- Sessions, Authorization, and Authentication come into the picture
- Basic premise is:
- Ruby on Rails, while not a CMS itself, helped popularize techniques for building a 3-Layer application
- You don't typically think of Facebook as a CMS, but prior to the switch to the algorithmic newsfeed in 2012, Facebook was more-or-less a multi-user content management system.
  - Same goes for Twitter: take input from a user (your posts), stuff it in a database, and display it in some other context later on.
  - MySpace had an even more liberal interpretation, allowing any CSS or HTML to be included on your profile page so that you could blast any visitor to your profile with an emo song at full volume.

Another layer added to the table:

| Layer | Description |
|-------|-------------|
| 1     | Static      | Fixed content |
| 2     | Templates   | Dynamic content |
| 3     | Content from DB | Users r/w content |

## Layer 4 - Templates from a DB

Interactive multi-user application with custom presentation, CMS with dynamic templates ("Dynamic CMS")

When a CMS allows a user to define both the content and the layout, you enter the territory of a dynamic CMS. Users are able to control the presentation of their content as well as the content itself in a single feedback loop.

- Wordpress. Through a quirk of PHP (h/t Apache) and now years of effort to ship Blocks, a longstanding feature of Wordpress is being able change between themes without having to restart or reconfigure the site.
- With this type of system, a User can build a full application without having to know _more than the system itself_. All the constituent parts are there: storage, conditional branching, and loops. Granted, your templating layer may not allow for any programming logic, limiting the scope of what can be built
- Standalone e-commerce sites are an example of this: you control inventory, manage templates for how your pages

| Layer | Description |
|-------|-------------|
| 1     | Static      | Fixed content |
| 2     | Templates   | Dynamic content |
| 3     | Content from DB | Users r/w content |
| 4     | Templates from DB | Users r/w templates |

## Layer 5 - Many Instances

Multi-tenant Dynamic Applications

Not only are there users and user-created content, but there are self-administered groups of users with fine grained access control. Once multi-tenancy enters the picture, it's difficult to continue calling

- Reddit and Discord, too.
- JIRA is an easy-to-think-of example of this

| Layer | Description |
|-------|-------------|
| 1     | Static      | Fixed content |
| 2     | Templates   | Dynamic content |
| 3     | Content from DB | Users r/w content |
| 4     | Templates from DB | Users r/w templates |
| 5     | Many Instances | Groups of users & RBAC |

## Layer 6 - User Programmable

Dynamic templates with Runtime

It is not enough to merely allow users to manage themselves _and_ the template _and_ the content. The next step is to let users define programming logic and side effects.

- GitHub Actions
- Glitch
- "No Code" / app builders
- Yahoo! Pipes is an early example

Our humble table needs to pivot in order to fit it all in:

| Layer | Description |
|-------|-------------|
| 1     | Static      | Fixed content |
| 2     | Templates   | Dynamic content |
| 3     | Content from DB | Users r/w content |
| 4     | Templates from DB | Users r/w templates |
| 5     | Many Instances | Groups of users & RBAC |
| 6     | User Programmable | Logic defined externally |

## Layer 7 - Dynamic Infrastructure

Multi-tenant Dynamic Infrastructure

The deeper you get into the layered stack, the more you start looking like a hosting company. When a standard CRUD application transitions beyond user-defined layout and user-defined program logic, the only territory left is to define the infrastructure for running the program.

The classic value-proposition of cloud computing goes something like, "tell us what resources you need and we will provision them for you, and don't worry about the details."

With this architecture, Salesforce transformed the scope of its business from CRM to "everything."

Kubernetes, the open source ancestor of [Google's Borg cluster management software](https://dl.acm.org/doi/10.1145/2741948.2741964), provides the framework for building a layer 7 application.

Vercel is building the Frontend Cloud.

| Layer | Description |
|-------|-------------|
| 1     | Static      | Fixed content |
| 2     | Templates   | Dynamic content |
| 3     | Content from DB | Users r/w content |
| 4     | Templates from DB | Users r/w templates |
| 5     | Many Instances | Groups of users & RBAC |
| 6     | User Programmable | Logic defined externally |
| 7     | Dynamic Infrastructure | Congratulations, you are a hosting company |

---

This layered approach aligns with established patterns in enterprise application architecture, where layering is recognized as one of the most fundamental techniques for organizing complex software systems [[6]](https://martinfowler.com/eaaCatalog/). The progression from static content to dynamic infrastructure mirrors the evolution of multi-tier architectures that have become commonplace in modern software development.

The pattern also reflects the broader principle that architectural decisions should hide design details that are most likely to change, as originally articulated by Parnas. Each layer in this taxonomy provides increasingly sophisticated abstractions while maintaining clear interfaces between levels of complexity.

## References

Fowler, M. (2002). *Patterns of Enterprise Application Architecture*. Addison-Wesley.

O'Reilly Media. *Software Architecture Patterns*. Chapter 1: Layered Architecture. O'Reilly Media. https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html

Parnas, D. L. (1972). On the criteria to be used in decomposing systems into modules. *Communications of the ACM*, 15(12), 1053-1058.

Reenskaug, T. (1979). The Model-View-Controller (MVC): Its Past and Present. University of Oslo.

ScienceDirect. (2022). Layered Architecture. In *System Assurances*. https://www.sciencedirect.com/topics/computer-science/layered-architecture

Shaw, M., & Garlan, D. (1996). *Software Architecture: Perspectives on an Emerging Discipline*. Prentice Hall.

https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/

## Citations

[1] [https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)

[2] [https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)

[3] [https://dl.acm.org/doi/10.1145/361598.361623](https://dl.acm.org/doi/10.1145/361598.361623)

[4] [https://en.wikipedia.org/wiki/Information_hiding](https://en.wikipedia.org/wiki/Information_hiding)

[5] [https://www.sciencedirect.com/topics/computer-science/layered-architecture](https://www.sciencedirect.com/topics/computer-science/layered-architecture)

[6] [https://martinfowler.com/eaaCatalog/](https://martinfowler.com/eaaCatalog/)
