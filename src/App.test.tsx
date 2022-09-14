
import {render,screen} from '@testing-library/react';
import App from './app';



test('Render react interface', () => {
  render(<App />)
  const linkElement = screen.getByText(/Babundo is working now./i)
  expect(linkElement).toBeInTheDocument()
})
