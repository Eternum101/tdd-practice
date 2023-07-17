const { calculator } = require('../src/calculator');

describe('Calculator', () => {
    test('Adds Two Numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-2, 3)).toBe(1);
    });

    test('Subtracts Two Numbers', () => {
        expect(calculator.subtract(3, 2)).toBe(1);
        expect(calculator.subtract(-2, 3)).toBe(-5);
    });

    test('Divides Two Numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('Multiplies Two Numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
      });

    test('Throws an Error When Dividing by Zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Cannot Divide by Zero');
    });
})