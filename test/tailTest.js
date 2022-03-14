const assert = require('chai').assert;
const tail = require('../tail');

// // Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);

// // Test 2
const em = tail([]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

describe("#tail", () => {
  it('returns 2 for length of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result.length, 2);
  });
  it('returns "Lighthouse" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result[0], "Lighthouse"); 
  });
  it('returns "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result[1], "Labs"); 
  });
  it('returns 0 for length of []', () => {
    assert.strictEqual(em.length, 0); 
  });
  it("returns 3 for words.length after calling tail", () => { //original array should still have 3 elements!
    assert.strictEqual(words.length, 3); 
  });
});