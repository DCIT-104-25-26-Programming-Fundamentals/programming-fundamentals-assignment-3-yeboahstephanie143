// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Every student is stored as an object { name, id, scores } inside this array.
let students = [];

function showMenu() {
  console.log('');
  console.log('================================');
  console.log('   STUDENT RECORD SYSTEM MENU');
  console.log('================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}

// Works out the average of a list of scores using a loop.
function calculateAverage(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }

  return total / scores.length;
}

// Looks through the array for a student with the given ID.
// Returns null when no student has that ID.
function findStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }

  return null;
}

// FEATURE 1 - collect a student's details and save them.
function addStudent() {
  const name = readlineSync.question('Student name: ');
  const id = readlineSync.questionInt('Student ID: ');
  const howMany = readlineSync.questionInt('How many scores? ');

  if (howMany <= 0) {
    console.log('Error: A student must have at least one score.');
    return;
  }

  const scores = [];

  for (let i = 0; i < howMany; i++) {
    scores.push(readlineSync.questionFloat('Enter score ' + (i + 1) + ': '));
  }

  students.push({ name: name, id: id, scores: scores });
  console.log('Student "' + name + '" added successfully.');
}

// FEATURE 2 - print every student in a formatted table.
function displayAllStudents() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  console.log('');
  console.log('Name'.padEnd(20) + 'ID'.padEnd(12) + 'Scores'.padEnd(20) + 'Average');
  console.log('-----------------------------------------------------------------');

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.scores).toFixed(2);

    console.log(
      student.name.padEnd(20) +
      String(student.id).padEnd(12) +
      student.scores.join(', ').padEnd(20) +
      average
    );
  }
}

// FEATURE 3 - show the average score of one student, found by ID.
function showStudentAverage() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  const id = readlineSync.questionInt('Enter student ID: ');
  const student = findStudentById(id);

  if (student === null) {
    console.log('Error: No student found with ID ' + id + '.');
    return;
  }

  console.log(student.name + "'s average score: " + calculateAverage(student.scores).toFixed(2));
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    if (choice === 1) {
      addStudent();
    } else if (choice === 2) {
      displayAllStudents();
    } else if (choice === 3) {
      showStudentAverage();
    } else if (choice === 4) {
      console.log('Goodbye!');
      running = false;
    } else {
      console.log('Error: Invalid choice. Please enter a number from 1 to 4.');
    }
  }
}

main();


