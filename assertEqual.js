// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = "Assertion ";
  if (actual === expected) {
    result += "Passed: ";
    result += actual;
    result += " === ";
    result += expected;
  } else {
    result += "Failed: ";
    result += actual;
    result += " !== ";
    result += expected;
  }
  console.log(result);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1,2);
assertEqual("hello","hello");