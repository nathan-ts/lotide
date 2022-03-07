// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) {
    // result += "✅✅✅ Assertion Passed: ";
    // result += actual;
    // result += " === ";
    // result += expected;
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // result += "🛑🛑🛑 Assertion Failed: ";
    // result += actual;
    // result += " !== ";
    // result += expected;
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  // console.log(result);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1,2);
assertEqual("hello","hello");