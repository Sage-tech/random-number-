
// Collect input from a user
const inputLow = prompt('Please provide your lowest number');
const inputHigh = prompt('Please provide your highestnumber')

// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);


if(lowNumber && highNumber){
// Use Math.random() and the user's number to generate a random number

const randomNumber = math.floor(Math.random() * (highNumber - lowNumber + 1)) + lowNumber;
  


// Create a message displaying the random number

console.log(`${randomNumber}`is a random number between ${lowNumber} and ${highNUmber}.`);

} else{
 console.log('You neeed to provide a number . Try again!')
}