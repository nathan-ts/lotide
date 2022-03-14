# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This library clone was written by me for the purpose of learning JS concepts during Lighthouse Labs' bootcamp. 

## Usage

**Install it:**

`npm install @nathan-ts/lotide`

**Require it:**

`const _ = require('@nathan-ts/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: function that asserts if two arrays are equals
* `assertEqual(...)`: function that asserts if two values are equals
* `assertObjectsEqual(...)`: function that asserts if two objects are equals
* `countLetters(...)`: function that returns counts of each letter of a string
* `countOnly(...)`: function that returns an object with a list of counts for a provided object with elements to count, searching a provided array
* `eqArrays(...)`: function that compares two arrays for strict equality
* `eqObjects(...)`: function that compares two objects for strict equality
* `findKey(...)`: function that returns the first key of an object for which the callback provided returns a truthy value
* `findKeyByValue(...)`: function that returns the key of an object, given that the value matches the provided value
* `flatten(...)`: function that returns a single-level array, given a 2D array
* `head(...)`: function that retrieves the first element from an array
* `letterPositions(...)`: function that returns all the indices in the string where each character is found
* `map(...)`: function that creates a new array with the results of calling a provided function on every element in the array
* `middle(...)`: function that returns the middle element(s) of an array
* `tail(...)`: function that retrieves every element in an array, except the first element
* `takeUntil(...)`: function that returns elements in an array up until a given value
* `without(...)`: function that removes elements from an array