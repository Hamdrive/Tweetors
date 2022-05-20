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

export const fetchRecentTweet = async (tweetor, dispatch) => {
  try {
    const res = await axios.get(
      `https://twitter-mentors.vercel.app/api/getTwitterUserTweets?userID=${tweetor.id}`
    );
    if (res?.data?.data?.[0])
      dispatch({
        type: "ADD_TWEET_ID",
        payload: { ...tweetor, recentTweet: res.data.data[0] },
      });
  } catch (error) {
    throw new Error(error);
  }
};
