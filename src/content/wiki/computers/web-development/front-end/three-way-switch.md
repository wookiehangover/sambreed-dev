---
title: Three-way Switch
description: Two-way switches are common, but three-way switches are not.
createdAt: 2024-07-27
type: note
categories:
  - Computers
  - Web Development
  - Front-End
---

Sometimes you need to toggle between three values but most off-the-shelf component libraries don't cover this use case. Changing color themes between system and light/dark is a common use case.

The purpose-built HTML form element to use is the `<input type="radio">` element. A group of radio elements with a common `name` property will allow only one radio element to be checked at a time, with a unique value associate with each input. However, the default styling of radio elements leaves something to be desired, e.g.:

<fieldset style="width: fit-content; margin: 0 auto;">
  <input type="radio" id="demo-light" name="theme" value="light" checked />
  <label for="demo-light">Light</label>
  <input type="radio" id="demo-system" name="theme" value="system" />
  <label for="demo-system">System</label>
  <input type="radio" id="demo-dark" name="theme" value="dark" />
  <label for="demo-dark">Dark</label>
</fieldset>

Fortunately, using the exact same markup, a `<fieldset>` and three `<input type="radio">` elements, each with a `<label>`, you can easily implement a three-way switch with CSS.

- the fieldset forms the switch container
- input elements have `appearance: none` to remove the default styling and then are set to fill the container evenly
- an `::after` pseudo-element on the `<fieldset>` to create a circular switch
- `clip-path` and `:has` set the position of the switch based on which radio input is checked
- the labels are positioned absolutely and visually hidden by default, but shown when the corresponding radio input is checked
- custom `linear()` easing function makes the switch feel springy
- an event listener on the `<fieldset>` updates the `color-scheme` attribute on the `<html>` element when the radio input is changed

Bringing it all together:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="mdZEvmq" data-pen-title="3 way switch" data-user="wookiehangover" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/wookiehangover/pen/mdZEvmq">
  3 way switch</a> by Sam Breed (<a href="https://codepen.io/wookiehangover">@wookiehangover</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

There's also (at the time of writing) a three-way toggle in the footer of this website.
