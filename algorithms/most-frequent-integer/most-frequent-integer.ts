/*
 *
 *  Find the most frequent integer in a given array of numbers.
 *
 */

 // TODO: Cover other edge cases.
const testCases : Array<Array<number>> = [
  // Case 1: [1, 2, 2, 4, 0.5, 0.5, 0.5, 3] => 2
  [1, 2, 2, 4, 0.5, 0.5, 0.5, 3, 2],
  
  // Case 2: [3, 5, 7] => 3
  [3, 5, 7, 3], 

  // Case 3: [4, 5, 89, 5, 1] => 5
  [4, 5, 89, 5, 1, 5],

  // Case 4: [1] => ?
  [1],

  // Case 5: [-99, -99, -99, 1, -17, 0, 1, -99] => -99
  [-99, -99, -99, 1, -17, 0, 1, -99]
];

// TODO: Implement.
function getMostFrequentIntegerOf(integers : Array<number>) : number {
  return 0;
}

testCases.forEach((testCase : Array<number>) => {
  const
    expectedOutput : number = testCase.pop(),
    actualOutput : number = getMostFrequentIntegerOf(testCase);
  expectedOutput === actualOutput ?
    console.log('\x1b[32m', actualOutput) :
    console.log('\x1b[31m', `${actualOutput}, but expected ${expectedOutput}.`);
});
