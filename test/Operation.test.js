//test/Operation.test.js

// Old CommonJS syntax
// const { expect } = require('chai');
// const { add, subtract } = require('../Operation.js');

// New ES module syntax
import { expect } from 'chai';
import { add, subtract } from '../MochaAndChai/Operation.js';

describe('Math operations', function() {

  this.timeout(5000);

  it('should add two numbers', function() {
    try {
      expect(add(2, 3)).to.equal(5);  // Expect this to fail
      done();  // Call done to signal completion
    } catch (error) {
      done(error);  // Call done with error to fail the test
    }
  });

  it('should subtract two numbers', function() {
    expect(subtract(5, 2)).to.equal(3);
  });

  it.skip('should subtract two numbers', function() {
    expect(subtract(5, 2)).to.equal(9);  // This test will be ignored
  });

});
