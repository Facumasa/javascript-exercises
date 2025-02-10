const add = function(num1,num2) {
  let sum=num1+num2;
  return sum;
};

const subtract = function(num1,num2) {
	let sub=num1-num2;
  return sub;
};

const sum = function(array) {
	let sum=0;
  array.forEach(element => {
    sum += element;
  })
  return sum;
};

const multiply = function(array) {
	let res=1;
  array.forEach(element => {
    res = res*element;
  })
  return res;
};



const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num1) {
	let res = 1;
  for (let index = 1; index <= num1; index++) {
    res = res * index;
  }
  return res;
};

console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
