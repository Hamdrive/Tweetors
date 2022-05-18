import React, { useState } from "react";
import MainLogo from "../../assets/TweetorsLogo.png";
import { Auth } from "../auth/Auth";

export const Home = () => {
  const [homeClicked, setHomeClicked] = useState(false);

  return (
    <>
      {homeClicked ? (
        <Auth />
      ) : (
        <>
          <section>
            <div className="div__image mx-auto">
              <img src={MainLogo} alt="Tweetors" />
            </div>
            <h3 className="txt-center">
              Tweetors - Follow your Twitter mentors
            </h3>
          </section>
          <section className="section__about h-100 flex-column">
            <article className="article__list">
              <ul className="list-emoji flex-grow-1">
                <li>Enhance your Twitter Experience</li>
                <li>Follow your Mentors</li>
                <li>Be up to date on tweets</li>
              </ul>
            </article>
          <div className="div__cta mx-auto">
            <button
              onClick={() => setHomeClicked(true)}
              className="btn btn-def btn-md"
            >
              Get started
            </button>
          </div>
          </section>
        </>
      )}
  </>);
};
