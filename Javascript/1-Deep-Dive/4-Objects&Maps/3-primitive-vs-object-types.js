// Primitive vs Object Types
// Primitive types: string, number, boolean, null, undefined, symbol, bigint

// Object types: objects, arrays, functions

//get and modify object data
const color = "black";
const hexColor = "#000";

const colors = {
  yellowColor: "#ff0",
  blackColor: "#020",
  whiteColor: "#fff",
  [color]: hexColor,
};

console.log(colors);

function getColor(key) {
  return colors[key];
}


//console.log(getColor("black"));

delete colors["yellowColor"];
console.log(colors);