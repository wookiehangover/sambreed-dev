---
title: "The Zen of Tailwind"
description: "How to not lose your mind with all the strings"
createdAt: 2023-08-15
categories: ["Computers", "Web Development", "Front-End"]
type: 'note'
---

I've been a happy Tailwind<sup>[1](#none-of-this-is-new)</sup> user for a while now, and have been using the underlying techniques since 2016.

The first thing I discovered when rolling out a similar system was "some people really don't like this." It's not for everyone!

Learning CSS is hard enough, so learning a layer of shortcoded indirection on top of CSS steepens an already daunting learning curve. For more seasoned CSS aficionados, the translation between what you know and what you need to write still takes some time to get a hang of. You will be searching the docs frequently for "things you know how to do." 

Fortunately, the payoff is worth it. If you can put up with the downsides, there's a certain Zen that can be unlocked.

- Composing styles and markup together shortens the feedback loop for anything you're building. 
- Faster iteration and fewer decisions mean more internal consistency and fewer chances for gross deviation. Duplicating styles between components has zero carrying cost.
- CSS bundle sizes are fixed, and do not grow with the size of your application; more variation does not yield more CSS.

But not everyone is convinced (and that's OK, do your thing.)

## Table of Contents

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

### No Design System is Complete

Design systems themselves are indefinite and never comprehensive: if every scenario were already planned out, the application would already be complete.

Having a "Design System" is the act of bringing rigor and self-similarity to your design process by creating shared abstractions.

A UI Library is only ever a reference implementation of a Design System. Even if a UI Library is a complete expression of the design system, it will still either evolve over time or become outdated before falling out of use.

## Long Class Names

"But there are long strings of CSS classes everywhere now!"

Tailwind doesn't prevent you from naming things! You don't have to carry around long strings everywhere. That said, the long lists of classes are rarely a problem.

## The Maintenance Race

[See also](https://worksinprogress.co/issue/the-maintenance-race)

"Have you ever tried to refactor CSS?"

Much has been written about the validity of CSS as a programming language. It is. What it's not, is a great programming language. A bit of a detour here, but refactoring JavaScript used to be *hard*. REALLY hard. Mind numbingly, punch-the-screen hard. Then it got better. Specifically, TypeScript came along and made it possible to codify the data passed between functions, making bigger codebases easier to refactor.

I have not had the same epiphany with refactoring CSS. It is still hard. Still, it is easier than it was a few years ago. The [New CSS](./new-css) has made life much easier (variables, @layer) with more  enhancements (nesting) being spec'ed out.

Why is CSS so hard to refactor?

- Lack of isolation; still common for many pages to share the same stylesheet
	- Fixed by @layer
- Disassociation with its markup; refactoring is cross-cutting
- The "I'll just add this to the bottom of the file" problem, hard to gauge impact of changes
	- modularization can help with this, but has drawbacks. Typically, modular css is automatically scoped to it's parent element, which makes sharing pri

## What about arbitrary values?

Arbitrary values were introduced when Tailwind moved to jit compilation. Instead of declaring custom values ahead of time in tailwind.config.js, you can now use any value at runtime using the `[value]` syntax. 

Before Tailwind added arbitrary values, you needed to fall back to css or inline styling for custom properties. In the best case, you take the time to write a well-named non-atomic utility class that is hopefully re-used and easy to discover. In the worst case, you add yet another class to a long and hurried CSS file full of similar one-off classes with mysterious and unfamiliar names. Either way, the "file of one-off's" approach is easy to manage until it exceeds a few hundred lines, but beyond that, good luck.

After Tailwind added arbitrary values, declaring a custom color stop or width or whatever was easy. In the best case, you do this sparingly and the few cases that do need truly custom values are self-documenting and easy to find via global search. In the worst case, you overuse arbitrary values. Your code is hard to read and it's difficult to implement design changes to existing components. The second case is harder to imagine because it cuts so hard against the grain of framework, but I'm sure it's out there.

In all things, the middle way is the best and safest route. Practicing both of the best case options, writing well named utilities and custom CSS and using the occasional arbitrary value, will net the best outcome: smaller CSS payload and better developer experience. Arbitrary values were added because they increase the expressiveness of Tailwind at little cost if deployed sensibly.

Watch for over-use of arbitrary values in code reviews, and encourage extending Tailwind config or writing custom CSS instead of abusing the square brackets. Likewise, adding lots of custom CSS to a Tailwind project should draw additional scrutiny in code review. 
## Criticism

Tailwind gets a healthy amount of criticism. I'm not here to defend the finer points of the many arguments presented against it. Writing HTML and CSS is a complex discipline worthy of thoughtful criticism.

The differences between these techniques is overall not all that huge, and building websites is not a zero sum game. Remember that the tools you choose rarely matter very much in hindsight.

https://pdx.su/blog/2023-07-26-tailwind-and-the-death-of-craftsmanship/ 
https://johanronsse.be/2020/07/08/why-youll-probably-regret-using-tailwind/
https://thoughtbot.com/blog/tailwind-and-the-femininity-of-css

## None of this is new

https://css-tricks.com/lets-define-exactly-atomic-css/

<sup>1</sup> The technique that Tailwind uses is more properly called "Atomic CSS" or sometimes "Utility classes." This is not Tailwind's invention nor is it a new technique. It has become fashionable over the past several years, popularized by Tailwind. I'll use "Tailwind" throughout the document in a way that your might say "Kleenex" for facial tissue. Features and statements that apply specifically to Tailwind are called out as such.
