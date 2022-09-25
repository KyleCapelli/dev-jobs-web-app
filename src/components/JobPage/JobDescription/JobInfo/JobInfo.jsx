import React from "react";
import "./JobInfo.css";

const JobInfo = ({ job, isUnordered, title, toggleNightMode }) => {
  return (
    <div className="job-info__container">
      <h3 className={`${toggleNightMode === "2" ? "night-mode-text" : ""}`}>
        {title}
      </h3>
      <p className="job-info__content">{job.content}</p>
      {job.items.map((item, index) => {
        return (
          <div className="list__container" key={index}>
            {isUnordered ? (
              <div>
                <img src={`${process.env.PUBLIC_URL}/Oval.svg`} alt="oval" />
              </div>
            ) : (
              <p className="list__number">{index + 1}</p>
            )}
            <p className="list__item">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobInfo;
