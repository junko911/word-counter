const request = require("supertest")
const app = require("../app")
const axios = require("axios")

jest.mock("axios")

describe("Server", function () {
  it("counts words", () => {
    const resp = { data: "word word word" }
    axios.get.mockResolvedValue(resp)

    return request(app)
      .post("/", { url: "http://domain.com/big.txt" })
      .then((response) => {
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual({ word: 3 })
      })
  })
})
