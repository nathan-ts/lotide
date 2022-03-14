const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let k of array1.keys()) {
    let good = true;
    if (Array.isArray(array1[k])) good = eqArrays(array1[k],array2[k]);
    else if (array1[k] !== array2[k]) good = false;
    if (!good) return false;
  }
  return true;
};

module.exports = eqArrays;