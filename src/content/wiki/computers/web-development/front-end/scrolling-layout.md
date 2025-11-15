---
title: Scroll Sandwich Layout
description: A clean CSS Grid pattern for creating scrollable layouts with fixed headers and footers.
createdAt: 2025-11-14
updatedAt: 2025-11-14
categories:
  - Computers
  - Web Development
  - Front-End
type: note
---

## The best scrolling layout I know how to make

When you need a layout with a fixed header, a scrollable content area, and a fixed footer without fucking around with `position: sticky` or `position: fixed`, CSS Grid has your back.

**tl;dr:** Use CSS Grid to define 3 areas inside a fixed-height container: a header, a scroll area, and a footer/prompt area.

```tsx
export default function ScrollSandwich() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <header className="h-40">
        {/* Fixed header content */}
      </header>

      <div className="overflow-y-scroll">
        {/* Scrollable content area */}
      </div>

      <footer className="h-40">
        {/* Fixed footer/prompt area */}
      </footer>
    </div>
  );
}
```

## When to use this pattern

This layout shines when:
- `position: sticky` isn't sufficient or becomes too complex
- You want to avoid `position: fixed` and its z-index/stacking context headaches
- You need a predictable, maintainable scrolling layout

## Why avoid the alternatives?

**Sticky positioning** can be tricky to get right. It needs to accommodate content passing underneath it, and controlling the initial position often introduces "magic numbers" to create arbitrary offsets. Stacking multiple sticky elements compounds the complexity.

**Fixed positioning** works, but it removes elements from the document flow, which can cause layout shifts and requires careful z-index management.

## How it works

CSS Grid is powerful and expressive, but sometimes the simplest patterns are the most effective. Here's what makes this layout tick:

1. **The container** has a fixed height (e.g., `h-screen`) and uses `display: grid` with a row template: `auto 1fr auto`
2. **The header and footer** are always visible at the top and bottom of the viewport, both with defined heights (`auto` sizing)
3. **The scroll area** uses `1fr` and automatically grows to fill all available space between the header and footer

This creates a "scroll-sandwich" layout:

```
┌──────────────────┐
│     Header       │ ← Fixed at top
├──────────────────┤
│                  │
│   Scroll Area    │ ← Scrolls independently
│   (grows/shrinks)│
│                  │
├──────────────────┤
│     Footer       │ ← Fixed at bottom
└──────────────────┘
```

## A note on Tailwind

Tailwind's built-in grid utilities are a throwback to the Bootstrap 12-column grid days. The real zen of using grids with Tailwind is found in the ad-hoc syntax escape hatch: `grid-rows-[auto_1fr_auto]`. 

The CSS equivalent is often easier to read:

```css
.container {
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
}

.scroll-area {
  overflow-y: scroll;
}
```

## Why not flexbox?

There's always more than one way to do it. Flexbox is completely capable of achieving the same layout—just set `flex-direction: column` and `flex-grow: 1` on the scroll container. 

Maybe that's better, maybe it's worse. I prefer using Grid for page-level layouts because it doesn't require setting properties on the scroll container itself; the layout is defined entirely at the parent level, which feels more declarative.

## Extras

- Works great with Radix UI's `<ScrollArea>` component for enhanced scrollbar styling
- The footer/prompt area can vary its height dynamically, and the scroll area will automatically resize to fill the remaining space