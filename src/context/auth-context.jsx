import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginPage, setLoginPage] = useState(true);

  const signupUser = async (name, email, password) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      await setDoc(doc(db, "Users", res?.user?.uid), {
        name: name,
        emailID: email,
        tweetors: [],
      });

      localStorage.setItem("userID", res?.user?.uid);
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
      if (res) {
        setUser(res);
        localStorage.setItem("userID", res?.uid);
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
    loginPage,
    setLoginPage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
