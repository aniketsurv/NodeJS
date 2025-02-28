// test/example.test.js
//const { expect } = require('chai');
import { expect } from 'chai';



describe('Simple Math Test', function() {
  it('should return 4 when adding 2 + 2', function() {
    expect(2 + 2).to.equal(4);
  });

  it('should return 9 when multiplying 3 * 3', function() {
    expect(3 * 3).to.equal(9);
  });
});
