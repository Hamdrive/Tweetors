import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../config/firebase-config";
import {
  fetchRecentTweet,
  fetchTwitterUser,
} from "../utils/twitterAPI/useTwitter";
import { dataReducer } from "./dataReducer";

const DataContext = createContext({});

const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
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
      const docRef = await doc(db, "Users", "txWipI5lmopr72EMhONQ");
      const getDocSnapshot = await getDoc(docRef);
      if (getDocSnapshot.exists()) {
        dataDispatch({
          type: "ADD_TWEETOR",
          payload: getDocSnapshot?.data()?.tweetors,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const setNewTweetor = (username) => {
    //get userId from localStorage
    //check if tweetor exists in doc
    //add tweetorId
  };

  const deleteTweetor = async (username) => {
    //check if tweetor exists in doc
    const checkTweetorExists = dataState?.tweetors?.find(
      (tweetor) => tweetor.userName === username
    );
    if (checkTweetorExists) {
      try {
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
    //delete tweetor
  };

  const getExploreTweets = () => {
    //run api call and fetch users
    //run api call to fetch recent tweets
  };

  useEffect(() => {
    dataState?.tweetors?.length > 0 && getExistingTweetorTweet();
  }, [dataState?.tweetors]);

  const value = { dataState, dataDispatch, getExistingTweetors, deleteTweetor };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, useData };
