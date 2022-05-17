import React from "react";

export const Tweetor = ({ tweetor, handleDelete }) => {
  const { name, userName, pfpUrl } = tweetor;

  return (
    <div className="tweetor__main">
      <section className="flex-around tweetor__section">
        <div className="tweetor__pfp">
          <img src={pfpUrl} alt="Tweetor pfp" />
        </div>
        <p className="h4 txt-regular tweetor__name">{name}</p>
        <a
          href={`https://twitter.com/${userName}`}
          target="_blank"
          rel="noreferrer"
          title={`Visit ${userName}'s Twitter Profile`}
        >
          <div className="fab fa-twitter profile__btn"></div>
        </a>
        <div
          onClick={() => handleDelete(userName)}
          title={`Delete ${userName}`}
          className="fas fa-trash trash__btn pointer"
        ></div>
      </section>
    </div>
  );
};
