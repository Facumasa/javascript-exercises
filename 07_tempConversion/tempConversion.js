// The Math.round() static method returns the value of a
// number rounded to the nearest integer.
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5


const convertToCelsius = function(tempInFa) {
  temp = (tempInFa - 32)*(5/9);
  temp = Math.round(temp*10)/10;
  return temp;
};

const convertToFahrenheit = function(tempInCel) {

  temp = tempInCel * (9/5) + 32;
  temp = Math.round(temp*10)/10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
