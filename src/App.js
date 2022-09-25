import "./App.css";
import { Routes, Route } from "react-router-dom";
import { jobData } from "./data/data.js";
import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import JobPage from "./components/JobPage/JobPage";

function App() {
  const [searchId, setSearchId] = useState(undefined);
  const [width, setWidth] = useState(window.innerWidth);
  const [lightBoxToggle, setLightBoxToggle] = useState(false);
  const [toggleNightMode, setNightModeToggle] = useState(1); // 1 = day, 2 = night
  const [titleInput, setTitleInput] = useState("");
  const [locInput, setLocInput] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [tileData, setTileData] = useState(jobData);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  console.log(tileData);

  const handleSearch = () => {
    // Iterating through tileData and retrieving only values that are the same
    // as input parameters

    const searchFilter = jobData.filter((tile) => {
      if (fullTime) {
        return (
          tile.position.toLowerCase().includes(titleInput.toLowerCase()) &&
          tile.location.toLowerCase().includes(locInput.toLowerCase()) &&
          tile.contract === "Full Time"
        );
      } else {
        return (
          tile.position.toLowerCase().includes(titleInput.toLowerCase()) &&
          tile.location.toLowerCase().includes(locInput.toLowerCase())
        );
      }
    });

    setTileData(searchFilter);

    // Resetting fields
    setTitleInput("");
    setLocInput("");
    setFullTime("");
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      className={`App ${
        toggleNightMode === "2" ? "night-mode-background" : ""
      }`}
    >
      <Header setNightModeToggle={setNightModeToggle} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              jobData={tileData}
              setSearchId={setSearchId}
              width={width}
              lightBoxToggle={lightBoxToggle}
              toggleNightMode={toggleNightMode}
              setLightBoxToggle={setLightBoxToggle}
              titleInput={titleInput}
              setTitleInput={setTitleInput}
              locInput={locInput}
              setLocInput={setLocInput}
              handleSearch={handleSearch}
              fullTime={fullTime}
              setFullTime={setFullTime}
            />
          }
        >
          Home
        </Route>
        <Route
          path={`/job-page/${searchId}`}
          element={
            <JobPage
              job={jobData[searchId - 1]}
              toggleNightMode={toggleNightMode}
              width={width}
            />
          }
        >
          Job Page
        </Route>
      </Routes>
    </div>
  );
}

export default App;
