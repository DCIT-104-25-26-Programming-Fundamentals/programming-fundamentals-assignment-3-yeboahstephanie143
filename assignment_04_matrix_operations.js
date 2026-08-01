// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Reads a whole matrix from the user, one row of numbers per line.
function readMatrix(rows, cols, label) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question('Enter row ' + (i + 1) + ' of ' + label + ' (' + cols + ' numbers): ');
    matrix.push(line.trim().split(' ').map(Number));
  }

  return matrix;
}

// Prints a matrix as a neat grid, every column the same width.
function displayMatrix(matrix, title) {
  console.log(title);

  for (let i = 0; i < matrix.length; i++) {
    let line = '';

    for (let j = 0; j < matrix[i].length; j++) {
      line = line + String(matrix[i][j]).padStart(5);
    }

    console.log(line);
  }
}

// PART A - turns the rows of a matrix into columns.
function transposeMatrix(matrix) {
  const result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const row = [];

    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }

    result.push(row);
  }

  return result;
}

// PART B - adds two matrices of the same size, element by element.
function addMatrices(matrixA, matrixB) {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    const row = [];

    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }

    result.push(row);
  }

  return result;
}

// PART C - multiplies an M x N matrix by an N x P matrix, giving an M x P result.
function multiplyMatrices(matrixA, matrixB) {
  const result = [];

  for (let i = 0; i < matrixA.length; i++) {
    const row = [];

    for (let j = 0; j < matrixB[0].length; j++) {
      // Each result cell is the sum of row i of A times column j of B.
      let total = 0;

      for (let k = 0; k < matrixB.length; k++) {
        total = total + matrixA[i][k] * matrixB[k][j];
      }

      row.push(total);
    }

    result.push(row);
  }

  return result;
}

function main() {
  // ---------------------------------------------------------------------------
  // PART A - Transpose a matrix
  // ---------------------------------------------------------------------------
  console.log('PART A - TRANSPOSE A MATRIX');
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const cols = readlineSync.questionInt('Enter number of columns: ');
  const matrix = readMatrix(rows, cols, 'the matrix');

  console.log('');
  displayMatrix(matrix, 'Original Matrix:');
  console.log('');
  displayMatrix(transposeMatrix(matrix), 'Transposed Matrix:');

  // ---------------------------------------------------------------------------
  // PART B - Add two matrices of the same size
  // ---------------------------------------------------------------------------
  console.log('');
  console.log('PART B - ADD TWO MATRICES');
  const addRows = readlineSync.questionInt('Enter number of rows: ');
  const addCols = readlineSync.questionInt('Enter number of columns: ');
  const firstMatrix = readMatrix(addRows, addCols, 'matrix A');
  const secondMatrix = readMatrix(addRows, addCols, 'matrix B');

  console.log('');
  displayMatrix(firstMatrix, 'Matrix A:');
  console.log('');
  displayMatrix(secondMatrix, 'Matrix B:');
  console.log('');
  displayMatrix(addMatrices(firstMatrix, secondMatrix), 'Sum (A + B):');

  // ---------------------------------------------------------------------------
  // PART C - Multiply an M x N matrix by an N x P matrix
  // ---------------------------------------------------------------------------
  console.log('');
  console.log('PART C - MULTIPLY TWO MATRICES');
  const m = readlineSync.questionInt('Enter number of rows in matrix A (M): ');
  const n = readlineSync.questionInt('Enter number of columns in A and rows in B (N): ');
  const p = readlineSync.questionInt('Enter number of columns in matrix B (P): ');
  const productA = readMatrix(m, n, 'matrix A');
  const productB = readMatrix(n, p, 'matrix B');

  console.log('');
  displayMatrix(productA, 'Matrix A:');
  console.log('');
  displayMatrix(productB, 'Matrix B:');
  console.log('');
  displayMatrix(multiplyMatrices(productA, productB), 'Product (A x B):');
}

main();

