import React from "react";
import { Link } from "react-router-dom";
import "./JobFooter.css";

const JobFooter = ({ toggleNightMode, width, job }) => {
  return (
    <div
      className={`footer__container ${
        toggleNightMode === "2" ? "night-mode-tile-background" : ""
      }`}
    >
      <div className="footer__wrapper">
        {width >= 768 && (
          <div>
            <h5
              className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}
            >
              {job.position}
            </h5>
            <p>{job.company}</p>
          </div>
        )}
        <Link to="/">
          <button>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobFooter;
