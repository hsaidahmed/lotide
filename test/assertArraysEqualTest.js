const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


assertArraysEqual([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, 3]);// => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);