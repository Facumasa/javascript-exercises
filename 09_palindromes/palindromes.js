const palindromes = function (string) {
    string = string.toLowerCase();
    let array = [];
    // make the string an array:
    array = string.split("");
    // if there are any spaces in the array:
    if (array.includes(" ")) {
        string = string.split(" ").join("");
    }
    if (array.includes(".")) {
        string = string.split(".").join("");
    }
    if (array.includes(",")) {
        string = string.split(",").join("");
    }
    if (array.includes("!")) {
        string = string.split("!").join("");
    }
    if (array.includes("?")) {
        string = string.split("?").join("");
    }
    // console.log("splitted string ",string);
    // console.log("joined string ",string);
    let reversed = string.split("").reverse().join("");
    if (string===reversed) {
        return true;
    }
    else {
        return false;
    }
};

palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
