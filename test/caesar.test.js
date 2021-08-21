const { caesar } = require("../src/caesar.js");
const expect = require("chai").expect;

describe("my tests for caesar() function", () => {
  it("Should properly encode the message with given shift", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("Should maintain spaces when encoding", () => {
    const actual = caesar("a !", 8);
    const expected = " ";
    expect(actual.charAt(1)).to.equal(expected);
  });

  it("Should maintain special characters", () => {
    const actual = caesar("a !", 8);
    const expected = "!";
    expect(actual.charAt(2)).to.equal(expected);
  });

  it("Should wrap around if shifted letter goes off the alphabet", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it("Should switch the shift direction if decoding", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });

  it("Should return false if there is shift not present", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!");
    expect(actual).to.be.false;
  });

  it("Should return false if the shift is greater than 25", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 75);
    expect(actual).to.be.false;
  });
  it("Should return false if the shift is less than -25", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", -63);
    expect(actual).to.be.false;
  });

  it("Should return false if the shift is 0", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 0);
    expect(actual).to.be.false;
  });

  it("Should ignore capital letters", () => {
    const actual = caesar("XYZ", 1, false);
    const expected = "wxy";
    expect(actual).to.equal(expected);
  });
});
