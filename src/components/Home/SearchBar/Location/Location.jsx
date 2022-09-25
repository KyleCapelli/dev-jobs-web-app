import React from "react";
import "./Location.css";

const Location = ({ toggleNightMode, locInput, setLocInput }) => {
  return (
    <div className="location__container">
      <img
        src={`${process.env.PUBLIC_URL}/desktop/icon-location.svg`}
        alt="search"
      />
      <input
        className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}
        placeholder="Filter by location..."
        value={locInput}
        onChange={(e) => {
          setLocInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Location;
