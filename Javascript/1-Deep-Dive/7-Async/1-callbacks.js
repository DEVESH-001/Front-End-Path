// #TODO
//CallBack :

// callbacks -> promises

// pending
// fulfilled
// rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
});
console.log(promise);
