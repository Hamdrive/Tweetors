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

  const signupUser = async (name, email, password) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const updateUserProfile = await updateProfile(auth.currentUser, {
        displayName: name,
      });
      localStorage.setItem("userID", JSON.stringify(res.user.uid));
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
    localStorage.removeItem("userID");
    signOut(auth);
  };

  useEffect(() => {
    const authStateChange = onAuthStateChanged(auth, (res) => {
      console.log(res);
      if (res) {
        setUser(res);
        localStorage.setItem("userID", JSON.stringify(res?.uid));
      } else setUser(null);
      setError("");
    });

    return authStateChange;
  }, []);

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
