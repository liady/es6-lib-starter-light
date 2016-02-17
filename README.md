ES6 library starter
===========

[![Version](http://img.shields.io/npm/v/es6-lib-starter-light.svg)](https://www.npmjs.org/package/es6-lib-starter-light)
[![Build Status](https://travis-ci.org/liady/es6-lib-starter-light.svg?branch=master)](https://travis-ci.org/liady/es6-lib-starter-light)

> A light starter for a Node ES6 library.

## Quick usage
 1. Clone this repo.
 2. Change all relevant entries in `package.json` and `README.md`, so they match your new shiny library.
 3. Run `npm install` to install dev dependencies.
 4. Write your ES6 code in `src` folder.
 5. Write your ES6 tests in `test` folder.
 6. Run `npm run build` to build for Node. This will compile to ES5 and output the result to `lib` folder.
 7. Run `npm publish` to pulish to the world.

## Detailed overview

### Installation
After cloning this repository, make sure to change all the relevant entries in `package.json` so they match your library.
```sh
npm install
```

### Build for npm
```sh
npm run build
```
This will:
 1. Convert all files in `src` folder from ES6 to ES5
 2. Output the result to the `lib` folder

### Test
```sh
npm run test
```

### Configuration
In `package.json`, change all the relevant entries so they match your library.<br/>
Under the section `library`, you can configure library entry point (defaults to `library.js`)

## License
MIT
