const palindromes = function (string) {
    string = string.toLowerCase();
    let array = [];
    let array2 = [];
    let i=0;
    // make the string an array:
    array = string.split("");
    
    // filters all non alphanumerical characters with many ifs
    // if (array.includes(" ")) {
    //     string = string.split(" ").join("");
    // }
    // if (array.includes(".")) {
    //     string = string.split(".").join("");
    // }
    // if (array.includes(",")) {
    //     string = string.split(",").join("");
    // }
    // if (array.includes("!")) {
    //     string = string.split("!").join("");
    // }
    // if (array.includes("?")) {
    //     string = string.split("?").join("");
    // }

    //another way to do it is with include
    let alphanumerical="abcdesfhijklmnopqrstuvwxyz0123456789"
    alphanumerical = alphanumerical.split("");
    array.forEach(element => {
        if (alphanumerical.includes(element)) {
           array2[i]=element; 
           i++;
        }    
    });
    string = array2.join("");
    let reversed = string.split("").reverse().join("");
    if (string===reversed) {
        return true;
    }
    else {
        return false;
    }
};

palindromes("r acecar");
// Do not edit below this line
module.exports = palindromes;
