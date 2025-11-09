// Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

const finalMenuItems = ["Panner Tikka", "Chicken Tikka", "Veg Biryani", "Chicken Biryani"];

// Destructuring an array
const [starter, mainCourse, ...otherItems] = finalMenuItems;

console.log(finalMenuItems);

// O R : 

const [winner, ...losers] = finalMenuItems;

console.log({ winner, losers });