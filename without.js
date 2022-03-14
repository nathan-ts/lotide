const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function (source, remove) {
  let send = [];
  for (let i = 0; i < source.length; i++) {
    let add = source[i];
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        add = false;
      }
    }
    if (add) {
      send.push(add);
    }
  }
  return send;
};

module.exports = without;

// // Tests
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
