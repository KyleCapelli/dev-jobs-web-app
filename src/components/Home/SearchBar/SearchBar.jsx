import React from "react";
import Title from "./Title/Title";
import Location from "./Location/Location";
import Search from "./Search/Search";
import "./SearchBar.css";

const SearchBar = ({
  width,
  setLightBoxToggle,
  toggleNightMode,
  titleInput,
  setTitleInput,
  locInput,
  setLocInput,
  handleSearch,
  fullTime,
  setFullTime,
}) => {
  return (
    <div
      className={`searchbar__container ${
        toggleNightMode === "2" ? "night-mode-tile-background" : ""
      }`}
    >
      <Title
        width={width}
        setLightBoxToggle={setLightBoxToggle}
        toggleNightMode={toggleNightMode}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        handleSearch={handleSearch}
      />
      {width >= 768 && (
        <>
          <Location
            toggleNightMode={toggleNightMode}
            locInput={locInput}
            setLocInput={setLocInput}
          />
          <Search
            toggleNightMode={toggleNightMode}
            handleSearch={handleSearch}
            fullTime={fullTime}
            setFullTime={setFullTime}
          />
        </>
      )}
    </div>
  );
};

export default SearchBar;
