const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

console.log(middle([1, 2]));
console.log(middle([1]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 3, 5, 7, 9]));
console.log(middle([1, 2, 7, 9, 5, 6]));