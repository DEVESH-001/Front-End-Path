// Map : iterates through an array and modifies each element in the array based on the function provided

//Convert these Miles to KM!
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

const conversionFactorMilesToKm = 1.6;

const distanceWalkedKmArr = distanceWalkedMilesArr.map(
  (miles, index) =>
    `walked ${miles * conversionFactorMilesToKm} km on day ${index + 1}`
);

console.log(distanceWalkedKmArr);


// ------ -------- Challenge -------- ------ 
