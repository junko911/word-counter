import { render } from "@testing-library/react"
import ResultModal from "./ResultModal"

test("renders ResultModal", () => {
  const result = { cat: 1, dog: 2 }
  const { getByText } = render(<ResultModal modal={true} result={result} />)
  expect(getByText("cat")).toBeInTheDocument()
  expect(getByText("dog")).toBeInTheDocument()
})
