const assert = require('chai').assert;
const countOnly = require('../countOnly');

// TEST CODE
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

describe("#countOnly", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(result1["Karima"], undefined); 
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});

