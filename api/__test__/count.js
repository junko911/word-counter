const { count } = require("../count")

describe("Count", () => {
  it("counts words", () => {
    const content = "word word word"
    expect(count(content)).toEqual({ word: 3 })
  })
})
