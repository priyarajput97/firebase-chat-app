import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const value = {
    currentUser,
    signup,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
