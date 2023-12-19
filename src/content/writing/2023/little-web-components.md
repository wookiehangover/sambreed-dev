---
title: Little Web Components
slug: 2023/lil-web-components
description: "How I use little Web Components (Custom Elements) to improve my website"
cover: "../../../assets/code-embed.png"
heroAlt: "The now-unused <code-block> custom element"
pubDate: "December 4 2023"
---

For as long as I can remember, I had assumed Web Components (Custom Elements) were in the "still baking" phase of the standards lifecyle. Not yet ready for consumption unless you wanted a more hazardous life as a web developer.

That's no longer true: Web Components are ready to use.*

Dave Rupert recently [shared a post](https://daverupert.com/2023/10/fitvids-has-a-web-component-now/) about his `<fit-vids>` component that caught my attention. For the first time, Web Components seemed simple and approachable. I didn't have to re-write my entire website to use them! I decided to follow his example of giving Custom Elements a try the next time I need a little DOM thing.

As of today, I have three little components:

* `<share-button>` wraps a standard `<button>` to trigger the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) if available, otherwise copying the link to the clipboard.
* `<reply-link>` uses the Shadow DOM to keep my email address out of crawlers.
* `<code-block>` adds a little "copy to clipboard" button to every preformatted code element

\*_More or less._ If you want a full framework, look at something like [Enhance](https://enhance.dev/). My examples are not by any means comprehensive.

## ShareButton

This is a case where I normally would have written a few lines of vanilla JS and called it a day. With Web Components I can write a few lines of vanilla JS and call it a day, but this time with newer tools.

The component launches a share sheet using the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) when available, otherwise it copies the current link to the clipboard (and changes the button text to indicate what just happened).

The user experience doesn't seem that much different. But after years of using UI components in other contexts, I prefer the custom element:

Custom Element:
```html
<share-button
    data-title="Little Web Components"
    data-link="/writing/2023/lil-web-components">
  <button>Share</button>
</share-button>
```

CSS Selector:
```html
<button class="share-button"
    data-title="Little Web Components"
    data-link="/writing/2023/lil-web-components">
  Share
</button>
```

I like the Custom Element because it clearly delineates between presentation and function. `<button>` is a visual element. `<share-button>` is a functional element.

<details>
<summary>Here's the source for <code>&lt;share-button></code>:</summary>

```ts
class ShareButton extends HTMLElement {
  constructor() {
    super();

    const { title, link, description } = this.dataset;
    if (!link) return;

    const $button = this.querySelector("button");
    if (!$button) return;

    $button.addEventListener("click", () => {
      if ("share" in navigator) {
        share()
      } else if ("clipboard" in navigator) {
        copyToClipboard()
      }
    });

    function share() {
      // call navigator.share()
    }

    function copyToClipboard() {
      // call navigator.clipboard.writeText()
      // swap the button text
    }
  }
}

customElements.define("share-button", ShareButton);
```
</details>

## ReplyLink

This one seems a little silly and is definitely an afterthought. Instead of dumping a plain old anchor tag with a `mailto:` URL scheme, I've wrapped that into a custom element. Similar to ShareButton, I pass in a `title` and `link` and the component formats the URL scheme to open an email with a subject and a body.

Before / without JavaScript, the link is inert. Maybe you're not a fan, but I'm fine with this. There's a little extra work to go through in order to get the link styled correctly, but that's the cost of [using the Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM).


```html
<reply-link
    data-title="Little Web Components"
    data-link="/writing/2023/lil-web-components">
  → Reply
</reply-link>
```

You can see this and ShareButton in action at the bottom of this page.

<details>
<summary>Source</summary>

```js
class ReplyLink extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const { title, link } = this.dataset;
    if (!link) return;

    const shadow = this.attachShadow({ mode: "closed" });
    const subject = encodeURIComponent(`Re: ${title}`);
    const body = encodeURIComponent(`\n\nLink to: ${link}\n`)

    const style = document.createElement("style");
    style.textContent = `
      a {
        color: var(--text-dim);
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    `;

    const a = document.createElement("a");
    a.setAttribute("href", `mailto:test@example.com?subject=${subject}&body=${body}`);
    a.innerHTML = "→ Reply";

    shadow.append(style, a)
  }
}

customElements.define("reply-link", ReplyLink);
```
</details>


## CodeBlock

`<code-block>` adds a "Copy to Clipboard" button to code blocks. Code highlighting is already done by Astro. An earlier version of this component handled syntax highlighting, but it is only suitable for client-generated text.

I'm using the "Light DOM" pattern again here. The component simply wraps its children and adds functionality.

```html
<code-block>
  <pre>
    <code>
      console.log("Wow, look at that copy button up there 👆")
    </code>
  </pre>
</code-block>
```

<details>
<summary>Source</summary>

```js
class CodeEmbed extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const button = document.createElement("button");
    button.innerHTML = `<svg viewBox="0 0 20 20" width="16" height="16">
      <use href="/icon-sprite.svg#icon-copy"></use>
    </svg>`;

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(this.querySelector("pre")?.textContent ?? "");
      const span = document.createElement("span");
      span.innerHTML = "Copied!";
      button.prepend(span);
      setTimeout(() => {
        span.remove();
      }, 1000);
    });

    this.append(button);
  }
}

customElements.define("code-block", CodeEmbed);
```
</details>

And here's the plugin that adds it to code blocks automatically:

<details>
<summary>Rehype Plugin</summary>

```ts
function rehypeCodeWrapperPlugin() {
  return function transformer(tree) {
    visit(tree, 'raw', (node) => {
      if (node.value.startsWith('<pre')) {
        const rawContent = node.value;
        node.value = `<code-block>${rawContent}</code-block>`;
      }
    });
    return tree;
  };
}
```
