export const dataReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_TWEETOR":
      return {
        ...state,
        tweetUserIds: [...state.tweetUserIds, action.payload],
      };

    case "ADD_TWEET_ID":
      return {
        ...state,
        tweetContentIds: [...state.tweetContentIds, action.payload],
      };
    default:
      return state;
  }
};
