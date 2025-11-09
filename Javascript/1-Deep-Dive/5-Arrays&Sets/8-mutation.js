// mutation methods change the original array

const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

// Concat method does not mutate the original array, it returns a new array
const allMenuIdeas = lunchMenuIdeas.concat("Grilled Cheese Sandwich");
console.log("All Menu Ideas:", allMenuIdeas);
