Ember CLI Sassdash ![Download count all time](https://img.shields.io/npm/dt/ember-cli-sassdash.svg) [![npm](https://img.shields.io/npm/v/ember-cli-sassdash.svg)](https://www.npmjs.com/package/ember-cli-sassdash)
======

**Ember CLI Sassdash** is an addon for adding [Sassdash](https://github.com/davidkpiano/sassdash) to Ember applications.

<img src="https://raw.githubusercontent.com/davidkpiano/sassdash/master/sassdash.png" width="200" height="auto">

## What is Sassdash?

Developed with Sass toolkit developer in mind, Sassdash gives you nearly the full expressive power of lodash for JavaScript, inside your SCSS projects. Sassdash is a collection of utility functions, just like lodash. Sassdash never outputs any CSS declarations as it provides no mixins to do so. [Read more](https://github.com/davidkpiano/sassdash).

Installation
------------------------------------------------------------------------------

```bash
ember install ember-cli-sassdash
```

This addon will automatically install [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) as a dependency and create an `app.scss` file in your application at `styles/app.scss` with the following import statement at the top of the file:

```sass
@import "sassdash";
```

Both the previously mentioned `@import` as well as the `ember-cli-sass` addon are required.

## Usage

This step is handled in the default blueprint, but make sure in your `app.scss` to simply add the following at the top of the file (if it isn't already included):

```sass
@import "sassdash";
```

## Documentation

Discover the power of Sassdash over at the [official documentation](http://davidkpiano.github.io/sassdash/sassdoc/index.html).

## Examples

Check out the [dummy app](https://github.com/willviles/ember-cli-sassdash). It showcases some cool examples of Sassdash in action.

* `git clone https://github.com/willviles/ember-cli-sassdash.git`
* `cd ember-cli-sassdash`
* `npm install`
* `ember serve`
* Visit the dummy app at [http://localhost:4200](http://localhost:4200).
