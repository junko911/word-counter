const expect    = require("chai").expect;
const { count } = require("../count");

describe("Word Counter", function() {
  describe("Count alphabetical contents", function() {
    it("counts the basic words", function() {
      const example = count("Tell the audience what you're going to say. Say it. Then tell them what you've said.")

      expect(example).to.equal(
        {
          "tell": 2,
          "the": 1,
          "audience":1,
          "what": 2,
          "you're": 1,
          "going": 1,
          "to": 1,
          "say": 2,
          "it": 1,
          "then": 1,
          "them": 1,
          "you've": 1,
          "said": 1
        }
      )
    })
  })
})
