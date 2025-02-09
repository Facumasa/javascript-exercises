const repeatString = function(string,num) {
    let word="";
    if (num>=0) {   
        for (let i = 0; i < num; i++) {
            word+=string;
        }
        return word;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
