import axios from "axios";

export const fetchTwitterUser = async (username) => {
  try {
    const res = await axios.get(
      `https://twitter-api-fetch-userdata.netlify.app/api/fetchUserData?username=${username}`
    );
    if (res) return res?.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchRecentTweet = async (userId, dispatch) => {
  try {
    const res = await axios.get(
      `https://twitter-api-fetch-userdata.netlify.app/api/fetchRecentTweet?userID=${userId}`
    );
    console.log(res);
    if (res?.data)
      dispatch({ type: "ADD_TWEET_ID", payload: res?.data[0]?.id });
  } catch (error) {
    throw new Error(error);
  }
};
