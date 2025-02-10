const reverseString = function(string) {
    let length=string.length;
    let word="";
    for (let index = length-1; index >= 0; index--) {
        word+=string[index];
    }
    return word;
};


// Another way of doing it is with arrray functions, as done by the solution:
// const reverseString = function (string) {
//     return string.split("").reverse().join("");
//   };


// Do not edit below this line
module.exports = reverseString;
