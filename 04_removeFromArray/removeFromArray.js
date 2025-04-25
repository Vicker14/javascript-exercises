const removeFromArray = function(array, ...argument) {
    let finalArray = array;
    for (const arg of argument) {
        while (finalArray.includes(arg)) {
            argumentIndex = array.indexOf(arg);
            finalArray.splice(argumentIndex, 1);    
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
