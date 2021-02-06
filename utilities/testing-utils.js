exports.runTestsTo = (solution, testCases) => {
  testCases.forEach(testCase => {
    const
      expectedOutput = testCase.pop(),
      actualOutput = solution(testCase);
    expectedOutput === actualOutput ?
      console.log('\x1b[32m', `${actualOutput}`) :
      console.log('\x1b[31m', `${actualOutput}, but expected ${expectedOutput}.`);
  });
}