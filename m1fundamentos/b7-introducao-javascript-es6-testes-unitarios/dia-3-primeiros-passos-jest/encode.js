function encode(string) {
  let encodedString = '';

  for (let letter in string) {
    if (string[letter] === 'a') {
      encodedString += '1';
    } else if (string[letter] === 'e') {
      encodedString += '2';
    } else if (string[letter] === 'i') {
      encodedString += '3';
    } else if (string[letter] === 'o') {
      encodedString += '4';
    } else if (string[letter] === 'u') {
      encodedString += '5';
    } else {
      encodedString += string[letter]
    }
  };
  return encodedString;
}

module.exports = encode;