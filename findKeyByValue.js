const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(toSearch, target) {
  for (let searchee in toSearch) {
    if (toSearch[searchee] === target) return searchee;
  }
  return undefined;
};

// Test Cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestGamesBySeries = { 
  final_fantasy: "Final Fantasy IX",
  dragon_quest: "Dragon Quest IX",
  halo: "Halo Infinite",
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestGamesBySeries, "Final Fantasy IX"), "final_fantasy");
// assertEqual(findKeyByValue(bestGamesBySeries, "Cyberpunk"), undefined);