const removeFromArray = function(array,...elementsToRemove) {
    for (const element in elementsToRemove){
    length = array.length;
    index = (array.indexOf(elementsToRemove[element]));
    if (index == -1){
        continue;
    }
    array.splice(index,1);
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
