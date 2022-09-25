import React from "react";
import "./Main.css";
import JobTile from "./JobTile/JobTile";

const Main = ({ jobData, setSearchId, toggleNightMode }) => {
  return (
    <div className="main__container">
      {jobData.map((job, index) => {
        return (
          <JobTile
            job={job}
            key={job.id}
            setSearchId={setSearchId}
            toggleNightMode={toggleNightMode}
          />
        );
      })}
      <div className="main__button-container">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default Main;
