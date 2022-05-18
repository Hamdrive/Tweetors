export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TWEETOR":
    case "DELETE_TWEETOR":
      return {
        ...state,
        tweetors: [...action.payload],
      };

    case "ADD_TWEET_ID":
      return {
        ...state,
        tweetIds: [...state.tweetIds, action.payload],
      };
    case "CLEAR_TWEET_IDS":
      return { ...state, tweetIds: [] };
    default:
      return state;
  }
};
