// import { createContext } from "react";

// export const LoginContext = createContext({});
import { createContext } from "react";

// Define your initial context values and functions here
const initialContextValues = {
  isSignedIn: false,
  setSignedIn: () => {} // Placeholder function
};

// Create your context with initial values
export const LoginContext = createContext(initialContextValues);