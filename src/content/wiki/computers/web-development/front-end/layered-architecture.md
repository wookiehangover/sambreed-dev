---
title: "Layered Architecture"
description: "A Theory of Applications"
createdAt: 2023-07-31
updatedAt: 2023-08-02
categories: ["Computers", "Web Development", "Front-End"]
type: 'note'
---

Applications are made up of layers of abstraction. Layers determine complexity and limit what types of features you can build. Layers pile on top of on another, and each new layer conceals and adapts the layer below. In practice, an application will touch many layers simultaneously to achieve its goal.

The history of computing tracks the accretion of layers of technology: electrical switches and relays gave way to vacuum tubes, which yielded to transistors and solid state devices; programming in binary led to assembly language and hexadecimal, ultimately ceding to the first "high level" languages; stateless machines requiring tedious input on each power cycle drove the need for boot loaders and BIOS, accidentally birthing operating systems in the process. Operating Systems, for a time, became the venue for applications. Web browsers emerged to offer a new delivery vector for software applications, and today, after 30 years of growth, the web touches every business on the planet. "Layer 0" is the computer.

Layer 0 changes over time.

| When | Layer 0 |
|-|-|
| 60 years ago | assembly language |
| 30 years ago | operating system / PC |
| Today | web browser / mobile device |


## 1. Static

Static content, once deployed, doesn't change. The client is the only runtime. With no shortage of hosts offering free or nearly-free options, static hosting has been a commodity for more than a decade.

- Static websites can _do a lot_ without having to interact with backend services. [Squoosh](https://squoosh.app/) is one of the best examples of something that _feels_ dynamic but isn't.
- Books are the original technology that best fits this description. Hypertext is not a requirement. Billboards, magazines, graffiti, most Fine Art; all static content.
- Content can only change with a **deployment**

Here's a little table to help count the layers. The first layer is obviously simple:

| | Layer | Description |
| - | - | - |
| 1 | Static | Fixed content |


## 2. Templates

Dynamic content

~~A runtime that generates content on each request using fixed templates.~~

- ~~PHP + MySQL are the canonical example of this: Put some text or HTML into a database, then recall that text with a script at runtime to serve a page. The database layer isn't strictly necessary, any runtime that chooses content dynamically. PHPMyAdmin is your admin page.~~
- Importantly, the templates are static. Editable templates earn you two extra layers (see below.)
- *How* the content changes is crucially not defined in this setup. This type of application will typically _pull_ data from a source without ever writing data back to it. 
- Certain runtime-driven content can change without a **deployment** but the template that establishes the frame around the content is static, changes require a deployment.
- Geocities lives here in spirit. It blurred the line between a Layers 2 and 3, but never approached the additional complexity of Layer 4.
- Statically generated documentation sites are a good example of this: many different articles, stored separately and then used to generate HTML.
	- There might be a database in the picture, often only accessed once to generate the content. Those familiar with static site generators know this as the "build step."
- This website.

Our little table gets bigger! You can very much think of Templates as an outgrowth of Static content, so a new cell has been added to the right:

| | Layer | Description |
| - | - | - |
| 1 | Static | Fixed content |
| 2 | Templates | Dynamic content |

## 3. Content from Database

Interactive multi-user application, Content Management System, Client <-> Database

Layers are cumulative. Building on the 2-Layer system, users manipulate the content they see using the application itself.

This is your standard CRUD app.

- Sessions, Authorization, and Authentication come into the picture
- Basic premise is: 
- Ruby on Rails, while not a CMS itself, helped popularize techniques for building a 3-Layer application
- You don't typically think of Facebook as a CMS, but prior to the switch to the algorithmic newsfeed in 2012, Facebook was more-or-less a simple content management system.
	- Same goes for Twitter: take input from a user (your posts), stuff it in a database, and display it in some other context later on.
	- MySpace had an even more liberal interpretation, allowing any CSS or HTML to be included on your profile page so that you could blast any visitor to your profile with an emo song at full volume.

Another layer added to the table:

| | Layer | Description |
| - | - | - |
| 1 | Static | Fixed content |
| 2 | Templates | Dynamic content |
| 3 | Content from DB | Users r/w content | 

 
## 4. Templates from DB

Interactive multi-user application with custom presentation, CMS with dynamic templates ("Dynamic CMS")

When a CMS allows a user to define both the content and the layout, you enter the territory of a dynamic CMS. Users are able to control the presentation of their content as well as the content itself in a single feedback loop.  

- Wordpress. Through a quirk of PHP (h/t Apache) and now years of effort to ship Blocks, a longstanding feature of Wordpress is being able change between themes without having to restart or reconfigure the site.
- With this type of system, a User can build a full application without having to know _more than the system itself_. All the constituent parts are there: storage, conditional branching, and loops. Granted, your templating layer may not allow for any programming logic, limiting the scope of what can be built
- Standalone e-commerce sites are an example of this: you control inventory, manage templates for how your pages

| | Layer | Description |
| - | - | - |
| 1 | Static | Fixed content |
| 2 | Templates | Dynamic content |
| 3 | Content from DB | Users r/w content | 
| 4 | Templates from DB | Users r/w templates | 


## 5. Many Instances

Multi-tenant Dynamic Applications

Not only are there users and user-created content, but there are self-administered groups of users with fine grained access control. Once multi-tenancy enters the picture, it's difficult to continue calling 

- Reddit and Discord, too.
- JIRA is an easy-to-think-of example of this

| | Layer | Description |
| - | - | - |
| 1 | Static | Fixed content |
| 2 | Templates | Dynamic content |
| 3 | Content from DB | Users r/w content | 
| 4 | Templates from DB | Users r/w templates | 
| 5 | Many Instances | Groups of users & RBAC |


## 6. User Programmable

Dynamic templates with Runtime

It is not enough to merely allow users to manage themselves *and* the template *and* the content. The next step is to let users define programming logic and side effects.

* GitHub Actions
* Glitch
- "No Code" / app builders
- Yahoo! Pipes is an early example

Our humble table needs to pivot in order to fit it all in: 

| | Layer | Description |
| - | - | - |
| 1 | Static | Fixed content |
| 2 | Templates | Dynamic content |
| 3 | Content from DB | Users r/w content | 
| 4 | Templates from DB | Users r/w templates | 
| 5 | Many Instances | Groups of users & RBAC |
| 6 | User Programmable | Logic defined externally |


## 7. Dynamic Infrastructure

Multi-tenant Dynamic Infrastructure

The deeper you get into the layered stack, the more you start looking like a hosting company. When a standard CRUD application transitions beyond user-defined layout and user-defined program logic, the only territory left is to define the infrastructure for running the program.

The classic value-proposition of cloud computing goes something like, "tell us what resources you need and we will provision them for you, and don't worry about the details."

With this architecture, Salesforce transformed the scope of its business from CRM to "everything."

| | Layer | Description |
| - | - | - |
| 1 | Static | Fixed content |
| 2 | Templates | Dynamic content |
| 5 | Many Instances | Groups of users & RBAC |
| 3 | Content from DB | Users r/w content | 
| 4 | Templates from DB | Users r/w templates | 
| 6 | User Programmable | Logic defined externally |
| 7 | Dynamic Infrastructure | Congratulations, you are a hosting company |


