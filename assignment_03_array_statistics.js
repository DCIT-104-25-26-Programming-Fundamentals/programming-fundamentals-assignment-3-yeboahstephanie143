// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Adds every number in the array together using a loop.
function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}

// The average is the sum divided by how many numbers there are.
function calculateAverage(numbers) {
  return calculateSum(numbers) / numbers.length;
}

// Finds the largest value by comparing each number with the biggest one so far.
function findMaximum(numbers) {
  let maximum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }

  return maximum;
}

// Finds the smallest value by comparing each number with the smallest one so far.
function findMinimum(numbers) {
  let minimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }

  return minimum;
}

function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  // N must be a positive integer, otherwise there is nothing to calculate.
  if (count <= 0) {
    console.log('Error: How many numbers must be a positive number.');
    return;
  }

  const numbers = [];

  for (let i = 0; i < count; i++) {
    numbers.push(readlineSync.questionFloat('Enter number ' + (i + 1) + ': '));
  }

  // Round the average to at most 2 decimal places so it prints neatly.
  const average = Math.round(calculateAverage(numbers) * 100) / 100;

  console.log('');
  console.log('Results:');
  console.log('Sum:     ' + calculateSum(numbers));
  console.log('Average: ' + average);
  console.log('Maximum: ' + findMaximum(numbers));
  console.log('Minimum: ' + findMinimum(numbers));
}

main();


