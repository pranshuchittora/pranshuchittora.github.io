---
title: React h🔥t reloading ft. CRA
date: '2019-08-20'
---

## TLDR;

<div align="center">
<iframe src="https://www.youtube.com/embed/xsSnOQynTHs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---------------------------

Let's time travel and go back to 1950, its the era of Punched card programming (_A punched card is a flexible write-once medium that encodes data, most commonly 80 characters. Groups or "decks" of cards form programs and collections of data_). A programmer writes the code on these cards, makes a bundle and send it to the computer operators _(A person who operates a computer)_. Next day their code runs and after encountering errors the programmer finds the bundle from a huge mess and gets back to his desk and analyses it and realises that he forgot a comma _","_. And he repeats this cycle again and again and again until it runs successfully.

Fortunately, we live in the 21st century where advancements in hardware and software made us a bit careless as execution cycle is negligible as compared to the early computing era.

## What is h🔥t reloading?

Hot reloading is a pretty cool term which we came across quite frequently, in various ecosystems (React Native, Flutter etc). Before proceeding further let me try to clear the confusion between _Hot Reloading_ and _Live realoding_.

**Live reloading** reloads the entire application when a file changes. For example, if you were three-levels deep into your navigation and saved a change (state), live reloading would restart the application and load the app back to the initial route hence losing the entire state.

**Hot reloading** on the other hand only refreshes the files that were changed without losing the state of the app. For example, if you were three-levels (links) deep into your navigation and saved a change to some styling, the state would not change, but the new styles would appear on the page without having to navigate back to the page you are on because you would still be on the same page.

## Why should I care 💁

Assume that you are building a form wizard component _(not 🧙)_. When you reach to the second step, you realised that you made a typo error, therefore you fix that typo, hit save and magically new dev build gets created and the dev server reloads the page. When you get back to your browser you see that the entire flow has been broken and all the state data got wiped 🧹. Then you control your anger and somehow reaches to the second step of the wizard in O(∞), and you see that the typo has been fixed.. whoa whoa just hold on the button to the next step is not working. Alright, it's just a minor error you fixes that in few seconds, hit save and returns to the app. And all previous state has been wiped again......and again.....Imagine doing this several times.

<div align="center">
<img width="70%" src="https://media.giphy.com/media/11SIQQeKf6ZAdO/source.gif" alt="gih-reaction">
</div>

## How it works

It works by creating a proxy wrapper which handles all the module replacement and transferring the states to the tree.

Read Indepth => [Hot Reloading in React by Dan Abramov](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf)

## Setting up hot reloading ft. CRA

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
The motivation behind CRA is to build apps, without setting up tooling and tinkering with loads of configurations. To cover a broad spectrum, the CRA team has put up bare minimum infra to get you up and running.

To enable hot reloading we need to change the underlying webpack configuration. By default it is abstracted by `react-scripts`, to expose the config we need to `eject` the CRA (learn more about [ejecting](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) ).

<div align="center">
<img width="70%" src="https://media.giphy.com/media/4qUKPPrJw6U2Q/giphy.gif" alt="gih-reaction">
</div>

> Ejecting the configs

```bash
npm run eject
```

> Installing `react-hot-loader`

```bash
npm install --save-dev react-hot-loader
```

> Ejecting the configs

```bash
npm run eject
```

> Add the following in your `webpack` config

```js
plugins: [
  "react-hot-loader/babel",
  [
    require.resolve("babel-plugin-named-asset-import"),
    {
      loaderMap: {
        svg: {
          ReactComponent: "@svgr/webpack?-svgo,+ref![path]"
        }
      }
    }
  ]
],
```

### It might look something like this 👇

```js
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: paths.appSrc,
  loader: require.resolve("babel-loader"),
  options: {
    customize: require.resolve(
      "babel-preset-react-app/webpack-overrides"
    ),

    plugins: [
      "react-hot-loader/babel",
      [
        require.resolve("babel-plugin-named-asset-import"),
        {
          loaderMap: {
            svg: {
              ReactComponent: "@svgr/webpack?-svgo,+ref![path]"
            }
          }
        }
      ]
    ],
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
    cacheCompression: isEnvProduction,
    compact: isEnvProduction
  }
}
```

> Wrap your App component with the HOC

```js
import React from 'react'
import { hot } from 'react-hot-loader'

const App = () => <div>Hello World!</div>

export default hot(module)(App)
```

<div align="center">
<h2>🎊 Well Done 🎊</h2>
</div>
<div align="center">
<img width="70%" src="https://media.giphy.com/media/9Jcw5pUQlgQLe5NonJ/giphy.gif" alt="gih-reaction">
</div>

## Conclusion

IMO hot reloading is must as it save a lot of time in redoing changes in the state during development.
