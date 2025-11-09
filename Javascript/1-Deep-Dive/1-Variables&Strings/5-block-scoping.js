// var price = 20;
// var isSale = true;

// //variable shadowing : means inner variable with same name as outer variable
// if (isSale) {
//   var price = 20 - 2;
//   console.log("sale price", price);
// }

// console.log("regular price", price);



var price = 20;
var isSale = true;

//variable shadowing : means inner variable with same name as outer variable
if (isSale) {
  let price = 20 - 2;
  console.log("sale price", price);
}

console.log("regular price", price);
