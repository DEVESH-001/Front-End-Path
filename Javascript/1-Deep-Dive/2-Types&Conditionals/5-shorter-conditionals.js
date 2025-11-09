///const response = "Reed";

// let username;

//const username = response ? response : "guest";

// Using the logical OR operator

// const isEmailVerified = false;
// const username = response || "guest";
// console.log(username);

// using && : means if the first value is truthy, return the second value

// const isLoggedIn = true;
// const dashboardMessage = isLoggedIn && "Welcome to your dashboard!";
// console.log(dashboardMessage);

const response = "Reed";
const isEmailVerified = true;

const username = (isEmailVerified && response) || "guest";

console.log(username);

// && has higher precedence than || : so any condition with && will be evaluated first before || and ( ) has the highest precedence of all
