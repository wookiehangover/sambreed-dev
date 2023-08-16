---
title: "The Zen of Tailwind"
description: "How to not lose your mind with all the strings"
createdAt: 2023-08-15
categories: ["Computers", "Web Development", "Front-End"]
type: 'note'
---

I've been a happy Tailwind<sup>[1](#none-of-this-is-new)</sup> user for a while now, and have been using the underlying techniques since 2016.

The first thing I discovered when rolling out a similar system was "some people really don't like this." It's not for everyone! Learning CSS is hard enough, so learning a layer of shortcoded indirection on top of CSS steepens an already daunting learning curve. For more seasoned CSS aficionados, the translation between what you know and what you need to write still takes some time to get a hang of. You will be searching the docs frequently for "things you know how to do." 

Fortunately, the payoff is worth it. If you can put up with the downsides, there's a certain Zen that can be unlocked.

- Composing styles and markup together shortens the feedback loop for anything you're building. 
- Faster iteration and fewer decisions mean more internal consistency and fewer chances for gross deviation. Duplicating styles between components has zero carrying cost.
- CSS bundle sizes are fixed, and do not grow with the size of your application; more variation does not yield more CSS.

But not everyone is convinced (and that's OK, do your thing.)

## Skip the hard parts

Tailwind lets you skip the hardest parts of authoring CSS:
1. Naming things
2. Picking consistent values

Why are these hard problems?

 Naming things is hard because creating good abstractions is hard.

- You must anticipate the uses of an element, projecting yourself into all possible futures to look beyond the pale of the screen under construction, and then pick a good name.
	- You need knowledge of the entire system. This gets out of hand very quickly. 
- The stakes change over time. Prototype the may never see the light of day? Naming less important. Feature in a busy app or shared UI library? Maybe take care to pick a good name.
- Experience builds intuition. Like a lot of programming, exposure to lots of different design patterns and well-named abstractions makes life easier. 
	- There are no *a priori* good names. Names are only meaningful in the context of the application. 
	- [Entire methodologies of styling](https://getbem.com/introduction/) dedicated to getting names right exist

Picking consistent values is hard because [No Design System is Complete](#no-design-system-is-complete)
- If you take care to pick good design tokens and then make sure designers and developers share them, picking consistent values is easy.

Tailwind eschews the naming problem all together, replacing the creation of good class names with rote memorization of Tailwind's classes.

By providing sensible defaults for CSS values and way to override them, Tailwind shortcuts the difficulty of picking consistent values.

Developers have divergent goals
1. Creating re-usable abstractions
2. Building user interfaces

## No Design System is Complete

Design systems themselves are indefinite and never comprehensive: if every scenario were already planned out, the application would already be complete.

Having a "Design System" is the act of bringing rigor and self-similarity to your design process by creating shared abstractions.

A UI Library is only ever a reference implementation of a Design System. Even if a UI Library is a complete expression of the design system, it will still either evolve over time or become outdated before falling out of use.

## Long Class Names

"But there are long strings of CSS classes everywhere now!"

Tailwind doesn't prevent you from naming things! You don't have to carry around long strings everywhere. That said, the long lists of classes are rarely a problem.

## The Maintenance Race

"Have you ever tried to refactor CSS?"

Much has been written about the validity of CSS as a programming language. It is. What it's not, is a great programming language. A bit of a detour here, but refactoring JavaScript used to be *hard*. REALLY hard. Mind numbingly, punch-the-screen hard. Then it got better. Specifically, TypeScript came along and made it possible to codify the data passed between functions, making bigger codebases easier to refactor.

I have not had the same epiphany with refactoring CSS. It is still hard. Still, it is easier than it was a few years ago. The [New CSS](./new-css) has made life much easier (variables, @layer) with more  enhancements (nesting) being spec'ed out.

Why is CSS so hard to refactor?

- Lack of isolation; still common for many pages to share the same stylesheet
	- Fixed by @layer
- Disassociation with its markup; refactoring is cross-cutting
- The "I'll just add this to the bottom of the file" problem, hard to gauge impact of changes
	- modularization can help with this, but has drawbacks. Typically, modular css is automatically scoped to it's parent element, which makes sharing pri

## Declarative vs Imperative

Ad hoc style declarations are bad actually?

The point of Atomic CSS is to reduce the *technology space* that your CSS occupies
	- "technology space" is an idea lifted from The Origin of Wealth

## Criticism

People hate it? 

## None of this is new

https://css-tricks.com/lets-define-exactly-atomic-css/

<sup>1</sup> The technique that Tailwind uses is more properly called "Atomic CSS" or sometimes "Utility classes." This is not Tailwind's invention nor is it a new technique. It has become fashionable over the past several years, popularized by Tailwind. I'll use "Tailwind" throughout the document in a way that your might say "Kleenex" for facial tissue. Features and statements that apply specifically to Tailwind are called out as such.
