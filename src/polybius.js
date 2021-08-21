const polybiusModule = (function () {
  const encoded = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  const decoded = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  // input: the inputted text to be encoded or decoded
  // encode: whether to encode or decode the message
  // encode is set to true by default
  // should maintain spaces
  function polybius(input, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (encode) {
      const encodedInput = [];
      // ignore capital letters
      const convertedInput = [...input.toLowerCase()];
      convertedInput.forEach((char) => {
        if (!alphabet.includes(char)) {
          encodedInput.push(char);
        }
        encodedInput.push(encoded[char]);
      });
      return encodedInput.join("");
    } else {
      // num of chars excluding spaces should be even
      if (input.split(" ").join("").length % 2) {
        return false;
      }
      const decodedInput = [];
      // each letter is represented by numerical pairs
      for (i = 0; i < input.length; i = i + 2) {
        let char = input[i];
        let nextChar = input[i + 1];
        if (char === " ") {
          decodedInput.push(" ");
          i = i - 1;
        } else {
          decodedInput.push(`${char}${nextChar}`);
        }
      }
      let decodedStr = decodedInput.map((char) => {
        if (char === " ") {
          return char;
        }
        return decoded[char];
      });
      return decodedStr.join("");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
