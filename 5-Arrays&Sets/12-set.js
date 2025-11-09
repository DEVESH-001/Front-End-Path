const customerDishes = [
  "Chicken Wings",
  "Fish Sandwich",
  "Paneer Tikka",
  "Grilled Cheese",
  "Blue Cheese Salad",
  "Chicken Wings",
  "Reuben Sandwich",
  "Grilled Cheese",
  "Fish Sandwich",
  "Chicken Pot Pie",
  "Fish Sandwich",
  "Paneer Tikka",
];

// set is a collection of unique values, it removes duplicates

const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes);

// const numbers = new Set([[1], [2], [3]]);
// for (const num of numbers) {
//   console.log(num);
// }
