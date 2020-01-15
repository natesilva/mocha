'use strict';
const assert = require('assert');

describe('uncaught', function() {
  var hookOrder = [];
  it('throw delayed error', (done) => {
    setTimeout(() => {
      throw new Error('Whoops!');
    }, 10)
    setTimeout(done, 10);
  });
  it('should wait 15 ms', (done) => {      
    setTimeout(done, 15);
  });
  it('test 3', () => { });

  afterEach(function() {
    hookOrder.push('afterEach');
  });
  after(function() {
    hookOrder.push('after');
    assert.deepEqual(hookOrder, ['afterEach', 'afterEach', 'afterEach', 'after']);
    throw new Error('should get upto here and throw');
  });
});
