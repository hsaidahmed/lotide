const assert = require('chai').assert;
const middle = require('../middle');

// console.log(middle([1, 2]));
// console.log(middle([1]));
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 3, 5, 7, 9]));
// console.log(middle([1, 2, 7, 9, 5, 6]));


describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  
  
});