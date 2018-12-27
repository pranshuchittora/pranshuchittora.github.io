---
title: React != Performance (always)
date: "2018-12-27T07:14:07.071Z"
---

Hello World, I know you all devs are angry after reading the title of this blog. That how can he say like this. React which is one of the "hot & popular" frontend library today is no doubt performant, but great power comes with great responsibilites.

TL;DR

How to make code performant

- Keep components as stateless as possible
- Optimise re-renders
- Master lifecycle methods
- Don't get burnt by using redux
- Keep bundle size as small as possible
- SSR - Server side rendering

How to make it maintainable

- It's hard for a new dev to get famaliar with large codebase, so having docs could save a lot of time and future complicacies
- Write tests, what test for frontend ? Yes, it can be done and worths a lot as the codebase grows. Puppetier can be implemented.
- Poptypes pls. 
- CRA is great but I recommend seting up the project from ground up (npm init). Because CRA comes with a lot of boilerplate configs, of which not all are required.


## Why Performance matters

It's 2019 and mobile devices comes with 4 gigs of ram and a blazing fast processer. Ya that's fast, but the bottleneck is with javascript. Though JS engines are optimising day by day, still it can't be as performant as compiled language (wasm too).

Writing UI in JS is hot right now, but that huge stringgg of JS first needed to be fetched and then parsed which is too much res heavy

```j
console.log("LOL")
let a =2

```



