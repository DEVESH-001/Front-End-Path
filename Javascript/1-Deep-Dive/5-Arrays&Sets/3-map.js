const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

const newTemps = temperatures.map(
  (temp) => (temp.degrees > 70 ? { ...temp, isHigh: true } : temp) // adding new property based on condition
);

console.log(newTemps);

//.forEach() does not create new array, it just iterates
newTemps.forEach((temper) => {
  if (temper.isHigh) {
    console.log(`${temper.degrees} was a record high last week`);
  }
});
