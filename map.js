// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');

const words = ["ground", "control", "to", "major", "tom"];

const map = function (a, c) {
  let r = [];
  for (let e of a) {
    r.push(c(e));
  }
  return r;
};

module.exports = map;

// const results1 = map(words, (word) => word[0]);
// console.log(results1);