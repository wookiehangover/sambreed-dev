---
title: An Even Worse Search
slug: 2023/an-even-worse-search
description: "Making my links posts searchable"
cover: "../../../assets/squirrel-working.png"
heroAlt: "I have been hard at work gathering materials."
pubDate: "December 21 2023"
---

I have a new page that collects [All the Links](/links) from my links blog posts. This is a post about that page and its lofi search.

Go to [sambreed.dev/links](/links) or try this rickety old search box:

<form action="/links" class="search">
  <input
    type="search"
    autocomplete="off"
    autocapitalize="off"
    autocorrect="off"
    placeholder="Gimme something good!"
    name="q"
  />
  <button>Go</button>
</form>

If you tried that, welcome back.

If you didn’t try that, it’s very simple. Put in a query like [“LLM”](/links?q=llm) (9 links) or [“javascript”](/links?q=javascript) (5 links) or [“pdf”](/links?q=pdf) and you’ll see some matching links.

## Table of Contents

## Background

In 2022 I started posting all of my stray browser tabs at the end of every month. In 2023 I managed to keep the habit up for the whole year. I wasn’t always on time and I didn’t leave a comment for every link but I did get a modest little pile of links.

I’ve never been able to make bookmarks work for me.

After adding the [embeddings search](../lil-vector-search) I felt that it was missing something. I realized I wanted to see all the of links I’ve posted this year.

## User Experience

There are 3 elements at play:

- big list of all the links
- search input that updates the list as you type
- random button

A big list of links wasn’t entirely satisfying and not a great user experience. I didn’t want to re-create the presentation from the blog posts, where links are loosely categorized and presented with commentary.

The list needed a way to filter it.

I’ve always liked list filtering as a UX pattern and it almost always feels like a useful addition. I chose to have the list update as you type in addition to a working form submission.

Filtering felt like only part of the puzzle. What I really wanted is a random button, aping an idea from [Ryan Broderick’s Garbage Day website](https://random.garbageday.email/). So I added a button that will open a random link from the list in a new tab.

## How it works

### Aggregation

Astro provides great hooks for working with content collections, but I found that this use-case was a little bit outside the boundaries painted by their APIs.

The easiest thing I could think of was to copy the pattern I established with the search embeddings: a script to look through my content, grab the links, and output a JSON file.

Armed with a JSON file of all the links, building a page to display them was trivial with Astro.

### Inline Search

For the search, I started with JavaScript first. I felt that seeing the list update as you type would be a better experience. Instead of doing math-y vibe based search with embeddings, I opted to check the title and url for the search term. 

```typescript
const filterInput = document.querySelector("[data-filter]");
const links = document.querySelectorAll("nav[data-links] a");

filterInput.addEventListener("input", () => {
	const filter = filterInput.value.toLowerCase();

	if (!filter) {
	  for (const link of links) {
	    link.classList.remove("hidden");
	  }
	  return;
	}
	
	for (const link of links) {
	  const text = link.textContent?.toLowerCase();
	  if (text?.includes(filter) || link.href.includes(filter)) {
	    link.classList.remove("hidden");
	  } else {
	    link.classList.add("hidden");
	  }
	}
});
```

This pattern is pretty dumb but it works. You wouldn’t want to do this with a large dataset, but it works just fine for a few hundred links.

### Form Submission

With inline search working, I figured that I might as well make the form capable of submitting like an honest, old-fashioned web-site would have.

Again, Astro makes this simple. I’m deployed to Cloudflare Pages and therefore have SSR. I modified the page to check for an incoming query parameter in the url and then perform a search, hiding any links that don’t match.

The JavaScript search picks up seamlessly, restoring the full list when you clear the input without having to submit the form to refresh the page. Best of both worlds!

### Random Button

An API endpoint with an HTTP redirect did the trick here, and can be linked to from anywhere. Give it a try:

[sambreed.dev/api/random-link](/api/random-link)

It even works with search queries!

## Going Further

### Fighting Link Rot

[Link rot](https://en.wikipedia.org/wiki/Link_rot) is a thing. I’m sure even some of the links I’ve collected in the past year have changed or moved or even disappeared entirely.

The next step is to use the Internet Archive’s Wayback Machine to make archived versions of each of the links in my trove, and present them as an option to follow.

This is already something I do on my resume for the Quick Left website, which is now long gone from the web but still alive and well in the Wayback machine.

Or maybe something more ambitious, like scraping the content (for research purposes, not to re-publish) and splitting it into embeddings or a full-text search, and build a proper little micro-search engine for the content I post about.

### A little time capsule

What’s emerged for me from aggregating these links is that I’m making what amounts to a little time capsule of my web browsing every month. But unlike a time capsule, the quality of these links is guaranteed to degrade over time.

The web is in constant motion and often ephemeral. This is my attempt to capture some of that tempest in a teapot.
