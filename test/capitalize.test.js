const { capitalize } = require('../src/capitalize');

describe('Capitalize', () => {
    test('Capitalizes the First Character of a String', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('world')).toBe('World');
    });

    test('Returns an Empty String if the Input is Not a String', () => {
        expect(capitalize(123)).toBe('');
        expect(capitalize(null)).toBe('');
        expect(capitalize(undefined)).toBe('');
    });

    test('Does Not Modify the Rest of the String', () => {
        expect(capitalize('hELLO')).toBe('HELLO');
        expect(capitalize('WorlD')).toBe('WorlD');
    })
})