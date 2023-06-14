const sumAll = function(a,b) {
    let loops = b-a + 1;
    let sum = 0;
    for (let i=0; i < loops; i++){
        sum += a;
        a++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
