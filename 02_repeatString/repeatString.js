const repeatString = function(str,times) {
    if (times < 0) {
        return "ERROR";
    }
    let string = ""
    for (let i = 0; i < times ; i++){
        string = string + str
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
