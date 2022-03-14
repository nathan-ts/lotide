const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

// TEST CODE
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

describe("#findKeyByValue", () => {
  it("returns drama for TV Shows", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined when searching TV Shows", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
  });
  it('returns FF for Games', () => {
    assert.strictEqual(findKeyByValue(bestGamesBySeries, "Final Fantasy IX"), "final_fantasy"); 
  });
  it("returns undefined for Games", () => {
    assert.strictEqual(findKeyByValue(bestGamesBySeries, "Cyberpunk"), undefined); 
  });
});