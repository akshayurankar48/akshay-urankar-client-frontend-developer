import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('should have privacy policy', () => {
  render(<Footer />);
  const message = screen.queryByText(/Privacy Policy/i);
  expect(message).toBeVisible();
});
