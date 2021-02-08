/*
 *
 *  Print the number of times "Fizz", "Buzz", and "FizzBuzz" 
 *  should be printed based on the classic FizzBuzz problem 
 *  given any positive integer.
 * 
 *  Problem Modification: 
 *  
 *  For this version of the problem, count "Fizz", "Buzz",
 *  and "FizzBuzz" for each positive integer that 
 *  meets all 3 conditions.
 * 
 *  =================================================================
 *  
 *  Original FizzBuzz Problem:
 * 
 *  Write a program that prints the numbers from 1 to 100; 
 *  however, for multiples of 3 print "Fizz" instead of the number;
 *  for multiples of 5 print "Buzz";
 *  for multiples of both 3 and 5 print "FizzBuzz".
 * 
 *  =================================================================
 * 
 */

'use strict';

const testingUtils = require('../utilities/testing-utils.js');

const testCases = [
  // Case 1 (Original): [100] => Fizz: ${100/3}, Buzz: ${100/5}, FizzBuzz: ${100/15}
  [100, `Fizz: ${Math.floor(100/3)}, Buzz: ${Math.floor(100/5)}, FizzBuzz: ${Math.floor(100/15)}`],
  
  // Case 2: [1] => Fizz: ${1/3}, Buzz: ${1/5}, FizzBuzz: ${1/15}
  [1, `Fizz: ${Math.floor(1/3)}, Buzz: ${Math.floor(1/5)}, FizzBuzz: ${Math.floor(1/15)}`],

  // Case 3: [10] => Fizz: ${10/3}, Buzz: ${10/5}, FizzBuzz: ${10/15}
  [10, `Fizz: ${Math.floor(10/3)}, Buzz: ${Math.floor(10/5)}, FizzBuzz: ${Math.floor(10/15)}`],

  // Case 4: [9] => Fizz: ${9/3}, Buzz: ${9/5}, FizzBuzz: ${9/15}
  [9, `Fizz: ${Math.floor(9/3)}, Buzz: ${Math.floor(9/5)}, FizzBuzz: ${Math.floor(9/15)}`],

  // Case 5: [3] => Fizz: ${3/3}, Buzz: ${3/5}, FizzBuzz: ${3/15}
  [3, `Fizz: ${Math.floor(3/3)}, Buzz: ${Math.floor(3/5)}, FizzBuzz: ${Math.floor(3/15)}`],

  // Case 6: [5] => Fizz: ${5/3}, Buzz: ${5/5}, FizzBuzz: ${5/15}
  [5, `Fizz: ${Math.floor(5/3)}, Buzz: ${Math.floor(5/5)}, FizzBuzz: ${Math.floor(5/15)}`],

  // Case 7: [15] => Fizz: ${15/3}, Buzz: ${15/5}, FizzBuzz: $15/15}
  [15, `Fizz: ${Math.floor(15/3)}, Buzz: ${Math.floor(15/5)}, FizzBuzz: ${Math.floor(15/15)}`],

  // Case 8: [99999] => Fizz: ${99999/3}, Buzz: ${99999/5}, FizzBuzz: ${99999/15}
  [99999, `Fizz: ${Math.floor(99999/3)}, Buzz: ${Math.floor(99999/5)}, FizzBuzz: ${Math.floor(99999/15)}`]
];

const getNumberOfFizzBuzzWith = count => {
  let fizz, buzz, fizzbuzz;
  fizz = buzz = fizzbuzz = 0;
  
  for (let i = 1; i <= count; i++) {
    let f = i % 3 === 0, b = i % 5 === 0;
    if (f) fizz++; if (b) buzz++; if (f & b) fizzbuzz++;
  }
  return `Fizz: ${fizz}, Buzz: ${buzz}, FizzBuzz: ${fizzbuzz}`;
}

testingUtils.runTestsTo(getNumberOfFizzBuzzWith, testCases);
