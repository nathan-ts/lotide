// const assertEqual = require('./assertEqual');

const findKeyByValue = function(toSearch, target) {
  for (let searchee in toSearch) {
    if (toSearch[searchee] === target) return searchee;
  }
  return undefined;
};

module.exports = findKeyByValue;