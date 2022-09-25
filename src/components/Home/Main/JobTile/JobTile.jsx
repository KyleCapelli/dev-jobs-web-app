import React from "react";
import { Link } from "react-router-dom";
import "./JobTile.css";

const JobTile = ({ job, setSearchId, toggleNightMode }) => {
  return (
    <div
      className={`job-tile__container ${
        toggleNightMode === "2" ? "night-mode-tile-background" : ""
      }`}
    >
      <Link to={`/job-page/${job.id}`} onClick={() => setSearchId(job.id)}>
        <div
          className="job-tile__image"
          style={{ backgroundColor: job.logoBackground }}
        >
          <img
            src={`${process.env.PUBLIC_URL}${job.logo}`}
            alt={`${job.logo}`}
          />
        </div>
        <p className="job-tile__posted-time">
          {job.postedAt}{" "}
          <img src={`${process.env.PUBLIC_URL}/Oval.svg`} alt="bullet-point" />{" "}
          {job.contract}
        </p>
        <h5 className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}>
          {job.position}
        </h5>
        <p className="job-tile__company">{job.company}</p>
        <p className="job-tile__location">{job.location}</p>
      </Link>
    </div>
  );
};

export default JobTile;
