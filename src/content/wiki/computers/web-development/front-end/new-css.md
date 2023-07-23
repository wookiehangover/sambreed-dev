---
title: "New CSS"
description: "CSS, the good parts"
createdAt: 2023-07-18
categories: ["Computers", "Web Development", "Front-End"]
type: 'list'
---

The death of Internet Explorer in 2022 finally opened the doors to the era of the Evergreen browser, where we still have a lowest common denominator (hint: it's Safari) but it's a lot less-low than it used to be. This is a list so I'll remember to use the new stuff.

- `dvh` units. Because phones have browser chrome that changes size with scroll position, viewport height units are now "dynamic".
- spaces over commas in CSS colors. `rgb(255 255 255)` instead of `rgb(255, 255, 255)`. also `rgba` and pals are deprecated
- `color-mix()` 
- `:has()`
- container queries make things responsive based on the parent container's size instead of the viewport. 
- variables. I know, I know, these aren't exactly new, but the point is that you can finally use them everywhere without hesitation. Great with responsive design, where media queries set variables as the primary means of overriding styles.