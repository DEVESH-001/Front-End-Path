// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   },
// };

// student1.addSubject("Math");
// console.log(student1.subjects);

//constructor fn : they represent data blueprints
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

Student.prototype.addSubject = function (subject) {
  this.subjects = [...this.subjects, subject];
};

const student1 = new Student(1, "Devesh");
const student2 = new Student(2, "YadavJi");

student1.addSubject(["CSE", "ECE"]);
student2.addSubject("Milk");
console.log(student1.subjects);
console.log(student2.subjects);
