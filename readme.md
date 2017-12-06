# Treacherous-View

[![Join the chat at https://gitter.im/grofit/treacherous](https://badges.gitter.im/grofit/treacherous.svg)](https://gitter.im/grofit/treacherous?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Treacherous view layer which tries to add some conventions and functionality to speed up custom plugin creation for other UI frameworks.

(See more about Treacherous [HERE](https://github.com/grofit/treacherous))

---

## Installing

By default the module is exposed as a `commonjs` module, however it also supports the `module` property for an es2015 version for tree shaking etc.

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

`view-summaries` which are a basic "out of the box" blocks of validation, so when you don't want your
validation to appear on each element but for them to appear as a singular block.

There may be some more functionality going forward around view triggers for non MVVM style front ends.

---

### View Strategies

There is an [`IViewStrategy`](src/view-strategies/iview-strategy.ts) which defines the contract all view strategies
must adhere to. You can write your own or use the common `inline-strategy` but it should be easy enough to write a
portable view strategy.

The idea is that these are not tied to specific view frameworks like knockout, aurelia, ng etc but are just generic 
element actioners, so you can make use of these strategies via composition in a treacherous plugin for a view framework,
which is what happens in all the existing treacherous plugin projects.

#### View Strategy Registry

There is a registry which contains all available types of view strategy which will basically use the `strategyName` as 
the link to retrieve them from the registry. Like the `ruleRegistry` object which is exported from `Treacherous` there 
is a default instance exported which contains the "default" setup for the registry. You can add/remove things from 
this or just ignore it and make your own, but this is generally the way you access view strategies.

#### Built in Strategies

The framework comes with built in strategies for the following:

* `inline`    - This will append a message in-line, it is fairly basic and more of an example

---

### View Summaries

There is [`IViewSummaryStrategy`](src/view-summaries/iview-summary-strategy.ts) which defines the contract all
view summaries must adhere to. You can write your own or use the `default` but it should be easy enough to
write a portable view summary for your own scenarios if the basic one is not a good fit.

The idea is that these are not tied to specific view frameworks like knockout, aurelia, ng etc but are just generic
summaries, so you can make use of these objects via composition in a treacherous plugin for a view framework,
which is what happens in all the existing treacherous plugins projects.

#### View Summary Registry

There is a registry which contains all available types of view summary which will basically use the `summaryName` as
the link to retrieve them from the registry. Like the `ruleRegistry` object which is exported from `Treacherous` there
is a default instance exported which contains the "default" setup for the registry. You can add/remove things from
this or just ignore it and make your own, but this is generally the way you access view strategies.

#### Built in Strategies

The framework comes with built in strategies for the following:

* `default`    - This will just put each validation error on a new line, it is fairly basic but can be styled.

---

## View Options/Strategies and Configuration

This framework attempts to create a standard for all other plugins to operate off, however this does not mean
that if you made your own treacherous plugin with this that you *NEED* to follow conventions, however if you do
it makes things easier for everyone.

As part of these conventions there are some default attributes that can be easily accessed by the `ElementHelper`
class.

### `validate-property`

This attribute should be used to indicate what property route should be bound, if your plugin is able to infer
this automatically (i.e knockout) you may not need to use this, but for other frameworks where you cannot
easily infer the property name you can use this attribute as a way to tell the underlying handler/binding/directive
what property you want validating.

Here is a simple example where we are inferring that we are wanting to validate the `name` property:

```
// Assume an object with { name: String } where the `name` field is required
<input id="name-input" placeholder="Name" validate-property="name" />
```

Here is another example which shows that we are inferring that we are wanting to validate a property
within an array:

```
// Assume an object with { hobbies: { name: String } } where the `hobbies[i].name` field is required
<input id="hobby-input" placeholder="Hobby Name" validate-property="hobbies[0].name" />

// You would generally have the index be resolvable, so for example here is what it would look like in vue
<div v-for="(hobby, index) in hobbies">
    <input type="text" v-model="hobby.name" placeholder="Hobby" v-show-error v-bind:validate-property="'hobbies[' + index + '].name'" />
</div>
```

As you can see this allows you to hint in a generic way across all MVVM style frameworks, as almost all of them
have a way for you to dynamically set attributes based upon `index` or other properties.

It is also worth mentioning that this doesn't have to be just in input elements, you can put this anywhere
that you want to hint that a property should be used. It is down to each treacherous plugin to decide
how it handles showing errors, but in most cases you can put them with the relevant binding/directive on
any element with the hint and it should work, i.e in vue:

```
// treacherous-vue uses v-show-error to indicate a view strategy should process the element
<div id="name-error" v-show-error validate-property="name" />
```

### `view-strategy`

This attribute should be used in conjunction with the `validate-property` attribute to hint which view
strategy should be used, if none is specified generally its assumed `inline` will be used but if others
are registered you can specify to use them, here is a simple example:

```
// Assume an object with { name: String } where the `name` field is required
<input id="name-input" placeholder="Name" validate-property="name" view-strategy="inline"/>
<div id="name-error-2" validate-property="name" view-strategy="some-custom-strat"></div>
```

This above example shows that you can output the same error in many different ways, and use different strats
on a per error basis, however its up to the relevant plugin how it defaults etc.

### `view-options`

This attribute allows you to provide custom options to your `IViewStrategy` implementations, as well as
allowing your custom bindings/directives to make use of the custom view options to do something with them.
You can pass in any valid json content and it should process it fine, such as:

```
// treacherous-vue uses v-show-error to indicate a view strategy should process the element
<div id="name-error" v-show-error validate-property="name" view-options="color: 'red', size: 12, foo: { bar: true }" />
```

### `view-summary-strategy`

This is much like the `view-strategy` attribute but for use with view summaries, so it allows you to tell
a view summary what type of strategy is required, there is a default one which is available, but much like
the `view-strategy` examples, you provide the name of the strat you wish to use.

### `summary-options`

Much like the `view-options` this lets you pass in custom options to your view summary strategy. See the
`view-options` example for how to make use of this.

---

## Documentation

Just look in the `docs` folder for more documentation on certain scenarios or subject matters. (TODO)