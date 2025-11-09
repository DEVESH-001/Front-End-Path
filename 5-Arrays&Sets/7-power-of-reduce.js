//const numbers = [1, 2, 3, 4, 5, 6];

// const double = numbers.reduce((acc, num) => {
//   acc.push(num * 2);
//   return acc;
// }, []);

// const doubleMap = numbers.map((num) => {
//   return num * 2;
// });

// console.log("double:", double);
// console.log(numbers);

//all number > 3
const numbers = [1, 2, 3, 4, 5, 6];

const greaterNumbers = numbers.reduce((acc, num) => {
  if (num > 3) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(greaterNumbers);

const greaterNumbersFilter = numbers.filter((num) => num > 3);
console.log(greaterNumbersFilter);

const greaterNumbersWithConcat = numbers.reduce(
  (acc, num) => (num > 3 ? acc.concat(num) : acc),
  []
);
console.log(greaterNumbersWithConcat);
