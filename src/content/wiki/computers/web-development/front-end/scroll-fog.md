---
title: Scroll Fog
description: Create a fog effect that only appears when scrolling
createdAt: 2025-11-26
updatedAt: 2025-11-26
categories:
  - Computers
  - Web Development
  - Front-End
type: note
---

Contemporary web design trends often call for multiple scroll areas on a page with minimal scroll bars. As scrollbars have shrunk over time, it's helpful to create a subtle visual hint that there is more content to discover below the fold.

The solution is to create a subtle gradient that fades out as the user scrolls down the page. The tricky part is getting the gradient to only appear when the user is scrolling, and not when the page is first loaded, and without covering the content itself, especially when there's nothing to scroll.

There's a [great technique](https://codepen.io/jh3y/pen/zYQxKjx) lifted from [jhey](https://x.com/jh3yy/status/1789359851094614449) that uses a mask to create the effect:

```css
@supports (animation-timeline: scroll()) {
	:root {
		--scroll-fog-size: 120;
	}
	.scroll-fog {
		animation:
			mask-up both linear,
			mask-down both linear;
		animation-timeline: scroll(self);
		animation-range:
			0 calc(var(--scroll-fog-size) * 1px),
			calc(100% - (var(--scroll-fog-size) * 1px)) 100%;
		mask:
			linear-gradient(white, transparent) 0 0 / 100% 0 no-repeat,
			linear-gradient(white, white) 0 50% / 100% 100% no-repeat,
			linear-gradient(transparent, white) 0 100% / 100% calc(var(--scroll-fog-size) * 1px) no-repeat;
		mask-composite: exclude;
	}

	@keyframes mask-up {
		to {
			mask-size:
				100% calc(var(--scroll-fog-size) * 1px),
				100% 100%;
		}
	}

	@keyframes mask-down {
		100% {
			mask-size:
				100% calc(var(--scroll-fog-size) * 1px),
				100% 100%,
				100% 0;
		}
	}
}
```

Here's a live example using the [Scroll Sandwich Layout](/wiki/computers/web-development/front-end/scrolling-layout) pattern:

<iframe src="/experiments/scroll-layout" width="100%" height="500px" style="border: none; border-radius: 4px;" />
