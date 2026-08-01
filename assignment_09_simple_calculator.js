// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Each operation has its own function.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Returns null instead of crashing when the second number is zero.
function divide(a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
}

// The remainder also has no meaning when dividing by zero.
function modulus(a, b) {
  if (b === 0) {
    return null;
  }

  return a % b;
}

function power(a, b) {
  return a ** b;
}

function showMenu() {
  console.log('');
  console.log('============================');
  console.log('     SIMPLE CALCULATOR');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt('Select an operation (1-7): ');

    if (choice === 7) {
      console.log('Goodbye!');
      running = false;
      continue;
    }

    if (choice < 1 || choice > 6) {
      console.log('Error: Invalid choice. Please enter a number from 1 to 7.');
      continue;
    }

    const first = readlineSync.questionFloat('Enter first number : ');
    const second = readlineSync.questionFloat('Enter second number: ');

    let symbol = '';
    let result = 0;

    if (choice === 1) {
      symbol = '+';
      result = add(first, second);
    } else if (choice === 2) {
      symbol = '-';
      result = subtract(first, second);
    } else if (choice === 3) {
      symbol = '*';
      result = multiply(first, second);
    } else if (choice === 4) {
      symbol = '/';
      result = divide(first, second);
    } else if (choice === 5) {
      symbol = '%';
      result = modulus(first, second);
    } else {
      symbol = '**';
      result = power(first, second);
    }

    // divide() and modulus() return null when the second number is zero.
    if (result === null) {
      console.log('Error: Cannot divide by zero.');
    } else {
      console.log('Result: ' + first + ' ' + symbol + ' ' + second + ' = ' + result.toFixed(2));
    }
  }
}

main();


