// const - restrictions that make code more readable
// 1) must be initialized with value
// 2) can't be reassigned after declaration

// const age = 24;

// age = 33;
// console.log(age);


const originalPrice = 50;
const percentOff = 20;
const salePrice = originalPrice * (percentOff / 100);

// rest of our program (maybe 100s of lines)

console.log(salePrice);
