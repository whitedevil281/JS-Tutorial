const array = [1, 2, 3];
console.log(...array); // Outputs: 1 2 3

// Using in an array literal to combine arrays:
const newArray = [0, ...array, 4];
console.log(newArray); // Outputs: [0, 1, 2, 3, 4]

// Copying an array:
const copyArray = [...array];
console.log(copyArray); // Outputs: [1, 2, 3]
