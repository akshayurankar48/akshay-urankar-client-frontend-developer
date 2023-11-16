import { render, screen } from '@testing-library/react';
import Cards from './Cards';

it('should have No matching results', () => {
  render(<Cards />);
  const message = screen.queryByText(/No matching results/i);
  expect(message).toBeDefined();
});
