const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  let len = array.length;
  if (len <= 2) {
    return [];
  }
  if (len % 2 === 0) { // if even
    let mid = len / 2;
    return [array[mid - 1],array[mid]];
  } 
  return [array[Math.floor(len/2)]];
};


// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]