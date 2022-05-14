import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    const authStateChange = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError("");
    });

    return authStateChange;
  }, []);

  const signupUser = async (name, email, password) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const updateUserProfile = await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log(updateUserProfile);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    signOut(auth);
  };
  const value = {
    user,
    loading,
    error,
    signupUser,
    loginUser,
    logoutUser,
    isNewUser,
    setIsNewUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
