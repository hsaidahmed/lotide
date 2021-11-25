
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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  let results = {};
  let counter = -1;

  for (const char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        counter++;
        results[char].push(counter);
      } else {
        counter++;
        results[char] = [counter];
      }
    } else {
      counter++;
    }

  }
  // console.log(results)
  return results;

};
assertArraysEqual(letterPositions("hello").e, [1]);