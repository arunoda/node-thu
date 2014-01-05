var assert = require('assert');
var t = require('../index.js');
var co = require('co');

suite('t', function() {
  test('obj.func with args', function(done) {
    var num = new Num();
    var thunk = t(num, 'incre', 100);
    thunk(function(err, result) {
      assert.equal(result, 100);
      done();
    });
  });

  test('obj.func without args', function(done) {
    var num = new Num(200);
    var thunk = t(num, 'get');
    thunk(function(err, result) {
      assert.equal(result, 200);
      done();
    });
  });

  test('func with args', function(done) {
    thunk = t(sum, 10, 20);
    thunk(function(err, result) {
      assert.equal(result, 30);
      done();
    });
  });

  test('unsupported args', function(done) {
    try {
      thunk = t(10);
      assert.fail('should throws');
    } catch(ex) {
      assert.equal(ex.message, 'UNSUPPORTED_ARGUMENTS');
      done();
    }
  });
});

function sum(a, b, callback) {
  setTimeout(function() {
    callback(null, a+b);
  }, 100);
}

function Num(value) {
  var self = this;
  this.value = value || 0;
  this.incre = function(value, callback) {
    setTimeout(function() {
      self.value += value;
      callback(null, self.value);
    }, 200);
  };

  this.get = function(callback) {
    setTimeout(function() {
      callback(null, self.value);
    }, 200);
  }
}