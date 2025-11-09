const todos = [];
const todo1 = {
  text: "Hello sher ji",
  complete: false,
};
const todo2 = {
  text: "Hello Devesh",
  complete: false,
};

todos.push(todo1, todo2); // adds items at the end
todos.pop(); // removes last item

console.log(todos);
