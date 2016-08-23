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

So there are 2 big things in here, one is `view-strategies` which are an attempt to provide some "out of the box"
and example strategies to see how you can get elements to be effected by validation. The other part is `view-triggers` 
which are basically watchers on elements, they can monitor DOM events or anything you like really, and they will 
trigger validation per property when a trigger is run.

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

### View Triggers

Like the strategies there is a [`IViewTrigger`](src/view-triggers/iview-trigger.ts) which defines the contract for all 
triggers. They can be as complex or as simple as needed as long as they adhere to the interface.

#### View Triggers Registry

Much like the strategy registry there is a trigger one too which by default comes with the built in triggers.

#### Built in triggers

The framework comes with built in triggers for the following:

* `blur`      - Triggers validation when the DOM element blurs
* `change`    - Triggers validation when the DOM element changes (blur & value changed)
* `init`      - Triggers validation when the element is initialized, this happens only once
* `interval`  - This will continually trigger validation on a given interval, you can tell it only to do so when focused
* `keyup`     - Triggers validation when any key is released
* `submit`    - Only triggers validation when a containing form is submitted

Hopefully more will be added as the library evolves.

--- 

## Documentation

Just look in the `docs` folder for more documentation on certain scenarios or subject matters.