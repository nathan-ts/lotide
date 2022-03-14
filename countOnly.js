const assertEqual = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let count = {};
  for (let item in itemsToCount) {
    if (itemsToCount.hasOwnProperty(item) && itemsToCount[item]) {  // check if property not inherited and set to count
      for (let target of allItems) {
        if (item === target) {
          if (!(item in count)) { // init {count} with the item to count
            count[item] = 0;
          }
          count[item] += 1;       // increment count
        }
      }
    }
  }
  return count;
}

module.exports = countOnly;