import React, { useState } from "react";

export const Search = ({ handleSearchTweetor }) => {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    if (input.length > 0) {
      handleSearchTweetor(input);
      setInput("");
    }
  };
  return (
    <div className="flex-between my-1">
      <div className="searchbox w-100">
        <div className="fas fa-search search-icon"></div>
        <label htmlFor="searchbar"></label>
        <input
          className="input-corner input-sm border-2 w-100"
          type="search"
          name="searchbar"
          id="searchbar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search tweetors..."
        />
      </div>
      <button
        disabled={!input.length > 0}
        onClick={handleSearchClick}
        className="btn btn-def btn-sm w-30"
      >
        Search
      </button>
    </div>
  );
};
