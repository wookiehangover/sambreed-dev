---
title: "Product Tracking"
description: "How to figure out if a product is working"
createdAt: 2023-07-28
categories: ["Computers", "Web Development"]
type: "note"
---

Recently someone asked for my advice about how to measure success in companies and how to know if a product is working.

Specifically, they asked what we did at [Credit Karma](/cv.html):

- there were a few things working in tandem:
  - tracking beacons on all CTAs that gave end-to-end tracing
  - multi-variant testing database (very similar to what the heavybit startup LaunchDarkly built around the same time)
  - big org of product managers and analysts who were judged on revenue generation
  - the benefit of lots of users AND very clear signals when a users engaged (plus extremely high payouts for successful conversions)
  - a new feature would get deployed at a low % of traffic and then held until an analyst signed off that it improved over the baseline. I forget what the target p-value was, but remember it being complicated to measure because of newness effects
- in most early stage startups, sales feedback is where the richest data will come from
  - who are they losing to and why?
    - what types of customers?
  - measuring churn: who's dropping out, how quickly, and why?
    - basically, goal should be never let a customer churn out if it's something that can be addressed within the product (eg. stability, needs feature X that competitor has)
