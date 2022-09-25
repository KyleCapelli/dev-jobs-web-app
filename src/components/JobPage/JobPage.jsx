import React from "react";
import "./JobPage.css";

import CompanyTile from "./CompanyTile/CompanyTile";
import JobDescription from "./JobDescription/JobDescription";
import JobFooter from "./JobFooter/JobFooter";

const JobPage = ({ job, toggleNightMode, width }) => {
  console.log(job);

  return (
    <div className="job-page__container">
      <div className="job-page__content">
        <CompanyTile job={job} toggleNightMode={toggleNightMode} />
        <JobDescription job={job} toggleNightMode={toggleNightMode} />
      </div>
      <JobFooter toggleNightMode={toggleNightMode} width={width} job={job} />
    </div>
  );
};

export default JobPage;
