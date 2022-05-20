import axios from "axios";

export const fetchTwitterUser = async (username) => {
  try {
    const res = await axios.get(
      `https://twitter-mentors.vercel.app/api/getTwitterUser?username=${username}`
    );

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchRecentTweet = async (userId, dispatch) => {
  try {
    const res = await axios.get(
      `https://twitter-mentors.vercel.app/api/getTwitterUserTweets?userID=${userId}`
    );

    if (res?.data?.data.hasOwnProperty("referenced_tweets")) return;
    else dispatch({ type: "ADD_TWEET_ID", payload: res?.data?.data[0]?.id });
  } catch (error) {
    throw new Error(error);
  }
};
