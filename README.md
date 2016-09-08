# preprocessor-brunch
Adds C-style preprocessor directive support to JS and COFFEE [brunch](http://brunch.io) compilations. This allows you to have the same source files, but multiple environments specified in your config-brunch.coffee file to compile for different environments.

## Setup
Add `"js-preprocess-brunch": "x.y.z"` to `package.json` of your brunch app.

In your `brunch-config.coffee` file of your brunch app, add a line to specify your `buildEnv`. In the `overrides section`, add other environments

It can also be helpful to have different public paths for each config. That way different environments with different buildTarget's will compile their output to different folders.

ex: `config-brunch.coffee`
```coffeescript
exports.config =
  buildEnv: 'debug'
  paths:
    public: 'debug'
  overrides:
    release:
      buildEnv: 'release'
      paths:
        public: 'release'
  ...
```

## Add Directives to Code
Directives for if, else, elseif, and endif are available to control what javascript gets compiled. Each must be on its own line and prepended by the comment op (double forward slash for javascript, hashtag for coffee-script). 

javascript
```javascript
// @if (PRODUCTION)
...

// @elseif (DEBUG)
...

// @else
...

// @endif
```
OR

coffee-script
```coffescript
C&#35; @if (PRODUCTION)
...

C&#35; @elseif (DEBUG)
...

C&#35; @else
...

C&#35; @endif
```

Note the use of parentheses. Unlike C preprocessor directives, those parentheses are required for `@if` and `@elseif` statements.

The `@if` and `@elseif` directives also support the OR (||) operator.
ex: `// @if (PRODUCTION || iOS)`

* Nested `@if` statements are not yet supported.

## Compile Your Brunch App
Using the above example, it will compile debug by default and override for release when using the environment variable:

* `brunch build -e release`