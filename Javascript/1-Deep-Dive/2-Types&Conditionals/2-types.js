/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

let message = "some string";

// console.log(typeof window);

// 1) Explicit type conversion : String(), Number(), Boolean()
// 2) Implicit type conversion : happens during operations

console.log(Boolean(message));

console.log("1" * 2);

//truthy : non empty strings, non zero numbers, objects, arrays, true
//falsy : "", 0, null, undefined, NaN, false

// if (0) {
//   console.log("run");
// } else {
//   console.log("skipped");
// }

// 1) Avoid direct comparisons in conditionals

// const username = sher;

// if (!username) {
//   console.log('no user');
// }

// 2) Use triple equals === (strict equals operator)
if (null == undefined) {
  console.log("equals");
} else {
  console.log("not equals");
}
