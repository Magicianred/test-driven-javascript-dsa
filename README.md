<h1 align="center"><b>Test-Driven JavaScript Data Structures & Algorithms</b></h1>
<br>
<h3 align="center">Data structures and algorithms implemented with test-driven JavaScript.</h3>
<br>
<hr>
<p>
<br>
Maybe writing all unit tests ahead of time to cover all possible edge cases for a specific function is quite impractical due to time always being against us; hopefully, the practice of test-driven development, with the time we can give it, can aid a mindset of considering the full breadth of scenarios for often open-ended problems and their potential solutions.
<br><br>
This is my own educational journey of understanding the how and why for JavaScript code written to solve common, and often ambiguous, problems. I hope you find my examples helpful as I start to add more.
</p>
<p align="right"> — @pjnalls</p>
<br>
<br>
<br>

## Running Tests for a JavaScript Data Structure or Algorithm
***

### Navigate to location of file of JavaScript data-structure or algorithm problem-solution

```bash
~/test-driven-javascript-dsa (main) $ cd algorithms
```
<br>

### Use the `node` command to run the JavaScript program to run test cases for solution.

```bash
~/test-driven-javascript-dsa/algorithms (main) $ node fizzbuzz.js
```
<br>
<h3>If all test pass, all output should display in <span style="color: #12bc79">green</span>.</h3>


```bash
$ node fizzbuzz.js

 ✓ Output is Fizz: 33, Buzz: 20, FizzBuzz: 6 as expected.
 ✓ Output is Fizz: 0, Buzz: 0, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 3, Buzz: 2, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 3, Buzz: 1, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 1, Buzz: 0, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 1, Buzz: 1, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 5, Buzz: 3, FizzBuzz: 1 as expected.
 ✓ Output is Fizz: 33333, Buzz: 19999, FizzBuzz: 6666 as expected.

 ✓ All tests for 'getNumberOfFizzBuzzWith' solution passed.

```
<br>
<h3>If any test fails, the output for the test case and the test suite result should display in <span style="color: #cd2822">red</span>.</h3>

```bash
$ node fizzbuzz.js

 ✓ Output is Fizz: 33, Buzz: 20, FizzBuzz: 6 as expected.
 ✓ Output is Fizz: 0, Buzz: 0, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 3, Buzz: 2, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 3, Buzz: 1, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 1, Buzz: 0, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 1, Buzz: 1, FizzBuzz: 0 as expected.
 ✓ Output is Fizz: 5, Buzz: 3, FizzBuzz: 1 as expected.
 ✖ Output is Fizz: 3, Buzz: 2, FizzBuzz: 0 but expected Fizz: 33333, Buzz: 19999, FizzBuzz: 6666.

 ✖ 1 of 7 tests for 'getNumberOfFizzBuzzWith' solution failed.

```
<br>
<br>
