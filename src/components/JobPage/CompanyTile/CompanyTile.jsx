import React from "react";
import { Link } from "react-router-dom";
import "./CompanyTile.css";

const CompanyTile = ({ job, toggleNightMode }) => {
  return (
    <div
      className={`company-tile__container ${
        toggleNightMode === "2" ? "night-mode-tile-background" : ""
      }`}
    >
      <div
        className="company-tile__image"
        style={{ backgroundColor: job.logoBackground }}
      >
        <img src={`${process.env.PUBLIC_URL}${job.logo}`} alt={`${job.logo}`} />
      </div>
      <div className="company-tile__content-wrap">
        <h4 className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}>
          {job.company}
        </h4>
        <p className="company-tile__url">{job.company.toLowerCase()}.com</p>
      </div>
      <Link to="/">
        <button>Company Site</button>
      </Link>
    </div>
  );
};

export default CompanyTile;
