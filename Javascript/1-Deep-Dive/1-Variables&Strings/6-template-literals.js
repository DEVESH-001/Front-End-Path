// Template literals allow for multi-line strings and string interpolation(put in the value of our variables inside a string) using backticks (` `) instead of single or double quotes.

// Example of a multi-line string using template literals
const multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);

console.log("\n");


// Example of string interpolation using template literals
const name = 'Alice';
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
