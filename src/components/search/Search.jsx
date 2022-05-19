import React, { useState } from "react";
import { InputError } from "../inputError/InputError";

export const Search = ({ handleSearchTweetor, searchError }) => {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    if (input.length > 0) {
      handleSearchTweetor(input);
      setInput("");
    }
  };
  return (
    <>
      <div className="flex-between my-md">
        <div className="searchbox w-100">
          <div className="fas fa-search search-icon"></div>
          <label htmlFor="searchbar"></label>
          <input
            className="input-corner input-md border-2 w-100"
            type="search"
            name="searchbar"
            id="searchbar"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              searchError.current = "";
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
            placeholder="Search tweetors..."
          />
        </div>
        <button
          disabled={!input.length > 0}
          onClick={handleSearchClick}
          className="btn btn-def btn-sm txt-reg w-30"
        >
          Add
        </button>
      </div>
      {searchError.current && <InputError errorMessage={searchError.current} />}
    </>
  );
};
