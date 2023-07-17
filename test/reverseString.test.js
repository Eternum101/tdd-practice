const { reverseString } = require('../src/reverseString'); 

describe('Reverse String', () => {
    test('Reverses the Order of Characters in a String', () => {
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('world')).toBe('dlrow');
    });

    test('Returns an Empty String if the Input is Not a String', () => {
        expect(reverseString(123)).toBe('');
        expect(reverseString(null)).toBe('');
        expect(reverseString(undefined)).toBe('');
    })
})