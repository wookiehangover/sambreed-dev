---
title: New CSS
description: CSS, the good parts
createdAt: 2023-07-18
updatedAt: 2023-10-13
type: list
categories:
  - Computers
  - Web Development
  - Front-End
---

The death of Internet Explorer in 2022 finally opened the doors to a new era of web development.  The Year of the Evergreen browser, where we still have a lowest common denominator (hint: it's Safari) but it's a lot less-low than it used to be. This is a list where I'll collect list notes to remember what I'm missing using Tailwind.

- `flex` is no longer new and my default mode of thinking for styling. I used to practitioner of the "everything can be done with divs and floats" school, but now I'm all in on train "everything can be done with divs and flex."
	- I have been using flex for *lots* of common layout patterns for years now. Flex fits well with utility classes and Tailwind, with an API that composes nicely. My codebases are lousy with `flex items-center gap-2`  and `flex items-center justify-between`.
- `grid` is also no longer new. It solves a lot of layouts but I use it infrequently, in part due to its flawed implementation in Tailwind. On non-Tailwind projects, I've found grid to feel much more intuitive and useful.
	- A way to do [masonry](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) layouts have been proposed but only available in Safari technical preview. This trend was popular 12-13 years ago when I was consulting, and it always needed JavaScript to calculate the layout. Even with open source projects to solve this for you, it was typically a heavy-weight process to read the size of every dom node in the grid to do the math to position each element. Despite being a design edge case, this would be great to have natively. 
- `dvh` units. Because phones have browser chrome that changes size with scroll position, viewport height units are now "dynamic".
- spaces over commas in CSS colors. `rgb(255 255 255)` instead of `rgb(255, 255, 255)`. also `rgba` and pals are deprecated
- `:has()`
- container queries make things responsive based on the parent container's size instead of the viewport.
	- 2023-09-05: Finally got around to using container queries on a project, they rock. Of course, I used the [Tailwind](./zen-of-tailwind) flavor in the form a plugin that adds the `@container` class, then a range of modifiers, `@xs:` through `@7xl:`, and the ability to declare your own custom stops (`@[21.5rem]:`).  Styling based on the parent container size is honestly more intuitive, and obviously more expressive, than using the browser viewport.
- variables. I know, I know, these aren't exactly new, but the point is that you can finally use them everywhere without hesitation. Great with responsive design, where media queries set variables as the primary means of overriding styles.
- layers
- there's a [big list of functions](https://twitter.com/argyleink/status/1684579433821372418?s=20), a bunch of which I've never used
	- `env()`
	- `clamp(min, preferred, max)` - make a value change dynamically with container size
	- `attr()` ‡
	- `invert()`
	- Grid sizing
		- `fit-content()` `repeat()`
	- Color stuff:
		- `color-mix()`
		- `rgb()` ‡ `hsl()` ‡ `oklch()`
	- Clip Path
		- `circle()` `polygon()` `path()`
	- Maths
		- `sin()` `cos()` `tan()` `pow()` `hypot()` `log()`
		- `min()` `max()` `round()`
		- `calc()` ‡
	- Easing
		- `steps()` `linear()` `cubic-bezier()`

‡ These have been around for long enough that I no longer consider them new, but still make life much, much better so I'll include them here anyway.