function caesarCipher(str, shift) {
    if (typeof str !== 'string') return '';
    if (typeof shift !== 'number') return '';
  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = alphabet.toUpperCase();
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let isUpper = char === char.toUpperCase();
      let alphabetIndex = alphabet.indexOf(char.toLowerCase());
  
      if (alphabetIndex === -1) {
        result += char;
        continue;
      }
  
      let shiftedIndex = (alphabetIndex + shift) % alphabet.length;
      if (shiftedIndex < 0) shiftedIndex += alphabet.length;
  
      result += isUpper ? upperAlphabet[shiftedIndex] : alphabet[shiftedIndex];
    }
  
    return result;
  }

module.exports = { caesarCipher };