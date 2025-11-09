// Challenge:
// Use reduce() to sum the weights of all the cars
// Stretch goal:
// Use reduce to sum the weights of only the electric cars

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },
];

const totalWeight = cars.reduce((acc, car) => {
  return acc + car.weight;
}, 0);
console.log("total_Weight:", totalWeight);

const electricCarWeight = cars
  .filter((cars) => cars.isElectric)
  .reduce((acc, cars) => acc + cars.weight, 0);

console.log("electricCarWeight:", electricCarWeight);

// OR

const totalWeights = cars.reduce((accumulator, car) => {
  if (car.isElectric) {
    return accumulator + car.weight;
  } else {
    return accumulator;
  }
}, 0);

console.log(totalWeights);
