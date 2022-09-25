import React from "react";
import "./LightBox.css";

const LightBox = ({
  setLightBoxToggle,
  toggleNightMode,
  locInput,
  setLocInput,
  fullTime,
  setFullTime,
  handleSearch,
}) => {
  const handleClose = () => {
    setLightBoxToggle(false);
    setLocInput("");
    setFullTime(false);
  };
  return (
    <div className="lightbox__container">
      <img
        onClick={() => handleClose()}
        className="lightbox__close"
        src={`${process.env.PUBLIC_URL}/mobile/icon-close.svg`}
        alt="search"
      />
      <div
        className={`lightbox__wrapper  ${
          toggleNightMode === "2" ? "night-mode-tile-background" : ""
        }`}
      >
        <div className="lightbox__location">
          <img
            src={`${process.env.PUBLIC_URL}/desktop/icon-location.svg`}
            alt="search"
          />
          <input
            value={locInput}
            onChange={(e) => {
              setLocInput(e.target.value);
            }}
            className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}
            placeholder="Filter by location..."
          />
        </div>
        <div className="lightbox__search-container">
          <div className="lightbox__checkbox">
            <input
              type="checkbox"
              checked={fullTime}
              onChange={(e) => setFullTime(e.target.checked)}
            />
            <label
              className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}
            >
              Full Time Only
            </label>
          </div>
          <button onClick={() => handleSearch()}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
