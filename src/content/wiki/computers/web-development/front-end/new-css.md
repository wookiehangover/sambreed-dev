---
title: New CSS
description: CSS, the good parts
createdAt: 2023-07-18
updatedAt: 2024-07-24
type: list
categories:
  - Computers
  - Web Development
  - Front-End
---

The death of Internet Explorer in 2022 finally opened the doors to a new era of web development. The Year of the Evergreen browser, where we still have a lowest common denominator (hint: it's Safari) but it's a lot less-low than it used to be. This is a list where I'll collect list notes to remember what I'm missing using Tailwind.

Consequently, I've been writing more and more custom CSS without Tailwind. I'm still a big fan of Tailwind, but the web platform keeps getting better and better.

## Table of Contents

## New New

- `color-scheme` so this is kinda neat, a built-in way to do light/dark theming, but there doesn't seem to be a clear way to allow for user overrides. [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme)

- `transition-behavior: allow-discrete` h/t to Shop Talk episode ??? for pointing this one out. It is FINALLY possible to animate to an automatic / default values, and specifically `display: none`. [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior)

- `nesting` came from out of nowhere to be completely usable if you only care about targeting modern browsers.
  - After years of using nesting in Sass and Less but then drifting away when authoring formats moved away from all-in-one preprocessors, it feels like returning to a familiar place.
  - Nesting makes so sense in practice that it's hard to imagine not using it frequently from now on.

```css
.nesting {
	& > .child {
		/* styles */
	}
}
```

- container queries make things responsive based on the parent container's size instead of the viewport.
  - 2023-09-05: Finally got around to using container queries on a project, they rock. Of course, I used the [Tailwind](./zen-of-tailwind) flavor in the form a plugin that adds the `@container` class, then a range of modifiers, `@xs:` through `@7xl:`, and the ability to declare your own custom stops (`@[21.5rem]:`). Styling based on the parent container size is honestly more intuitive, and obviously more expressive, than using the browser viewport.

```css
.post {
	container-type: inline-size;
}

@container (min-width: 640px) {
	header h1 {
		font-size: 1rem;
	}
}
```

- `:has()`

- `dvh` units. Because phones have browser chrome that changes size with scroll position, viewport height units are now "dynamic".
- spaces over commas in CSS colors. `rgb(255 255 255)` instead of `rgb(255, 255, 255)`. also `rgba` and pals are deprecated
- `@layer` rules. I hadn't encountered these until [shadcn](https://ui.shadcn.com/) pulled added them to a stylesheet. Definitely another good abstraction to have in the platform, paving a world where interoperability between off-the-shelf web things could be much, much easier than it was in the past.
  - Layers provide explicit cascade control - styles in later-declared layers always override earlier ones, regardless of specificity
  - Perfect for organizing CSS architecture: `@layer reset, base, components, layout, utilities;`
  - Solves the "I'll just add this to the bottom of the file" problem by making cascade order explicit and predictable
  - Makes utility classes truly universal - they'll always override component styles when placed in a later layer
  - Enables better CSS interoperability between different libraries and frameworks

```css
/* Declare layer order first - this controls cascade priority */
@layer reset, base, components, layout, utilities;

@layer reset {
  * { box-sizing: border-box; }
  body { margin: 0; }
}

@layer base {
  body {
    font-family: var(--font-family-body);
    color: var(--text-color);
  }
  h1, h2, h3 { font-weight: 600; }
}

@layer components {
  .search-form { display: flex; gap: 1rem; }
  article > p { margin-block: 1lh; }
}

@layer utilities {
  .text-sm { font-size: 0.875rem; }
  .flex { display: flex; }
  .hidden { display: none; }
}
```
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

## Old New

- `flex` is no longer new and my default mode of thinking for styling. I used to practitioner of the "everything can be done with divs and floats" school, but now I'm all in on train "everything can be done with divs and flex."
  - I have been using flex for _lots_ of common layout patterns for years now. Flex fits well with utility classes and Tailwind, with an API that composes nicely. My codebases are lousy with `flex items-center gap-2` and `flex items-center justify-between`.
- `grid` is also no longer new. It solves a lot of layouts but I use it infrequently, in part due to its flawed implementation in Tailwind. On non-Tailwind projects, I've found grid to feel much more intuitive and useful.
  - A way to do [masonry](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) layouts have been proposed but only available in Safari technical preview. This trend was popular 12-13 years ago when I was consulting, and it always needed JavaScript to calculate the layout. Even with open source projects to solve this for you, it was typically a heavy-weight process to read the size of every dom node in the grid to do the math to position each element. Despite being a design edge case, this would be great to have natively.
  - [Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) is also very cool. I made a little experiement page with it over here: [/experiments/subgrid](/experiments/subgrid)
- variables. I know, I know, these aren't exactly new either, but the point is that you can finally use them everywhere without hesitation.
  - Variables are perfect for responsive design, by using media queries to set variables to override styles without having to repeat selectors.
  - Combined with `@layer`, variables create a powerful theming system where you can organize color tokens in a theme layer that cascades predictably through your entire stylesheet.
