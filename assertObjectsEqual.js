const eqObjects = function(object1, object2) {
  let firstKeys = Object.keys(object1);
  let secondKeys = Object.keys(object2);
  let result = false;
  if (firstKeys.length === secondKeys.length) {
    firstKeys.forEach(element => {
      if (secondKeys.includes(element) && object1[element] === object2[element]) {
        result = true;
      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
   
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false