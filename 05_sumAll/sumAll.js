const sumAll = function(num1,num2) {
    let sum = 0;
    if (num1<0 || num2<0 || 
        !Number.isInteger(num1) || !Number.isInteger(num2) ||
        typeof num1 != "number" || typeof num2 != "number"
        )  {
        return "ERROR";
    }
    else {
        if (num1<=num2) {
            for (let index = num1; index <= num2; index++) {
                sum += index;
            }
        }
        else {
            for (let index = num1; index >= num2; index--) {
                sum += index;
            }

        }
    }
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
