


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
const without = (source, itemsToRemove) => {
  if (eqArrays(source, itemsToRemove)) {
    return [];
  } else {
    const newArray = [];
    for (const item of source) {
      if (!itemsToRemove.includes(item)) {
        newArray.push(item);
      }
    }
    return newArray;
  }
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);