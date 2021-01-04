/*
 *
 *  Find the most frequent integer in a given array of numbers.
 *
 */

const testCases : Array<Array<number>> = [
  // Case 1: [1, 2, 2, 4, 0.5, 0.5, 0.5, 3] => 2
  [1, 2, 2, 4, 0.5, 0.5, 0.5, 3, 2],
  
  // Case 2: [3, 5, 7] => 3
  [3, 5, 7, 3], 

  // Case 3: [4, 5, 89, 5, 1] => 5
  [4, 5, 89, 5, 1, 5],

  // Case 4: [-99, -99, -99, 1, -17, 0, 1, -99] => -99
  [-99, -99, -99, 1, -17, 0, 1, -99],

  // Case 5: [Number.MAX_VALUE, Number.MAX_VALUE, 1] => Number.MAX_VALUE
  [Number.MAX_VALUE, Number.MAX_VALUE, 1, Number.MAX_VALUE],

  // Case 6: [Number.MIN_VALUE, Number.MIN_VALUE, 1] => 1
  [Number.MIN_VALUE, Number.MIN_VALUE, 1, 1],

  // Case 7: [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0] => Number.POSITIVE_INFINITY
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0, Number.POSITIVE_INFINITY],

  // Case 8: [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, 0] => Number.NEGATIVE_INFINITY
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, 0, Number.NEGATIVE_INFINITY],

  // Case 9: [1, 1] => 1
  [1, 1]
];

function getMostFrequentIntegerOf(integers : Array<number>) : number {
  const frequencies : Object = {};
  let mostFrequentInteger : number = 0;

  integers.forEach((x : number) : void => { 
    x % 1 === 0 && frequencies[`${x}`] ? frequencies[`${x}`]++ : frequencies[`${x}`] = 1;
    if (frequencies[`${x}`] > (frequencies[`${mostFrequentInteger}`] ?? 0))
      mostFrequentInteger = x;
  });

  return mostFrequentInteger;
}

testCases.forEach((testCase : Array<number>): void => {
  const
    expectedOutput : number = testCase.pop(),
    actualOutput : number = getMostFrequentIntegerOf(testCase);
  expectedOutput === actualOutput ?
    console.log('\x1b[32m', actualOutput) :
    console.log('\x1b[31m', `${actualOutput}, but expected ${expectedOutput}.`);
});
