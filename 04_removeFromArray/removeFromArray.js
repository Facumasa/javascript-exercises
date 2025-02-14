const removeFromArray = function(array,...toRemove) {
    console.log(toRemove.length);
    let i = 0;
    let j = 0;
    let newArray = [];
    // the for to go through an array can also be done with 
    // the forEach() function 
    // This would write every item in an array
    // array.forEach((element) => console.log(element));
    // The => is the same as function and return, so the previous would be the same as
    // array.forEach(element) {
    // console.log(element)
    // }
    // 
    // for (let i = 0; i <= toRemove.length; i++) { 
    //     while (array.indexOf(toRemove[i])!==-1) {
    //         let where = array.indexOf(toRemove[i]);
    //         let newArray = array.splice(where,1);
    //     }
    // }
    // return array;
    // Another way of soving it------------------------------
    // using the forEach this could be
    // -----------------------------------------------------
    array.forEach(element => {
        if (!toRemove.includes(array[i])) {
            // if i put the ! at the beggining it means if this is false
            // so in this case it would be if the array toRemove does NOT
            // include array[i] then do...
            newArray[j] = array [i];
            j++;
            console.log(newArray);
        }
        i++; 
    });
    return newArray;
};

removeFromArray([1, 2, 3, 4, 3], 3);


// the rest parameter ...
// JavaScript also provides the rest parameter ..., which allows 
// a function to accept any number of arguments.

// Here's how we can use the rest parameter to handle multiple
//  optional arguments:

// function createGreeting(name, ...extras) {
//   let greeting = extras[0] || 'Hello';
//   let punctuation = extras[1] || '!';

//   return `${greeting}, ${name}${punctuation}`;
// }

// indexOf() method
// The indexOf() method returns the first index (position) of a 
// specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches 
// from left to right (from the given start postion to the end of 
//     the array).
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// Output: index = 2

// Splice method
// The splice method takes two arguments, the index of the element 
// you wish to remove and the index you with to remove up to, 
// then creates an array that stores the removed values and the
// original array is updated to not cointain the values taken (its length is updated)
// 
// const myArray = [1, 2, 3, 4, 5];
// const x = myArray.splice(1, 1);
// console.log(`myArray values: ${myArray}`);
// console.log(`variable x value: ${x}`);
// 
// output:
// myArray values: 1,3,4,5
// variable x value: 2





// Do not edit below this line
module.exports = removeFromArray;
