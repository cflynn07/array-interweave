array-interweave
================
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/cflynn07/array-interweave.svg)](https://travis-ci.org/cflynn07/array-interweave)
[![Code Climate](https://codeclimate.com/github/cflynn07/array-interweave/badges/gpa.svg)](https://codeclimate.com/github/cflynn07/array-interweave)
[![codecov.io](https://codecov.io/github/cflynn07/array-interweave/coverage.svg?branch=master)](https://codecov.io/github/cflynn07/array-interweave?branch=master)
[![Dependency Status](https://david-dm.org/cflynn07/array-interweave.svg)](https://david-dm.org/cflynn07/array-interweave)
[![devDependency Status](https://david-dm.org/cflynn07/array-interweave/dev-status.svg)](https://david-dm.org/cflynn07/array-interweave#info=devDependencies)

[![NPM](https://nodei.co/npm/array-interweave.png?compact=true)](https://nodei.co/npm/array-interweave/)

Produce a new array from two source arrays with alternating values from each source array.

Installation
------------
```bash
$ npm install array-interweave --save
```

Usage
-----
```js
const interweave = require('array-interweave')
const sourceA = [1, 2, 3, 4, 5]
const sourceB = ['A', 'B', 'C']
const mergedResult = interweave(sourceA, sourceB)
// => [1, 'A', 2, 'B', 3, 'C', 4, 5]
```

```js
const interweave = require('array-interweave')
const sourceA = [0x55, {foo: 'bar'}, 'apples']
const sourceB = [1, 2, 3, 4, 5]
const mergedResult = interweave(sourceA, sourceB)
// => [0x55, 1, {foo: 'bar'}, 2, 'apples', 3, 4, 5]
```

Tests
-----
iUnit tests use Mocha, Unit.js, and Istanbul
```bash
$ npm run test
$ npm run test-html-cov # Will open HTML coverage report in Google Chrome on OSX
```

License
-------
MIT
