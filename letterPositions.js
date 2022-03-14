const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function (str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    // Check if character is alphabetical
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
    } else {
      // Init character in result if does not exist
      if (!(str[i] in result)) {
        result[str[i]] = [];
      }
      result[str[i]].push(i);  // Increment result count for that character
    }
  }
  return result;
};

module.exports = letterPositions;

// console.log(letterPositions("hello"));
// console.log(letterPositions("lighthouse in the house"));