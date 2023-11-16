import { AppContext } from '@/store/AppContext';
import axios from 'axios';
import { useContext, useState } from 'react';

// Define the shape of the useAuth hook return value
interface AuthHook {
  handleSignIn: () => Promise<void>;
  handleSignUp: () => Promise<void>;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  showRegister: boolean;
  username: string;
  email: string;
  password: string;
  loading: boolean;
  error: string;
}

const useAuth = (): AuthHook => {
  const { setIsLoggedIn } = useContext(AppContext);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Handle user sign-in
  const handleSignIn = async (): Promise<void> => {
    if (!email || !password) {
      setError('Please fill all the fields');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Logged In successfully');
        setIsLoggedIn(true);
        localStorage.setItem(
          'sessionToken',
          response.data.authentication.sessionToken
        );
      }
    } catch (error) {
      setError('Error Signing In. Please try again');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle user sign-up
  const handleSignUp = async (): Promise<void> => {
    if (!username || !password || !email) {
      setError('Please fill all the fields');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/auth/register', {
        email,
        username,
        password,
      });

      if (response.status === 200) {
        alert('User registered successfully');
      }
    } catch (error) {
      setError('Error Signing Up. Please try again');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Return the functions and state variables
  return {
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
  };
};

export default useAuth;
