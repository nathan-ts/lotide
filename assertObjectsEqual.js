// const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// // Test Cases
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);   //true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);  //false

// const media1 = {
//   game: { 
//     title: "Final Fantasy IX",
//     composer: "Nobuo Uematsu"
//   }, 
//   movie: {
//     title: "Lord of the Rings",
//     composer: "Howard Shore"
//   }
// };

// const media2 = {
//   game: { 
//     title: "Metal Gear Solid 2",
//     composer: "Harry Gregson-Williams"
//   }, 
//   movie: {
//     title: "Inception",
//     composer: "Hans Zimmer"
//   }
// };

// const media3 = {
//   game: { 
//     title: "Final Fantasy IX",
//     composer: "Nobuo Uematsu"
//   }, 
//   movie: {
//     title: "Lord of the Rings",
//     composer: "Howard Shore"
//   }
// };

// assertObjectsEqual(media1, media2); //false
// assertObjectsEqual(media1, media3); //true