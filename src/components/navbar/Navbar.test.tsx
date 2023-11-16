import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

it('should have logout', () => {
  render(<Navbar isLoggedIn={false} />);
  const message = screen.queryByText(/Logout/i);
  expect(message).toBeDefined();
});
