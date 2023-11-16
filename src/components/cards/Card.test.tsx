import { render, screen } from '@testing-library/react';
import Card from './Card';

it('should have Launch Date', () => {
  render(
    <Card
      capsule={{
        capsule_serial: '',
        capsule_id: '',
        status: '',
        original_launch: '',
        original_launch_unix: 0,
        missions: [],
        landings: 0,
        type: '',
        details: '',
        reuse_count: 0,
      }}
    />
  );
  const message = screen.queryByText(/Launch Date/i);
  expect(message).toBeVisible();
});
