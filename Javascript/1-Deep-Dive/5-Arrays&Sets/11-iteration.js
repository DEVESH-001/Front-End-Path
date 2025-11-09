// const obj = { one: 1, two: 2, three: 3, four: 4 };

// for (const key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

//convert obj to array data, there are 3 methods:
//Object.keys(), Object.values(), Object.entries()

// const user = {
//   name: "John",
//   age: 30,
// };

//console.log(Object.entries(user)); // enteries gives array of arrays

// const ageExists = Object.keys(user).includes("age"); //Object.keys gives array of keys only
// console.log(ageExists);
// console.log(Object.keys(user));

// const values = Object.keys(user).map((key) => user[key] + "!");
// console.log(values);

// console.log(Object.values(user));

// const monthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95,
// };

// const monthlyTotal = Object.values(monthlyExpenses).reduce((acc,expense) => {
//     return acc+expense
// }, 0); //Object.values gives array of values only

// console.log(monthlyTotal);

const users = {
  2345234: {
    name: "John",
    age: 29,
  },
  8798129: {
    name: "Jane",
    age: 42,
  },
  1092384: {
    name: "Fred",
    age: 17,
  },
};

console.log(
  Object.entries(users).reduce((acc, [id, user]) => {
    if (user.age > 18) {
      acc.push({ ...user, id });
    }
    return acc;
  }, [])
);
