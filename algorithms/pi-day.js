/*
 *
 *  Efficiently compute Math.PI for Pi Day.
 *
 */

"use strict";

const testingUtils = require("../utilities/testing-utils");

const testCases = [
  // Case Math.PI: [undefined, Math.PI], undefined => Math.PI
  [undefined, Math.PI],
];

const pi = () =>
  Math.floor((16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239)) * 10 ** 15) /
  10 ** 15;

testingUtils.runTestsTo(pi, testCases);
