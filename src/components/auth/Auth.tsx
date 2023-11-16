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
      <img className="object-contain" src="/assets/images/login.webp" />
      <p className="text-xl text-light font-semibold text-center">
        Please login to view the capsules
      </p>

      <Dialog>
        <DialogTrigger>
          <Button className="bg-gray-900 text-light mt-5 w-24 font-bold text-lg">
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-dark text-light border-none h-auto">
          {/* DialogHeader component to contain the title and description */}
          <DialogHeader>
            {/* DialogTitle component displays the capsule serial and ID */}
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
            {/* DialogDescription component to contain various details */}
            <DialogDescription className="space-y-5 text-md font-medium text-gray-400">
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

              <Input
                placeholder="Email"
                className="bg-gray-900 text-light border-none focus:ring-offset-gray-500"
                value={email}
                onChange={(e) => {
                  setError('');
                  setEmail(e.target.value);
                }}
              />

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
              {error !== '' && (
                <p className="text-sm text-red-500 font-semibold text-start">
                  {error}
                </p>
              )}
              <div className="flex flex-row items-center space-x-3">
                <Button
                  type="submit"
                  onClick={showRegister ? handleSignUp : handleSignIn}
                  className="bg-gray-900 text-light "
                  disabled={loading}
                >
                  {loading ? '...' : showRegister ? 'Sign Up' : 'Sign In'}
                </Button>
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
