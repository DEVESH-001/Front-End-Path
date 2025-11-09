// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype

// every object has prototype
console.log(Object.getPrototypeOf({}).constructor);

function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, "Devesh");
console.log(Object.getPrototypeOf(student1).constructor);

// __proto__ points to prototype of constructor function
console.log(student1.__proto__ === Student.prototype); // true