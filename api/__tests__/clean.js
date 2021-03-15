const { clean } = require("../clean")

describe("Clean", () => {
  it("removes non alphabetic chars", () => {
    const content = "2323 word !3493   word\nword 123)*(&"
    expect(clean(content)).toEqual("word word word")
  })
})
