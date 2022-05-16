import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../config/firebase-config";
import { fetchRecentTweet, fetchTwitterUser } from "../utils/twitterAPI/useTwitter";
import { dataReducer } from "./dataReducer";

const DataContext = createContext({});

const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    tweetUserIds: [],
    tweetContentIds: [],
  });

  const getExistingTweetorTweet = () => {
    console.log(dataState?.tweetUserIds);
    fetchRecentTweet(
      dataState?.tweetUserIds[dataState?.tweetUserIds.length - 1],
      dataDispatch
    );
  };

  const getExistingTweetors = async () => {
    try {
      //get userId from localStorage
    //   const userIdRef = JSON.parse(localStorage.getItem("userID"));
      const docRef = await doc(db, "Users", "txWipI5lmopr72EMhONQ");
      const getDocSnapshot = await getDoc(docRef);
      if (getDocSnapshot.exists()) {
          getDocSnapshot?.data()?.tweetors.map((tweetor) => fetchTwitterUser(tweetor.tweetorID, dataDispatch))
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

  const deleteTweetor = (username) => {
    //check if tweetor exists in doc
    //delete tweetor
  };

  const getExploreTweets = () => {
    //run api call and fetch users
    //run api call to fetch recent tweets
  };

  useEffect(() => {
      dataState?.tweetUserIds.length > 0 && getExistingTweetorTweet();
  }, [dataState?.tweetUserIds])

  const value = { dataState, dataDispatch, getExistingTweetors };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, useData };
