// input: inputted text to be encoded or decoded
// shift: how much each letter is "shifted" by
// encode: whether we should encode or decode the msg
// encode set to true by default
const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // check given shift constraints
    if (shift < -25 || shift > 25 || !shift || shift === 0) {
      return false;
    }
    // sets decode mode by inverting the shift
    if (encode === false) {
      shift = shift * -1;
    }
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    let caesarShift = "";
    for (let i = 0; i < input.length; i++) {
      let fixedInput = input.toLowerCase();
      const inputChar = fixedInput[i];
      const inputIndex = alphabetArr.indexOf(inputChar);
      // if char != alphabet letter, don't shift it
      if (inputIndex === -1) {
        caesarShift += inputChar;
        continue; // move forward
      }
      // if shift goes left of "a" or right of "z"
      // wrap around to the front of the alphabet
      let encodedIndex = inputIndex + shift;
      if (encodedIndex < 0) encodedIndex += 26;
      if (encodedIndex > 25) encodedIndex %= 26;
      caesarShift += alphabetArr[encodedIndex];
    }
    return caesarShift;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
