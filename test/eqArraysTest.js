const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// Test cases

describe("#eqArrays", () => {
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]), true);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[1]]]]]]]]]]]]]), true);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("checks two arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});