function decode(string) {
  let decodedString = '';

  for (let letter in string) {
    if (string[letter] === '1') {
      decodedString += 'a';
    } else if (string[letter] === '2') {
      decodedString += 'e';
    } else if (string[letter] === '3') {
      decodedString += 'i';
    } else if (string[letter] === '4') {
      decodedString += 'o';
    } else if (string[letter] === '5') {
      decodedString += 'u';
    } else {
      decodedString += string[letter];
    }
  }
  return decodedString;
}

module.exports = decode;