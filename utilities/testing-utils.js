'use strict';

exports.runTestsTo = (solution, testCases) => {
  let failureCount = 0;

  // Add line break to console output.
  console.log();

  testCases.forEach(testCase => {
    const
      expectedOutput = testCase.pop(),
      actualOutput = solution(testCase);
    expectedOutput === actualOutput ?
      console.log('\x1b[32m', `✓ Output is ${actualOutput} as expected.`) :
      (failureCount++, console.log('\x1b[31m', `✖ Output is ${actualOutput} but expected ${expectedOutput}.`));
  });

  // Add line break to console output.
  console.log();
  
  failureCount <= 0 ? 
    console.log('\x1b[32m', `✓ All tests for '${solution.name}' solution passed.`) :
  
  failureCount === testCases.length ?
    console.log('\x1b[31m', `✖ All tests for '${solution.name}' solution failed.`) : 
    console.log('\x1b[31m', `✖ ${failureCount} of ${testCases.length} tests for '${solution.name}' solution failed.`)
}
