import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useAuth from '@/hooks/useAuth';

const Auth = () => {
  // Destructure functions and state variables from useAuth hook
  const {
    handleSignUp,
    handleSignIn,
    setShowRegister,
    setUsername,
    setEmail,
    setPassword,
    setError,
    showRegister,
    username,
    email,
    password,
    loading,
    error,
  } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center my-10">
      {/* Image for authentication section */}
      <img className="object-contain" src="/assets/images/login.webp" />
      {/* Text prompting user to login */}
      <p className="text-xl text-light font-semibold text-center">
        Please login to view the capsules
      </p>

      {/* Authentication Dialog */}
      <Dialog>
        {/* Dialog Trigger (Login Button) */}
        <DialogTrigger>
          <Button className="bg-gray-900 text-light mt-5 w-24 font-bold text-lg">
            Login
          </Button>
        </DialogTrigger>
        {/* Dialog Content */}
        <DialogContent className="bg-dark text-light border-none h-auto">
          {/* Dialog Header containing title and description */}
          <DialogHeader>
            {/* Dialog Title displaying Spacex Logo and Sign In/Sign Up */}
            <DialogTitle className="capitalize mb-5 flex items-center justify-between max-w-sm">
              <img
                src="/assets/spacex.svg"
                alt="Spacex Logo"
                className="w-28"
              />
              <span className="uppercase">
                {showRegister ? 'Sign Up' : 'Sign In'}
              </span>
            </DialogTitle>
            {/* Dialog Description containing input fields, buttons, and error message */}
            <DialogDescription className="space-y-5 text-md font-medium text-gray-400">
              {/* Display username input field only for Sign Up */}
              {showRegister && (
                <Input
                  placeholder="Username"
                  className="bg-gray-900 text-light border-none focus:ring-offset-gray-500"
                  value={username}
                  onChange={(e) => {
                    setError('');
                    setUsername(e.target.value);
                  }}
                />
              )}

              {/* Email input field */}
              <Input
                placeholder="Email"
                className="bg-gray-900 text-light border-none focus:ring-offset-gray-500"
                value={email}
                onChange={(e) => {
                  setError('');
                  setEmail(e.target.value);
                }}
              />

              {/* Password input field */}
              <Input
                placeholder="Password"
                className="bg-gray-900 text-light border-none focus:ring-offset-gray-500"
                value={password}
                type={showRegister ? 'text' : 'password'}
                onChange={(e) => {
                  setError('');
                  setPassword(e.target.value);
                }}
              />
              {/* Display error message if present */}
              {error !== '' && (
                <p className="text-sm text-red-500 font-semibold text-start">
                  {error}
                </p>
              )}

              {/* Buttons for Sign In/Sign Up and switch between them */}
              <div className="flex flex-row items-center space-x-3">
                <Button
                  type="submit"
                  onClick={showRegister ? handleSignUp : handleSignIn}
                  className="bg-gray-900 text-light "
                  disabled={loading}
                >
                  {loading ? '...' : showRegister ? 'Sign Up' : 'Sign In'}
                </Button>
                {/* Switch between Sign In and Sign Up */}
                <div>
                  {showRegister ? (
                    <p>
                      Already a User? &nbsp;
                      <span
                        onClick={() => setShowRegister(false)}
                        className="underline text-light cursor-pointer"
                      >
                        Sign In
                      </span>
                    </p>
                  ) : (
                    <p>
                      Not a User? &nbsp;
                      <span
                        onClick={() => setShowRegister(true)}
                        className="underline text-light cursor-pointer"
                      >
                        Sign Up
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Auth;
