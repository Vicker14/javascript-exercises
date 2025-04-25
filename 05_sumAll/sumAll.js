const sumAll = function(intBegin, intEnd) {
    let sum = 0;

    if (intBegin < 0 || intEnd < 0)
        return "ERROR";
    if (!Number.isInteger(intBegin) || !Number.isInteger(intEnd))
        return "ERROR";

    if (intBegin <= intEnd) {
        for (let int = intBegin; int <= intEnd; int++) {
            sum += int;
        }
        return sum;
    } else {
        for (let int = intEnd; int <= intBegin; int++) {
            sum += int;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
