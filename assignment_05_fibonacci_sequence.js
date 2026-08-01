// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// PART A - builds and prints the first n Fibonacci numbers using a loop.
function printFibonacci(n) {
  const sequence = [];
  let previous = 0;
  let current = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(previous);

    // Move both numbers one step forward in the sequence.
    const next = previous + current;
    previous = current;
    current = next;
  }

  console.log('Fibonacci sequence: ' + sequence.join(' '));
}

// PART B - generates terms until they reach the number, then compares.
function isFibonacci(number) {
  if (number < 0) {
    return false;
  }

  let previous = 0;
  let current = 1;

  while (previous < number) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return previous === number;
}

function main() {
  // PART A
  const terms = readlineSync.questionInt('How many terms? ');

  if (terms <= 0) {
    console.log('Error: The number of terms must be a positive number.');
    return;
  }

  printFibonacci(terms);

  // PART B
  console.log('');
  const number = readlineSync.questionInt('Enter a number to check: ');

  if (isFibonacci(number)) {
    console.log(number + ' is a Fibonacci number.');
  } else {
    console.log(number + ' is NOT a Fibonacci number.');
  }
}

main();


