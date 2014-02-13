'use strict';

var genread = require('..'),
    assert = require('assert'),
    concat = require('concat-stream');

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

describe('basic', function(){

  it('should concat twolines', function(done){
    var write = concat(function(data){
      assert.equal(data.toString(), 'line 1\nline 2\n')
      done();
    })
    genread(twolines()).pipe(write)
  });

  it('should concat fivelines', function(done){
    var write = concat(function(data){
      assert.equal(data.toString(), '123line 1\nline 2\n456')
      done();
    })
    genread(fivelines()).pipe(write)
  });
});


