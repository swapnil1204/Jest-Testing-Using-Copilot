import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Framework : Jest Unit Testing using Copilot/i);
  expect(linkElement).toBeInTheDocument();
});
