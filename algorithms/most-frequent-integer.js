/*
 *
 *  Find the most frequent integer in a given array of numbers.
 *
 */

'use strict';

const testingUtils = require('../utilities/testing-utils.js');

const testCases = [
  // Case 1: [1, 2, 2, 4, 0.5, 0.5, 0.5, 3] => 2
  [1, 2, 2, 4, 0.5, 0.5, 0.5, 3, 2],
  
  // Case 2: [3, 5, 7] => 3
  [3, 5, 7, 3], 

  // Case 3: [4, 5, 89, 5, 1] => 5
  [4, 5, 89, 5, 1, 5],

  // Case 4: [-99, -99, -99, 1, -17, 0, 1, -99] => -99
  [-99, -99, -99, 1, -17, 0, 1, -99],

  // Case 5: [Number.MAX_VALUE, Number.MAX_VALUE, 1] => 1.7976931348623157e+308
  [Number.MAX_VALUE, Number.MAX_VALUE, 1, Number.MAX_VALUE],

  // Case 6: [Number.MIN_VALUE, Number.MIN_VALUE, 1] => 1
  [Number.MIN_VALUE, Number.MIN_VALUE, 1, 1],

  // Case 7: [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0] => 0
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0, 0],

  // Case 8: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, 0] => 0
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, 0, 0],

  // Case 9: [1, 1] => 1
  [1, 1]
];

const getMostFrequentIntegerOf = numbers => {
  let mostFrequent = 0;
  const count = {};

  for (const x of numbers) {
    if (x % 1 === 0) count[`${x}`] ? count[`${x}`]++ : count[`${x}`] = 1;
    if (count[`${x}`] > (count[`${mostFrequent}`] ?? 0)) mostFrequent = x;
  };

  return mostFrequent;
}

testingUtils.runTestsTo(getMostFrequentIntegerOf, testCases);
