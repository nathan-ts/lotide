const flatten = function (array) {
  let justice = [];
  for (let e of array) {
    if (Array.isArray(e)) {
      for (ee of e) {
        justice.push(ee);
      }
    } else {
      justice.push(e);
    }
  }
  return justice;
};

module.exports = flatten;