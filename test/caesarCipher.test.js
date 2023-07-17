const { caesarCipher } = require('../src/caesarCipher');

describe('Caesar Cipher', () => {
    test('Shifts Characters by the Specified Shift Factor', () => {
        expect(caesarCipher('hello', 3)).toBe('khoor');
        expect(caesarCipher('world', -3)).toBe('tloia');
    });

    test('Wraps From Z to A', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('abc', -3)).toBe('xyz');
    });

    test('Keeps the Same Case', () => {
        expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
        expect(caesarCipher('Hello World', -3)).toBe('Ebiil Tloia');
    });

    test('Does Not Shift Punctuation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('Hello, World!', -3)).toBe('Ebiil, Tloia!');
    });
})