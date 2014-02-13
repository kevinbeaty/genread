Turn any generator into a readable stream.

[![Build Status](https://secure.travis-ci.org/kevinbeaty/genread.png)](http://travis-ci.org/kevinbeaty/genread)

# Installation

```
$ npm install genread
```

You must use node 0.11.9 or higher for generator support and run with the `--harmony` flag.

# Example

```
var genread = require('..');

function* twolines(){
  yield 'line 1\n'
  yield 'line 2\n'
}

function* fivelines(){
  yield '1';
  yield '23';
  yield *twolines();
  yield '456';
}

genread(fivelines()).pipe(process.stdout)
