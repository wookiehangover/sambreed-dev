---
tags:
  - computers
categories: ["Computers"]
title: Junk Drawer Software
type: note
createdAt: 2026-01-02
description: A metaphor for organizing software systems
---

I've been using this metaphor for as long as I can remember.

> Every house has a junk drawer; every app has a `utils.ts`.

A "junk-drawer" module is pejorative way of describing a collection of unrelated utility methods that occupy a single file or directory. Just like how you probably have drawer in your kitchen that's filled with odds-and-ends: scissors, sharpie markers, rubber-bands, loose batteries, corn holders, et al.

Software systems are not different from physical systems, and are subject to entropy and decay over time. Unlike physical systems, the sources of corrosion aren't galvanic or oxidizing, but are induced by changes introduced by the authors. Minor lapses in naming or unintentional duplications lead over time to places in the code that are substantially less well organized than others.

**Origins.** These modules accrete over time as a series of innocent-seeming additions by individual contributors who were moving too quickly to bother with extra thought for systematic organization.

**Mitigations**. Like a household junk drawer, one is fine but any more than that is sus. Group related functions, don't be afraid of large modules. In fact, prefer larger files over one-off utils that are never reused. Monolithic utils files have discoverability issues and lend themselves to the "kitchen-sink" mentality; best to avoid them. If you already have a bunch of unrelated utils, split them into files by theme, nothing wrong with small, well-named single purpose modules in a utils/ folder.