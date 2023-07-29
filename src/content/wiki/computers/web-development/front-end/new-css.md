---
title: "New CSS"
description: "CSS, the good parts"
createdAt: 2023-07-18
updatedAt: 2023-07-27
categories: ["Computers", "Web Development", "Front-End"]
type: 'list'
---

The death of Internet Explorer in 2022 finally opened the doors to the era of the Evergreen browser, where we still have a lowest common denominator (hint: it's Safari) but it's a lot less-low than it used to be. This is a list so I'll remember to use the new stuff.

- `dvh` units. Because phones have browser chrome that changes size with scroll position, viewport height units are now "dynamic".
- spaces over commas in CSS colors. `rgb(255 255 255)` instead of `rgb(255, 255, 255)`. also `rgba` and pals are deprecated
- `:has()`
- container queries make things responsive based on the parent container's size instead of the viewport. 
- variables. I know, I know, these aren't exactly new, but the point is that you can finally use them everywhere without hesitation. Great with responsive design, where media queries set variables as the primary means of overriding styles.
- layers
- there's a [big list of functions](https://twitter.com/argyleink/status/1684579433821372418?s=20), a bunch of which I've never used
	- `var()` ‡
	- `env()`
	- `clamp()`
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