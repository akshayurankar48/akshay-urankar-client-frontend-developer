import { SearchBy } from '@/types';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

// Define the initial state for the search context
const initialState: {
  searchTerm: string;
  searchBy: SearchBy;
  setSearchBy: Dispatch<SetStateAction<SearchBy>>;
  handleSearch: (searchString: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
} = {
  searchTerm: '',
  searchBy: 'status', // Default search field
  setSearchBy: () => {}, // Placeholder function
  handleSearch: (searchString: string) => {
    console.log(searchString); // Default search handler
  },
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

// Create the search context with its initial state
export const AppContext: React.Context<{
  searchTerm: string;
  searchBy: SearchBy;
  isLoggedIn: boolean;
  handleSearch: (searchString: string) => void;
  setSearchBy: Dispatch<SetStateAction<SearchBy>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}> = createContext(initialState);

// Search context provider component
export const AppContextProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }: { children: React.ReactNode }) => {
  // State variables for managing search term and field
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(initialState.searchTerm);
  const [searchBy, setSearchBy] = useState<SearchBy>(initialState.searchBy);

  // Search handler function
  const handleSearch = (searchString: string): void => {
    setSearchTerm(searchString);
  };

  useEffect(() => {
    localStorage.getItem('sessionToken') && setIsLoggedIn(true);
  }, []);

  // Provide the context value to the children components
  return (
    <AppContext.Provider
      value={{
        searchTerm,
        searchBy,
        handleSearch,
        setSearchBy,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
