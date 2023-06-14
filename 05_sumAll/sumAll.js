const sumAll = function(a,b) {
    if (typeof a !="number" || typeof b != "number" || a < 0 || b < 0){
        return "ERROR";
    }
    let larger = Math.max(a,b);
    let smaller = Math.min(a,b);
    let loops = larger - smaller + 1;
    let sum = 0;
    for (let i=0; i < loops; i++){
        sum += smaller;
        smaller++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
