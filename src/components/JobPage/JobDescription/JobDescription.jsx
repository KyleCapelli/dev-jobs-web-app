import React from "react";
import { Link } from "react-router-dom";
import "./JobDescription.css";

import JobInfo from "./JobInfo/JobInfo";

const JobDescription = ({ job, toggleNightMode }) => {
  return (
    <div
      className={`job-description__container ${
        toggleNightMode === "2" ? "night-mode-tile-background" : ""
      }`}
    >
      <div className="job-description__intro">
        <div className="job-description__title">
          <p className="job-description__posted">
            {job.postedAt}{" "}
            <img
              src={`${process.env.PUBLIC_URL}/Oval.svg`}
              alt="bullet-point"
            />{" "}
            {job.contract}
          </p>
          <h5 className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}>
            {job.position}
          </h5>
          <p className="job-description__location">{job.location}</p>
        </div>
        <Link to="/">
          <button>Apply Now</button>
        </Link>
      </div>
      <p className="job-description__description">{job.description}</p>
      <JobInfo
        job={job.requirements}
        isUnordered={true}
        title="Requirements"
        toggleNightMode={toggleNightMode}
      />
      <JobInfo
        job={job.role}
        isUnordered={false}
        title="What You Will Do"
        toggleNightMode={toggleNightMode}
      />
    </div>
  );
};

export default JobDescription;
