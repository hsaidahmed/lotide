const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  }
  return results;

};
const results1 = map(words, word => word[0]);
console.log(results1);


const eqArrays = (array1,array2) => {
  if (array1.length !== array2.length) {
    console.log(false);
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
 
  return true;
};
// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
module.exports = map;