---
title: "Layered Architecture"
description: "A Theory of Applications"
createdAt: 2023-07-31
categories: ["Computers", "Web Development", "Front-End"]
type: 'note'
---

Any application can be described by how many different layers of abstractions in contains.

## 1. Static content

Once it's deployed, it doesn't change. There's no "runtime" to speak of other than the client.

- Static websites can _do a lot_ without having to interact with backend services. [Squoosh](https://squoosh.app/) is one of the best examples of something that _feels_ dynamic but isn't.
- Books are the original technology that best fits this description. Hypertext is not a requirement. Billboards, magazines, graffiti, most Fine Art; all static content.
- Content can only change with a **deployment**

Here's a little table to help count the layers. The first layer is obviously simple:

| Layer 0 |
| - |
| Static |


## 2. Templated dynamic content

A runtime that generates content on each request using fixed templates.

- PHP + MySQL are the canonical example of this: Put some text or HTML into a database, then recall that text with a script at runtime to serve a page. The database layer isn't strictly necessary, any runtime that chooses content dynamically. PHPMyAdmin is your admin page.
- Importantly, the templates are static. Editable templates earn you an extra layer (see below.)
- *How* the content changes is crucially not defined in this setup. This type of application will typically _pull_ data from a source without ever writing data back to it. 
- Certain runtime-driven content can change without a **deployment** but the template that establishes the frame around the content is static, changes require a deployment.
- Geocities lives here in spirit. It blurred the line between a Layers 2 and 3, but never approached the additional complexity of Layer 4.
- Statically generated documentation sites are a good example of this: many different articles, stored separately and then used to generate HTML.
	- There might be a database in the picture, often only accessed once to generate the content. Those familiar with static site generators know this as the "build step."
- This website.

Our little table gets bigger! You can very much think of Templates as an outgrowth of Static content, so a new cell has been added to the right:

| Layer 0 | Layer 1 |
| - | - |
| Static | Templates |

## 3. Content Management System

Layers are cumulative. Building on the 2-Layer system, the next step is to allow users to update the content using the application itself.
- Sessions, Authorization, and Authentication come into the picture
- Basic premise is: 
- Ruby on Rails, while not a CMS itself, helped popularize techniques for building a 3-Layer application
- You don't typically think of Facebook as a CMS, but prior to the switch to the algorithmic newsfeed in 2012, Facebook was more-or-less a simple content management system.
	- Same goes for Twitter: take input from a user (your posts), stuff it in a database, and display it in some other context later on.
	- MySpace had an even more liberal interpretation, allowing any CSS or HTML to be included on your profile page so that you could blast any visitor to your profile with an emo song at full volume.

Another layer added to the table:

| Layer 0 | Layer 1 | Layer 2 |
| - | - | - |
| Static | Templates | Content from DB |
 
## 4. CMS with dynamic templates ("Dynamic CMS")

When a CMS allows a user to define both the content and the layout, you enter the territory of a dynamic CMS. Users are able to control the presentation of their content as well as the content itself in a single feedback loop.  

- Wordpress. Through a quirk of PHP (h/t Apache) and now years of effort to ship Blocks, a longstanding feature of Wordpress is being able change between themes without having to restart or reconfigure the site.
- With this type of system, a User can build a full application without having to know _more than the system itself_. All the constituent parts are there: storage, conditional branching, and loops. Granted, your templating layer may not allow for any programming logic, limiting the scope of what can be built
- Standalone e-commerce sites are an example of this: you control inventory, manage templates for how your pages

| Layer 0 | Layer 1 | Layer 2 | Layer 3 |
| - | - | - | - |
| Static | Templates | Content from DB | Templates from DB |

## 5. Multi-tenant Dynamic Applications

Not only are there users and user-created content, but there are self-administered groups of users with fine grained access control. Once multi-tenancy enters the picture, it's difficult to continue calling 

- Reddit and Discord, too.
- JIRA is an easy-to-think-of example of this

| Layer 0 | Layer 1 | Layer 2 | Layer 3 | Layer 4 |
| - | - | - | - | - |
| html | templates | content from DB | templates from DB | many instances |

## 6. Dynamic templates with Runtime

It is not enough to merely allow users to manage themselves *and* the template *and* the content. The next step is to let users define programming logic and side effects.

* GitHub Actions
- "No Code" applications fall into this category
- Yahoo! Pipes is an early example

| | Layer |
| - | - | 
| 0 | Static |
| 1 | Templates |
| 2 | Content from DB |
| 3 | Templates from DB |
| 4 | Many Instances |
| 5 | User Programmable |


## 7. Multi-tenant Dynamic Infrastructure

The deeper you get into the layered stack, the more you start looking like a hosting company. 

| | Layer | Description |
| - | - | - |
| 0 | Static | Fixed content |
| 1 | Templates | Separate content & templates |
| 2 | Content from DB | Users r/w content | 
| 3 | Templates from DB | Users r/w templates | 
| 4 | Many Instances | Groups of users & RBAC |
| 5 | User Programmable | Logic defined externally |
| 6 | Dynamic provisioning | Congratulations, you are a hosting company |
