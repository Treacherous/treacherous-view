# Treacherous-View

[![Join the chat at https://gitter.im/grofit/treacherous](https://badges.gitter.im/grofit/treacherous.svg)](https://gitter.im/grofit/treacherous?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Treacherous view layer which tries to add some conventions and functionality to speed up custom plugin creation for other UI frameworks.

(See more about Treacherous [HERE](https://github.com/grofit/treacherous))

---

## Installing

By default the module is exposed as a `commonjs` module, however the dist folder also contains support for `amd` and `system` module types.

### Via NPM

Just do an `npm install treacherous-view`

### In browser

As this is distributed as a commonjs module it is recommended that you consume it via your existing module 
loader, or in the scenario where you do not have one it is recommended that you use webpack to just package 
it up as a UMD module to consume with a global name, this may automatically happen when typescript 2.0 provides 
this functionality for UMD modules out of the box.

---

## What is in here?

`view-strategies` which are an attempt to provide some "out of the box" and example strategies to 
see how you can get elements to be effected by validation.

There may be some more functionality going forward around view triggers for non MVVM style front ends.

### View Strategies

So there is an [`IViewStrategy`](src/view-strategies/iview-strategy.ts) which defines the contract all view strategies
must adhere to. You can wirte your own or use the common `inline-strategy` but it should be easy enough to write a 
portable view strategy.

The idea is that these are not tied to specific view frameworks like knockout, aurelia, ng etc but are just generic 
element actioners, so you can make use of these strategies via composition in a treacherous plugin for a view framework,
which is what happens in the treacherous-aurelia project.

#### View Strategy Registry

There is a registry which contains all available types of view strategy which will basically use the `strategyName` as 
the link to retrieve them from the registry. Like the `ruleRegistry` object which is exported from `Treacherous` there 
is a default instance exported which contains the "default" setup for the registry. You can add/remove things from 
this or just ignore it and make your own, but this is generally the way you access view strategies.

#### Built in Strategies

The framework comes with built in strategies for the following:

* `inline`    - This will append a message in-line, it is fairly basic and more of an example

--- 

## Documentation

Just look in the `docs` folder for more documentation on certain scenarios or subject matters.