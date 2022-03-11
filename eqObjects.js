const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

const eqObjects = function(ob1, ob2) {
  if (Object.keys(ob1).length !== Object.keys(ob2).length) {
    return false;
  }
  for (let key in ob1) {
    if (!(ob1[key] instanceof Object)) {   // if key value is primitive
      if (ob1[key] !== ob2[key]) return false;
    } else if (ob1[key] instanceof Array) {
      if (!eqArrays(ob1[key],ob2[key])) return false;
    } else {
      if (!eqObjects(ob1[key],ob2[key])) return false;
    }
  }
  return true;
};


// // Test Cases
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba),true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false);

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

// assertEqual(eqObjects(media1, media2), false);
// assertEqual(eqObjects(media1, media3), true);