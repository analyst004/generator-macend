# AngularJS Full-Stack generator
![Build Status](https://codeship.com/projects/26128390-800a-0133-c5f7-6a23b0487a18/status?branch=master)
[![npm version](https://badge.fury.io/js/generator-macend.svg)](http://badge.fury.io/js/generator-macend)
[![Dependency Status](https://david-dm.org/macend/generator-macend.svg)](https://david-dm.org/macend/generator-macend)
[![Dev-Dependency Status](https://david-dm.org/macend/generator-macend/dev-status.svg)](https://david-dm.org/macend/generator-macend#info=devDependencies)
[![Gitter chat](https://badges.gitter.im/analyst004/generator-macend.svg)](https://gitter.im/analyst004/generator-macend)
> Yeoman generator for creating MEAN stack applications, using MongoDB, Express, AngularJS, and Node - lets you quickly set up a project following best practices.

#### Generated project:
[![Dependency Status](https://david-dm.org/macend/angular-fullstack-deps.svg)](https://david-dm.org/macend/angular-fullstack-deps)
[![Dev-Dependency Status](https://david-dm.org/macend/angular-fullstack-deps/dev-status.svg)](https://david-dm.org/macend/angular-fullstack-deps#info=devDependencies)

## Example project

Source code: https://github.com/analyst004/fullstack-demo

## Usage

Install `yo`, `grunt-cli`, `bower`, and `generator-macend`:
```
npm install -g yo grunt-cli bower generator-macend
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo macend`, optionally passing an app name:
```
yo macend [app-name]
```

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.

## Supported Configurations

**General**

* Build Systems: `Grunt`, `Gulp` (experimental)
* Testing:
  * `Jasmine`
  * `Mocha + Chai + Sinon`
    * Chai assertions:
      * `Expect`
      * `Should`

**Client**

* Scripts: `Babel`, `TypeScript` (Coming Soon)
* Markup:  `HTML`, `Jade`
* Stylesheets: `CSS`, `Stylus`, `Sass`, `Less`
* Angular Routers: `ngRoute`, `ui-router`
* CSS Frameworks: `Bootstrap`
  * Option to include `UI Bootstrap`

**Server**

* Scripts: `Babel`
* Database:
  * `None`,
  * `MongoDB`, `SQL`
    * Authentication boilerplate: `Yes`, `No`
    * oAuth integrations: `Facebook` `Twitter` `Google`
    * Socket.io integration: `Yes`, `No`

## Injection

A grunt task looks for new files in your `client/app` and `client/components` folder and automatically injects them in the appropriate places based on an injection block.

* `less` files into `client/app/app.less`
* `scss` files into `client/app/app.scss`
* `stylus` files into `client/app/app.styl`
* `css` files into `client/index.html`
* `js` files into `client/index.html`
* `babel` temp `js` files into `client/index.html`

## Generators

Available generators:

* App
    - [macend](#app) (aka [macend:app](#app))
* Server Side
    - [macend:endpoint](#endpoint)
* Client Side
    - [macend:route](#route)
    - [macend:controller](#controller)
    - [macend:filter](#filter)
    - [macend:directive](#directive)
    - [macend:service](#service)
    - [macend:provider](#service)
    - [macend:factory](#service)
    - [macend:decorator](#decorator)
* Deployment
    - [macend:openshift](#openshift)
    - [macend:heroku](#heroku)

### App
Sets up a new AngularJS + Express app, generating all the boilerplate you need to get started.

Usage:
```bash
Usage:
  yo macend:app [options] [<name>]

Options:
  -h,   --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers                        Default: false
        --skip-install  # Do not install dependencies                           Default: false
        --app-suffix    # Allow a custom suffix to be added to the module name  Default: App
        --gulp          # Use the experimental Gulp config instead of Grunt     Default: false

Arguments:
  name    Type: String  Required: false
```

Example:
```bash
yo macend
```

### Endpoint
Generates a new API endpoint.

Usage:
```bash
Usage:
  yo macend:endpoint [options] <name>

Options:
  -h,   --help               # Print the generator's options and usage
        --skip-cache         # Do not remember prompt answers           Default: false
        --route              # URL for the endpoint
        --models             # Specify which model(s) to use
        --endpointDirectory  # Parent directory for enpoints

Arguments:
  name    Type: String  Required: true
```

Example:
```bash
yo macend:endpoint message
[?] What will the url of your endpoint be? /api/messages
```

Produces:

    server/api/message/index.js
    server/api/message/index.spec.js
    server/api/message/message.controller.js
    server/api/message/message.integration.js
    server/api/message/message.model.js  (optional)
    server/api/message/message.events.js (optional)
    server/api/message/message.socket.js (optional)

### Route
Generates a new route.

Example:
```bash
yo macend:route myroute
[?] Where would you like to create this route? client/app/
[?] What will the url of your route be? /myroute
```

Produces:

    client/app/myroute/myroute.js
    client/app/myroute/myroute.controller.js
    client/app/myroute/myroute.controller.spec.js
    client/app/myroute/myroute.html
    client/app/myroute/myroute.scss


### Controller
Generates a controller.

Example:
```bash
yo macend:controller user
[?] Where would you like to create this controller? client/app/
```

Produces:

    client/app/user/user.controller.js
    client/app/user/user.controller.spec.js

### Directive
Generates a directive.

Example:
```bash
yo macend:directive myDirective
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? Yes
```

Produces:

    client/app/myDirective/myDirective.directive.js
    client/app/myDirective/myDirective.directive.spec.js
    client/app/myDirective/myDirective.html
    client/app/myDirective/myDirective.scss

**Simple directive without an html file**

Example:
```bash
yo macend:directive simple
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? No
```

Produces:

    client/app/simple/simple.directive.js
    client/app/simple/simple.directive.spec.js

### Filter
Generates a filter.

Example:
```bash
yo macend:filter myFilter
[?] Where would you like to create this filter? client/app/
```

Produces:

    client/app/myFilter/myFilter.filter.js
    client/app/myFilter/myFilter.filter.spec.js

### Service
Generates an AngularJS service.

Example:
```bash
yo macend:service myService
[?] Where would you like to create this service? client/app/
```

Produces:

    client/app/myService/myService.service.js
    client/app/myService/myService.service.spec.js


You can also do `yo macend:factory` and `yo macend:provider` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo macend:decorator serviceName
[?] Where would you like to create this decorator? client/app/
```

Produces

    client/app/serviceName/serviceName.decorator.js

###Openshift

Deploying to OpenShift can be done in just a few steps:

    yo macend:openshift

A live application URL will be available in the output.

> **oAuth**
>
> If you're using any oAuth strategies, you must set environment variables for your selected oAuth. For example, if we're using Facebook oAuth we would do this :
>
>     rhc set-env FACEBOOK_ID=id -a my-openshift-app
>     rhc set-env FACEBOOK_SECRET=secret -a my-openshift-app
>
> You will also need to set `DOMAIN` environment variable:
>
>     rhc set-env DOMAIN=<your-openshift-app-name>.rhcloud.com
>
>     # or (if you're using it):
>
>     rhc set-env DOMAIN=<your-custom-domain>
>
> After you've set the required environment variables, restart the server:
>
>     rhc app-restart -a my-openshift-app

To make your deployment process easier consider using [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).

**Pushing Updates**

    grunt

Commit and push the resulting build, located in your dist folder:

    grunt buildcontrol:openshift

### Heroku

Deploying to heroku only takes a few steps.

    yo macend:heroku

To work with your new heroku app using the command line, you will need to run any `heroku` commands from the `dist` folder.


If you're using mongoDB you will need to add a database to your app:

    heroku addons:create mongolab

Your app should now be live. To view it run `heroku open`.

>
> If you're using any oAuth strategies, you must set environment variables for your selected oAuth. For example, if we're using **Facebook** oAuth we would do this :
>
>     heroku config:set FACEBOOK_ID=id
>     heroku config:set FACEBOOK_SECRET=secret
>
> You will also need to set `DOMAIN` environment variable:
>
>     heroku config:set DOMAIN=<your-heroku-app-name>.herokuapp.com
>
>     # or (if you're using it):
>
>     heroku config:set DOMAIN=<your-custom-domain>
>

To make your deployment process easier consider using [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).

#### Pushing Updates

    grunt

Commit and push the resulting build, located in your dist folder:

    grunt buildcontrol:heroku


## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-cookies
* angular-mocks
* angular-resource
* angular-sanitize
* es5-shim
* font-awesome
* json3
* jquery
* lodash

These packages are installed optionally depending on your configuration:

* angular-route
* angular-ui-router
* angular-socket-io
* angular-bootstrap
* bootstrap

All of these can be updated with `bower update` as new versions are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Use `grunt test:e2e` to have protractor go through tests located in the `e2e` folder.

**Code Coverage**

Use `grunt test:coverage` to run mocha-istanbul and generate code coverage reports.

`coverage/server` will be populated with `e2e` and `unit` folders containing the `lcov` reports.

The coverage taget has 3 available options:
- `test:coverage:unit` generate server unit test coverage
- `test:coverage:e2e` generate server e2e test coverage
- `test:coverage:check` combine the coverage reports and check against predefined thresholds

* *when no option is given `test:coverage` runs all options in the above order*

**Debugging**

Use `grunt serve:debug` for a more debugging-friendly environment.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

## Project Structure

Overview

    ├── client
    │   ├── app                 - All of our app specific components go in here
    │   ├── assets              - Custom assets: fonts, images, etc…
    │   ├── components          - Our reusable components, non-specific to to our app
    │
    ├── e2e                     - Our protractor end to end tests
    │
    └── server
        ├── api                 - Our apps server api
        ├── auth                - For handling authentication with different auth strategies
        ├── components          - Our reusable or app-wide components
        ├── config              - Where we do the bulk of our apps configuration
        │   └── local.env.js    - Keep our environment variables out of source control
        │   └── environment     - Configuration specific to the node environment
        └── views               - Server rendered views

An example client component in `client/app`

    main
    ├── main.js                 - Routes
    ├── main.controller.js      - Controller for our main route
    ├── main.controller.spec.js - Test
    ├── main.html               - View
    └── main.less               - Styles

An example server component in `server/api`

    thing
    ├── index.js                - Routes
    ├── thing.controller.js     - Controller for our `thing` endpoint
    ├── thing.model.js          - Database model
    ├── thing.socket.js         - Register socket events
    └── thing.spec.js           - Test

## Contribute

See the [contributing docs](https://github.com/analyst004/generator-macend/blob/master/contributing.md)

This project has 2 main branches: `master` and `canary`. The `master` branch is where the current stable code lives and should be used for production setups. The `canary` branch is the main development branch, this is where PRs should be submitted to (backport fixes may be applied to `master`).

By separating the current stable code from the cutting-edge development we hope to provide a stable and efficient workflow for users and developers alike.

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a PR, make sure that the commit messages match the [AngularJS conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

When submitting a bugfix, try to write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

See the `travis.yml` for configuration required to run tests.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
