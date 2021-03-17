/*
 *
 *
 *  Given (possibly negative) integers, find the maximum sum of a subsequence
 *  with Kadane's algorithm.
 * 
 *  Note: return 0 if all given integers are negative.
 *
 */

"use strict";

const testingUtils = require("../utilities/testing-utils");

const testCases = [
  // Case Z: [2, 11, -4, 13, -5, -2] => 22
  [2, 11, -4, 13, -5, -2, 22],

  // Case 0 (Average): [-2, 11, -4, 13, -5, -2] => 20
  [-2, 11, -4, 13, -5, -2, 20],

  // Case 1: [-1, -2, -3, -2, -1] => 0
  [-1, -2, -3, -2, -1, 0],

  // Case 2: [1, 2, 3, 2, 1] => 9
  [1, 2, 3, 2, 1, 9],

  // Case 3: [1, 2, 3, -2, 1] => 6
  [1, 2, 3, -2, 1, 6],

  // Case 4: [-1, -2, 3, -2, -1] => 3
  [-1, -2, 3, -2, -1, 3],

  // Case 5: [-3, -2, -2, -1, -1] => 0
  [-3, -2, -2, -1, -1, 0],

  // Case 6: [-2, 4, -1, 1, 1] => 5
  [-2, 4, -1, 1, 1, 5],

  // Case 7: [1, 2, 3, -1, 2] => 7
  [1, 2, 3, -1, 2, 7],

  // Case 8: [1, 2, 3, -1, -2, 6] => 9
  [1, 2, 3, -1, -2, 6, 9],

  // Case 9: [1, 2, 3, -1, -2, 2, 2, -10] => 7
  [1, 2, 3, -1, -2, 2, 2, -10, 7],

  // Case 10: [1, 2, 3, -1, -2, 1, -10, 16] => 7
  [1, 2, 3, -1, -2, 1, -10, 16, 16],

  // Case 11 (Explicitly Undefined): [] => undefined
  [undefined],

  // Case 12: [1] => 1
  [1, 1],

  // Case 13: [-1, -1] => 0
  [-1, -1, 0],

  // Case 14: [-1, 2, -1] => 2
  [-1, 2, -1, 2],

  // Case 15 (Implicitly Undefined): [] => undefined
  [],

  // Case 16: 1 => undefined
  1,
];

const findMaxSubsequenceSumOf = (integers) => {
  // sums
  let best = 0,
    current = 0;

  if (!Array.isArray(integers) || integers.length <= 0) return undefined;
  else
    integers.forEach((x) => {
      current = Math.max(0, current + x);
      best = Math.max(best, current);
    });

  return best;
};

testingUtils.runTestsTo(findMaxSubsequenceSumOf, testCases);
