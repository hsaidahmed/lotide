
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

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  }
    else if (array.length % 2 !==0 ) {
      
      return [array[(Math.floor(array.length/2))]];
    }
    else {
      
      return [array[(array.length/2)-1],array[(array.length/2)]];
     
    }
  }

console.log(middle([1, 2]));
console.log(middle([1]));
console.log(middle([1, 2, 3])); // => [2]
 console.log(middle([1, 3, 5, 7, 9]));
 console.log(middle([1, 2, 7, 9, 5, 6]));