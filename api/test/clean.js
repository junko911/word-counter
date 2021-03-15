const expect = require("chai").expect;
const { clean } = require("../clean");

describe("Clean", function () {
  it("removes non alphabetic chars", function () {
    const content = "2323 word !3493   word\nword 123)*(&";
    expect(clean(content)).to.equal("word word word");
  })
})
