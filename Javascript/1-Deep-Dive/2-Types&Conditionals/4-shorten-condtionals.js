// using ternary operator to shorten conditionals
//syntax: condition ? exprIfTrue : exprIfFalse

// const isAuthenticated = false;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
// //   console.log("Please log in!");
//   cartItemCount = 0;
// }

//const cartItemCount = isAuthenticated ? 1 : 0;
//console.log(cartItemCount);

const age = 12;
// let greeting;
// if (age < 10) {
//   greeting = "Hi there! ur chotu bacha";
// } else {
//   greeting = "Thats an interesting age";
// }

// console.log(greeting);

// const greeting =
//   age < 10 ? "Hi there! ur chotu bacha" : "Thats an interesting age";
// console.log(greeting);

//adding else if in ternary operator
// const age = 12;

const Multiplegreeting =
  age < 10
    ? "Hi there! ur chotu bacha"
    : age > 18
    ? "Greetings"
    : age > 10
    ? "whats up"
    : " Thats an interesting age";
console.log(Multiplegreeting);
