import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// As the actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("onAuthStateChangedListener ", user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
