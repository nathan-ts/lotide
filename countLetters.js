const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  let result = {};
  for (let char of str) {
    const charCode = char.charCodeAt(0);
    // Check if character is alphabetical
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
    } else {
      // Init character in result if does not exist
      if (!(char in result)) {
        result[char] = 0;
      }
      result[char] += 1;  // Increment result count for that character
    }
  }
  return result;
};


// let result1 = countLetters('LHL');
// // {L: 3, H: 1}
// console.log(result1);
// let result2 = countLetters("lighthouse in the house");
// console.log(result2);
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }