const fibonacci = function(pos) {
    if (pos == 1 || pos == 2) return 1;
    if (pos == 0) return 0;
    if (pos < 0) return "OOPS";

    let previous = 1;
    let result = 1;
    
    for (let i = 2; i < pos; i++) {
        let aux = result;
        result += previous;
        previous = aux;
    }
    return result;

};

// Do not edit below this line
module.exports = fibonacci;
