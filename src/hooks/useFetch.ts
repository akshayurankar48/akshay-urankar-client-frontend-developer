import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Capsule } from '@/types';

// Define the structure of the hook result
type UseCapsulesResult = {
  capsules: Capsule[];
  loading: boolean;
  error: string | null;
};

// The custom hook for fetching capsules
const useFetch = (): UseCapsulesResult => {
  // State variables for capsules, loading state, and error message
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch capsules from the SpaceX API
  const fetchCapsules = async (): Promise<void> => {
    try {
      setError(null); // Reset any previous errors
      setLoading(true); // Set loading state to true

      // Get the session token from wherever it is stored (e.g., localStorage, state, etc.)
      const sessionToken: string | null = localStorage.getItem('sessionToken');

      // Make the API request
      const response = await axios.get('http://localhost:8000/capsules', {
        headers: {
          'Content-Type': 'application/json', // Set content type if needed
          sessionToken: sessionToken,
        },
        withCredentials: true,
      });

      // Update state with the fetched capsules
      setCapsules(response.data);
    } catch (error) {
      // Handle errors, setting an appropriate error message
      setError(
        (error as AxiosError).message ||
          'An error occurred while fetching data. Please retry/refresh the page.'
      );
    } finally {
      // Set loading state to false after the request completes
      setLoading(false);
    }
  };

  // UseEffect hook to trigger the fetchCapsules function on component mount
  useEffect(() => {
    fetchCapsules();
  }, []); // The empty dependency array ensures the effect runs only on mount

  // Return the hook result
  return { capsules, loading, error };
};

export default useFetch;
