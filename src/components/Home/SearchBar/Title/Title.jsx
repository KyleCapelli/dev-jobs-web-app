import React from "react";
import "./Title.css";

const Title = ({
  width,
  setLightBoxToggle,
  toggleNightMode,
  titleInput,
  setTitleInput,
  handleSearch,
}) => {
  return (
    <div className={`title__container ${width < 768 ? "mobile-search" : ""}`}>
      <img
        className={`${width < 768 && "hide"}`}
        src={`${process.env.PUBLIC_URL}/desktop/icon-search-purple.svg`}
        alt="search"
      />
      <input
        className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        placeholder="Filter by title..."
      />
      {width < 768 && (
        <div className="title__search-container">
          <img
            onClick={() => setLightBoxToggle(true)}
            className="title__search-filter"
            src={`${process.env.PUBLIC_URL}/mobile/icon-filter.svg`}
            alt="search"
          />
          <button
            className="title__search-button"
            onClick={() => handleSearch()}
          >
            <img
              src={`${process.env.PUBLIC_URL}/desktop/icon-search-white.svg`}
              alt="search"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
