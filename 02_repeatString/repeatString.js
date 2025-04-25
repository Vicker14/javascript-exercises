const repeatString = function(text, times) {
    if (times < 0){
        return "ERROR"
    }
    let result = '';
    for (let index = 0; index < times; index++) {
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
