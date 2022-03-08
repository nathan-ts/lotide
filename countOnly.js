const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let count = {};
  for (let item in itemsToCount) {
    if (itemsToCount.hasOwnProperty(item) && itemsToCount[item]) {  // check if property not inherited and set to count
      for (let target of allItems) {
        if (item === target) {
          if (!(item in count)) { // init {count} with the item to count
            count[item] = 0;
          }
          count[item] += 1;       // increment count
        }
      }
    }
  }
  return count;
}



// Test
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);