const reverseString = function(string) {
    let length = string.length;
    let position = length
    let newStr = ""
    for ( i = 0 ; i < length ; i++){
        newStr = newStr + string.charAt(position-1);
        position--;
    }
    return newStr
};

// Do not edit below this line
module.exports = reverseString;
