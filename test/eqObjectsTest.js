const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// Test cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

const media1 = {
  game: { 
    series: "Final Fantasy",
    composer: "Nobuo Uematsu",
    titles: {
      game1: "Final Fantasy",
      game2: "Final Fantasy II",
      game3: "Final Fantasy III",
      game4: "Final Fantasy IV",
      game5: "Final Fantasy V",
      game6: "Final Fantasy VI",
      game7: "Final Fantasy VII",
      game8: "Final Fantasy VIII",
      game9: "Final Fantasy IX",
      game10: "Final Fantasy X",
      game11: "Final Fantasy XI",
      game12: "Final Fantasy XII",
      game13: "Final Fantasy XIII",
      game14: "Final Fantasy XIV",
      game15: "Final Fantasy XV"
    }
  }, 
  movie: {
    series: "Lord of the Rings",
    composer: "Howard Shore",
    titles: {
      movie1: "Fellowship of the Ring",
      movie2: "The Two Towers",
      movie3: "Return of the King"
    }
  }
};

const media2 = {
  game: { 
    title: "Metal Gear Solid 2",
    composer: "Harry Gregson-Williams"
  }, 
  movie: {
    title: "Inception",
    composer: "Hans Zimmer"
  }
};

const media3 = {
  game: { 
    series: "Final Fantasy",
    composer: "Nobuo Uematsu",
    titles: {
      game1: "Final Fantasy",
      game2: "Final Fantasy II",
      game3: "Final Fantasy III",
      game4: "Final Fantasy IV",
      game5: "Final Fantasy V",
      game6: "Final Fantasy VI",
      game7: "Final Fantasy VII",
      game8: "Final Fantasy VIII",
      game9: "Final Fantasy IX",
      game10: "Final Fantasy X",
      game11: "Final Fantasy XI",
      game12: "Final Fantasy XII",
      game13: "Final Fantasy XIII",
      game14: "Final Fantasy XIV",
      game15: "Final Fantasy XV"
    }
  }, 
  movie: {
    series: "Lord of the Rings",
    composer: "Howard Shore",
    titles: {
      movie1: "Fellowship of the Ring",
      movie2: "The Two Towers",
      movie3: "Return of the King"
    }
  }
};


describe("#eqArrays", () => {
  it("checks two objects", () => {
    assert.strictEqual(eqObjects(ab, ba),true);
  });
  it("checks two objects", () => {
    assert.strictEqual(eqObjects(ab, abc),false);
  });
  it("checks two nested objects", () => {
    assert.strictEqual(eqObjects(media1, media2), false);
  });
  it("checks two nested objects", () => {
    assert.strictEqual(eqObjects(media1, media3), true);
  });
});