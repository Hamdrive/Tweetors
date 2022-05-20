import React from "react";

export const TweetCard = ({ tweet }) => {
  const {
    name,
    username,
    profile_image_url,
    recentTweet: { id, text },
  } = tweet;

  const formattedText = text.replace(/(?:https?):\/\/[\n\S]+/g, "");

  return (
    <>
      <blockquote className="twitter-tweet flex-column">
        <div className="flex-row my-1">
          <div className="tweetor__pfp mr-1">
            <img src={profile_image_url} alt="Tweetor pfp" />
          </div>
          <div className="flex-column">
            <p className="txt-bold">{name}</p>
            <p className="txt-regular h5">@{username}</p>
          </div>
        </div>
        <div className="my-1">
          <p className="txt-regular h4">{formattedText}. </p>
        </div>
        <a
          href={`https://twitter.com/${username}/status/${id}`}
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
        >
          <button className="btn btn-def btn-sm txt-reg w-100">
            Explore this tweet
          </button>
        </a>
      </blockquote>
    </>
  );
};
