import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect } from 'vitest'
import { Provider } from './components/ui/provider'
import App from './App'

test('renders and increments counter', () => {
  render(
    <Provider>
      <App />
    </Provider>
  )

  const button = screen.getByRole('button', { name: /count is 0/i })
  expect(button).toBeInTheDocument()

  fireEvent.click(button)
  expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
})
