import React from "react";
import "./Search.css";

const Search = ({ toggleNightMode, handleSearch, fullTime, setFullTime }) => {
  return (
    <div className="search__container">
      <div className="search__checkbox">
        <input
          checked={fullTime}
          onChange={(e) => setFullTime(e.target.checked)}
          type="checkbox"
        />
        <label
          className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}
        >
          Full Time
        </label>
      </div>
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
};

export default Search;
