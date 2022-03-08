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


console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]