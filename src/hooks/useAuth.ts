import { AppContext } from '@/store/AppContext';
import axios from 'axios';
import { useContext, useState } from 'react';

const useAuth = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = process.env.BACKEND_URL;

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please fill all the fields');
    }

    try {
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
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

  const handleSignUp = async () => {
    if (!username || !password || !email) {
      setError('Please fill all the fields');
    }

    try {
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/auth/register`, {
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

  return {
    handleSignUp,
    handleSignIn,
    setShowRegister,
    setUsername,
    setEmail,
    setPassword,
    showRegister,
    username,
    email,
    password,
    loading,
    error,
  };
};

export default useAuth;
