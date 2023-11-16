import { act, renderHook } from '@testing-library/react';
import useAuth from './useAuth';

describe('useAuth', () => {
  it('should handle sign in', () => {
    const { result } = renderHook(() => useAuth());
    act(() => {
      result.current.handleSignIn();
    });
    expect(result.current.email).toBe(<string>'');
  });
});
