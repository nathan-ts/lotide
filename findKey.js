const assertEqual = require('./assertEqual');

const findKey = (o, c) => {
  for (let k in o) if (c(o[k])) return k;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) ,"noma");// => "noma"