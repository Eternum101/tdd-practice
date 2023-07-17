const { analyzeArray } = require('../src/analyzeArray');

describe('Analyze Array', () => {
    test('Returns an Object With the Correct Properties', () => {
        const result = analyzeArray([1, 2, 3, 4]);
        expect(result).toEqual({ average: 2.5, min: 1, max: 4, length: 4 });
    });

    test('Returns an Empty Object if the Input is Not an Array', () => {
        expect(analyzeArray('Not an Array')).toEqual({});
    });

    test('Returns an Empty Object if the Input Contains Non-Numeric Elements', () => {
        expect(analyzeArray([1, 2, 'Not a Number'])).toEqual({});
    });
})