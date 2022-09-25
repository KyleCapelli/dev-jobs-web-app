import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Main from "./Main/Main";
import LightBox from "./LightBox/LightBox";

const Home = ({
  jobData,
  setSearchId,
  width,
  lightBoxToggle,
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
    <div>
      <SearchBar
        width={width}
        setLightBoxToggle={setLightBoxToggle}
        toggleNightMode={toggleNightMode}
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        locInput={locInput}
        setLocInput={setLocInput}
        handleSearch={handleSearch}
        fullTime={fullTime}
        setFullTime={setFullTime}
      />
      <Main
        jobData={jobData}
        setSearchId={setSearchId}
        toggleNightMode={toggleNightMode}
      />
      {lightBoxToggle && width < 768 && (
        <LightBox
          setLightBoxToggle={setLightBoxToggle}
          toggleNightMode={toggleNightMode}
          locInput={locInput}
          setLocInput={setLocInput}
          handleSearch={handleSearch}
          fullTime={fullTime}
          setFullTime={setFullTime}
        />
      )}
    </div>
  );
};

export default Home;
