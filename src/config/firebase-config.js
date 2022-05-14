import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVtjNu7rUm05tx1Pc7ILfrV2ZjaP_W7f8",
  authDomain: "twitter-mentors.firebaseapp.com",
  projectId: "twitter-mentors",
  storageBucket: "twitter-mentors.appspot.com",
  messagingSenderId: "396777414463",
  appId: "1:396777414463:web:8e40bbdafced6a7c62fd8a",
  measurementId: "G-KCY6FTGYC9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
