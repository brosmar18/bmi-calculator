console.log('I am  currently 170 lbs, and I\'m 5.7ft tall. Let\'s calculate my BMI!');

// convert pounds to kg.

let pounds = 170;

let kg = pounds / 2.2046;

console.log(`My weight in kg is: ${kg.toFixed(1)}.`);

let heightFeet = 5.7;

let heightInches = heightFeet * 12;

console.log(`My height in inches is: ${heightInches.toFixed(1)}`);

let heightCm = heightInches * 2.54;

let heightMeters = heightCm * 0.01;

console.log(`My height in meters is: ${heightMeters.toFixed(1)}`);

let bmi = kg / heightMeters ** 2;

console.log(`My BMI is: ${bmi.toFixed(1)}`);
