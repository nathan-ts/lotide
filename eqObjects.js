const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;