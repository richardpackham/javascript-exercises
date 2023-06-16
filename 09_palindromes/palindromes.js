const palindromes = function (string) {
    let newString = "";
    // string = string.replace(" ", ""); 
    for (let i = 0; i < string.length; i++){
        if ((string[i].toLowerCase() != string[i].toUpperCase()) || (/^\d$/.test(string[i]))){
            newString = newString + string[i].toLowerCase()
        }
    }
    let length = newString.length
    for (let i = 0; i <length; i++){
        if (newString[i] != newString[length-i-1]){
            return false
        }
    }   
    return true
};

// Do not edit below this line
module.exports = palindromes;
