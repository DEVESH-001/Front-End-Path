function echo(input) {
  console.log(input);
}
echo("javascript deep dive");

const user1 = "Brad";
const user2 = "Pitt";

function sendUserMessage(user, text) {
  console.log(`User ${user} says: ${text}`);
}

sendUserMessage(user1, "Hey there");
sendUserMessage(user2, "Hey there");

// console.log('hello world');
// console.log('hello world');

// input -> performs an action
// input -> returns some data
function echo(input, greeting) {
  return `${greeting} ${input}`;
}

const result = echo(42, "Hi");
// console.log(result);
