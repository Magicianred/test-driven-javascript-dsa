/*
 *
 *  Give (possibly negative) integers, find the maximum sum of a subsequence.
 * 
 */

'use strict';

const testingUtils = require('../utilities/testing-utils');

const testCases = [
  // Case 0 (Average): [-2, 11, -4, 13, -5, -2] => 20
  [-2, 11, -4, 13, -5, -2, 20],

  // Case 1: [-1, -2, -3, -2, -1] => -3
  [-1, -2, -3, -2, -1, -3],

  // Case 2: [1, 2, 3, 2, 1] => 9
  [1, 2, 3, 2, 1, 9],

  // Case 3: [1, 2, 3, -2, 1] => 6
  [1, 2, 3, -2, 1, 6],

  // Case 4: [-1, -2, 3, -2, -1] => 1
  [-1, -2, 3, -2, -1, 1],

  // Case 5: [-3, -2, -2, -1, -1] => -2
  [-3, -2, -2, -1, -1, -2],
  
  // Case 6: [-2, 4, -1, 1, 1] => 5
  [-2, 4, -1, 1, 1, 5],

  // Case 7: [1, 2, 3, -1, 2] => 7
  [1, 2, 3, -1, 2, 7],

  // Case 8: [1, 2, 3, -1, -2, 6] => 9
  [1, 2, 3, -1, -2, 6, 9],

  // Case 9: [1, 2, 3, -1, -2, 2, 2, -10] => 7
  [1, 2, 3, -1, -2, 2, 2, -10, 7],

  // Case 10: [1, 2, 3, -1, -2, 1, -10, 16] => 7
  [1, 2, 3, -1, -2, 1, -10, 16, 7]
];

// TODO: Provide implementation for stubbed solution.
const findMaxSubsequenceSumOf = integers => 0;

testingUtils.runTestsTo(findMaxSubsequenceSumOf, testCases)
