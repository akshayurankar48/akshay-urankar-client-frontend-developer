import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

// Define the initial state for the search context
const initialState: {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
} = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

// Create the search context with its initial state
export const AppContext: React.Context<{
  isLoggedIn: boolean;

  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}> = createContext(initialState);

// Search context provider component
export const AppContextProvider: ({
  children,
}: {
  children: React.ReactNode;
}) => JSX.Element = ({ children }: { children: React.ReactNode }) => {
  // State variables for managing user login
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    localStorage.getItem('sessionToken') && setIsLoggedIn(true);
  }, []);

  // Provide the context value to the children components
  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
