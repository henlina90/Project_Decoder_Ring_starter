const { polybius } = require("../src/polybius.js");
const expect = require("chai").expect;

describe("my tests for polybius() functions", () => {
  it("Should encode a message by translating each letter to numerical pairs", () => {
    const expected = "23513434112251";
    const actual = polybius("message");
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces when encoding", () => {
    const expected = "2345 23513434112251";
    const actual = polybius("my message");
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters when encoding", () => {
    const expected = "2345 23513434112251";
    const actual = polybius("My message");
    expect(actual).to.equal(expected);
  });
  it("Should translate both 'i' and 'j' to 42", () => {
    const expected = "42424242";
    const actual = polybius("jiji");
    expect(actual).to.equal(expected);
  });
  it("Should decode a message by translating each numerical pairs into a letter", () => {
    const expected = "message";
    const actual = polybius("23513434112251", false);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces when decoding", () => {
    const expected = "my message";
    const actual = polybius("2345 23513434112251", false);
    expect(actual).to.equal(expected);
  });
});
