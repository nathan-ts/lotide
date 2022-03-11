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

assertEqual(eqObjects(media1, media2), false);
assertEqual(eqObjects(media1, media3), true);