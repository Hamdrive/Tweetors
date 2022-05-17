import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { db } from "../config/firebase-config";
import {
  fetchRecentTweet,
  fetchTwitterUser,
} from "../utils/twitterAPI/useTwitter";
import { dataReducer } from "./dataReducer";

const DataContext = createContext({});

const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    tweetors: [],
    tweetIds: [],
  });

  const getExistingTweetorTweet = () => {
    dataDispatch({ type: "CLEAR_TWEET_IDS" });
    dataState?.tweetors?.map((tweetor) =>
      fetchRecentTweet(tweetor.id, dataDispatch)
    );
  };

  const getExistingTweetors = async () => {
    try {
      //get userId from localStorage
      //   const userIdRef = JSON.parse(localStorage.getItem("userID"));
      setLoading(true);
      const docRef = await doc(db, "Users", "txWipI5lmopr72EMhONQ");
      const getDocSnapshot = await getDoc(docRef);
      if (getDocSnapshot.exists()) {
        dataDispatch({
          type: "ADD_TWEETOR",
          payload: getDocSnapshot?.data()?.tweetors,
        });
      }
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  const setNewTweetor = async (username) => {
    const checkTweetorExists = dataState?.tweetors?.find(
      (tweetor) => tweetor.userName === username
    );
    if (!checkTweetorExists) {
      try {
        setLoading(true);
        const newTweetorData = await fetchTwitterUser(username, dataDispatch);
        if (newTweetorData) {
          const docRef = await doc(db, "Users", "txWipI5lmopr72EMhONQ");
          const getDocSnapshot = await getDoc(docRef);
          if (getDocSnapshot.exists()) {
            await updateDoc(docRef, {
              tweetors: arrayUnion(newTweetorData),
            });

            getExistingTweetors();
          }
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  const deleteTweetor = async (username) => {
    const checkTweetorExists = dataState?.tweetors?.find(
      (tweetor) => tweetor.username === username
    );
    if (checkTweetorExists) {
      try {
        setLoading(true);
        const docRef = await doc(db, "Users", "txWipI5lmopr72EMhONQ");
        const getDocSnapshot = await getDoc(docRef);
        if (getDocSnapshot.exists()) {
          console.log(checkTweetorExists.userName);
          await updateDoc(docRef, {
            tweetors: arrayRemove(checkTweetorExists),
          });

          getExistingTweetors();
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  useEffect(() => {
    dataState?.tweetors?.length > 0 && getExistingTweetorTweet();
  }, [dataState?.tweetors]);

  const value = {
    dataState,
    dataDispatch,
    getExistingTweetors,
    deleteTweetor,
    setNewTweetor,
    loading,
    setLoading,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, useData };
