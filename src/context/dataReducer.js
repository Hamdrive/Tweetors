export const dataReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TWEETOR":
      return {
        ...state,
        tweetUserIds: [...state.tweetUserIds, ...action.payload],
      };

    case "ADD_TWEET_ID":
      return {
        ...state,
        tweetContetIds: [...state.tweetUserIds, ...action.payload],
      };
    default:
      return state;
  }
};
