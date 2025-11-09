const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword",
};

const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
// console.log(Object.assign({}, user, newUser, { verified: false }));
