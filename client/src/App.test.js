import { render } from '@testing-library/react'
import App from './App'

test('renders App', () => {
  const { getByText } = render(<App />)
  expect(getByText('Word Counter')).toBeInTheDocument()
  expect(getByText('Enter URL')).toBeInTheDocument()
})
