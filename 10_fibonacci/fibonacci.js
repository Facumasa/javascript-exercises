const fibonacci = function(num) {
    num = Number(num);
    if (num>0) {
        let sum=1;
        let fibo = [0, 1];
        for (let index = 2; index <= num; index++) {
            fibo[index]=fibo[index-1]+fibo[index-2];
        }
        return fibo[num]
    }
    else {
        return "OOPS"
    }
};

console.log(fibonacci("6"));
// Do not edit below this line
module.exports = fibonacci;
