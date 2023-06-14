const removeFromArray = function(array,elementToRemove) {
    length = array.length;
    index = (array.indexOf(elementToRemove));
    array.splice(index,1);
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
