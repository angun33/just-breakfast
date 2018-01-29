# Just Breakfast
This is a skeleton for [Brunch](http://brunch.io) to generate a static site. It uses Handlebars and Sass.

##Getting Started
### Install and/or update:
* [Node.js](http://nodejs.org) (On mac, you can install via [homebrew](http://brew.sh/): `brew install node` )
* [Brunch](http://brunch.io): Install brunch globally `npm install -g brunch` or `sudo npm install -g brunch`

### Initialize
* Once Node.js and Brunch are installed,
* Clone this git repo `https://github.com/kgcreative/brunch-with-cocktails.git`
* Run `npm install` to install app dependencies and brunch plugins

### Configure:
* If you need to add plugins or modules to this instance of brunch, you can do so via `npm install --save module`
* Plugin and module configurations are added to brunch-config.js
* If you cloned or forked this repo instead of installing via the skeleton above, you can run `npm install` to install app dependencies and brunch plugins.

### Run:
* `npm start` - Runs the `brunch watch --server --port 3333` command to watch the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history) at [localhost:3333](http://localhost:3333).
* `brunch build --production` builds the minified project for production

### Learn:
* `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
* Place static files you want to be copied from `app/assets/` to `public/`.
* [Handlebars](http://handlebarsjs.com) Static site templating structure is written in `layouts`, `partials`, and `pages`.
* [Brunch](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
* [SASS](http://sass-lang.com/)
* [html-brunch-static](https://github.com/bmatcuk/html-brunch-static) enables [handlebars](http://handlebarsjs.com/) precompiled templates.
