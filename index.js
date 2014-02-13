'use strict';
var Readable = require('stream').Readable,
    util = require('util');

util.inherits(GenRead, Readable);

function GenRead(generator, opt){
  Readable.call(this, opt);
  this.generator = generator;
}

GenRead.prototype._read = function(){
  var next = this.generator.next();
  if(next.done){
    this.push(null);
  } else {
    this.push(next.value);
  }
}

module.exports = function(generator, opt){
  return new GenRead(generator, opt);
}
