// input: the inputted txt to be encoded/decoded
// alphabet: the substitution alphabet
// encode: whether to encode/decode the text
// encode is set to true by default
const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // sub alphabet must exist & 26 chars long
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const subAlphabetArray = alphabet.toLowerCase().split("");
    // all chars in the alphabet param must be unique
    // return false !unique
    for (let character of subAlphabetArray) {
      let uniqueChar = subAlphabetArray.filter((chars) => chars === character);
      if (uniqueChar.length > 1) {
        return false;
      }
    }
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    // ignore capital letters
    const inputArray = input.toLowerCase().split("");
    let results = [];
    if (encode) {
      for (let i = 0; i < alphabet.length; i++) {
        results[alphabetArray[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < alphabet.length; i++) {
        results[alphabet[i]] = alphabetArray[i];
      }
    }
    // maintain space or encode char
    let output = inputArray.map((char) => {
      if (char === " ") {
        return " ";
      }
      return results[char];
    });
    return output.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
