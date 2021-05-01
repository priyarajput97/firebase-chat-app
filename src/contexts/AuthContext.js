import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { createUser, updateUserDetails } from '../firebase-functions/Users';

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

  const signup = async (email, password) => {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (res?.user?.uid) {
      createUser(res.user.uid, email);
    }
    return res;
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    auth.signOut();
  };

  const updateProfile = (displayName, photoURL, bio) => {
    var user = currentUser;
    let updatedFields;

    if (displayName && photoURL) {
      updatedFields = { displayName, photoURL };
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
        if (bio) {
          updatedFields['bio'] = bio;
        }
        updateUserDetails(user.uid, updatedFields);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
