const assertArraysEqual = function(actual, expected) {
  let result = "";
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

console.log(letterPositions("hello"));