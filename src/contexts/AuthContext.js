import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const updateProfile = (displayName, photoURL) => {
    var user = currentUser;
    let updatedFields;

    if (displayName && photoURL) {
      updatedFields = {
        displayName,
        //to be changed later
        photoURL:
          'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      };
    } else if (displayName) {
      updatedFields = { displayName };
    } else if (photoURL) {
      updatedFields = { photoURL };
    } else {
      return;
    }

    user
      .updateProfile(updatedFields)
      .then(function () {
        console.log('done');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const value = {
    currentUser,
    signup,
    signin,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
