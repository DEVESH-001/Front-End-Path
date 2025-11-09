const temperatures = [72, 75, 79, 80, 83, 85, 88];
console.log(temperatures.includes(30));
//include only works for arrays

const temperatures2 = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

//some works for arrays of objects too, it checks for condition
const result = temperatures2.some((temp) => temp.isRecordTemp === true);
console.log(result);
