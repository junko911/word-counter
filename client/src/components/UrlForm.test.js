import { render, fireEvent } from '@testing-library/react'
import UrlForm from "./UrlForm"

test('calls onClick prop when clicked', () => {
  const submitUrl = jest.fn()
  const { getByText } = render(<UrlForm submitUrl={submitUrl} />)
  fireEvent.click(getByText(/Submit/i))
  expect(submitUrl).toHaveBeenCalledTimes(1)
})
