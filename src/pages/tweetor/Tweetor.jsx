import React from "react";

export const Tweetor = ({ tweetor, handleDelete }) => {
  const { name, username, profile_image_url } = tweetor;

  return (
    <div className="tweetor__main">
      <section className="flex-around tweetor__section tweetor__grid">
        <div className="tweetor__pfp mx-auto">
          <img src={profile_image_url} alt="Tweetor pfp" />
        </div>
        <p className="h4 txt-regular txt-left w-100 tweetor__name">{name}</p>
        <a
          href={`https://twitter.com/${username}`}
          target="_blank"
          rel="noreferrer"
          title={`Visit ${username}'s Twitter Profile`}
        >
          <div className="fab fa-twitter profile__btn"></div>
        </a>
        <div
          onClick={() => handleDelete(username)}
          title={`Delete ${username}`}
          className="fas fa-trash trash__btn pointer"
        ></div>
      </section>
    </div>
  );
};
