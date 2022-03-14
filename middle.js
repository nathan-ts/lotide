// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');

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

module.exports = middle;