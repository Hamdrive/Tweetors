import React from "react";
import Moment from "react-moment";

export const TweetCard = ({ tweet }) => {
  const {
    name,
    username,
    profile_image_url,
    recentTweet: { id, text, created_at },
  } = tweet;

  console.log(created_at)

  const formattedText = text.replace(/(?:https?):\/\/[\n\S]+/g, "");

  return (
    <>
      <blockquote className="twitter-tweet flex-column w-100">
        <div className="tweet__body">
          <div className="flex-row my-1">
            <div className="tweetor__pfp mr-1">
              <img src={profile_image_url} alt="Tweetor pfp" />
            </div>
            <div className="flex-column">
              <p className="txt-bold">{name}</p>
              <p className="txt-regular h5">@{username}</p>
            </div>
          </div>
          <div>
            <p className="txt-regular h4">{formattedText}. </p>
          </div>
          <div>
            <p className="txt-regular tweet__date my-sm">
              <Moment format="h:mm A · MMMM DD, YYYY">{created_at}</Moment>
            </p>
          </div>
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
