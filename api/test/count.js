const expect    = require("chai").expect;
const { count } = require("../count");

describe("Count", function () {
  it("counts words", function () {
    const content = "word word word";
    expect(count(content)).to.deep.equal({ word: 3 });
  })
})
