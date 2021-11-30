# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hsaidahmed/lotide`

**Require it:**

`const _ = require('@hsaidahmed/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `function1(...)`: description

* `head`: Extracts the first element of an array.
* `tail`: Extracts the whole array and slices the first element.
* `middle`: Extracts the middle item in an array if the length of the array is an odd number, if the length is an even number then it extracts the two mddle elements in the array.
* `assertArraysEqual`: Equates and checks if any two arrays are the exact same. 
* `assertEqual`: Checks if two values are equal.
* `assertObjectEqual`: Checks if two objects are equal.
* `eqArrays`: Compares the length and value of two arrays.
* `countLetters`: Counts the number of letters in a string
* `countOnly`: Inputs an array and an object with items marked true and false. Returns the items marked true only.
* `eqObject`: Inputs two objects and compares them if they are the same by comparing the length of keys in each objects and then checks if it has the same valued keys in the two objects.
* `findKey`: Inputs an object and a callback function with the callback function executing and returning the first key that evaluates to be true.
* `findKeyByValue`: Inputs an object and with the value of the key, returns the key.
* `letterPositions`: Inputs a string and returns the position of each letter in that string
* `map`: Takes in an array and manipulates it with the callback function assigned to it.
* `takeUntil`: Takes in an array and manipulates the only true assigned elements with a callback function.
* `without`: Takes in two arrays and returns an array with non-duplicate elements from the two arrays.


