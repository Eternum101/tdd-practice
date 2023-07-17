const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        if (b === 0) throw new Error('Cannot Divide by Zero'); 
        return a / b; 
    },
    multiply: function (a, b) {
        return a * b;
    },
}; 

module.exports = { calculator }; 