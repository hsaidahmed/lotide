const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(((tail([1,2,3])).length), 2));
  });
  it("returns [5,6] for [4, 5, 6]", () => {
    assert.deepEqual(tail([4,5,6]), [5,6]);
  });
  
  
});