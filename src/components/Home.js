import React, { useState } from "react";
import AddJobs from "./AddJobs";
import Preview from "./Preview";

function Home() {
  const [pJob, setPJob] = useState({
    id: "",
    jobTitle: "",
    introduction: "",
    roles: "",
    experience: "",
    minExperience: "",
    maxExperience: "",
    qualification: "",
    salaryRange: "",
    cta: "",
    company: "",
    location: "",
    workBasis: "",
    workMode: "",
  });

  const {
    jobTitle,
    introduction,
    roles,
    experience,
    minExperience,
    maxExperience,
    qualification,
    salaryRange,
    cta,
    company,
    location,
    workBasis,
    workMode,
  } = pJob;

  const handleChange = (e) => {
    e.preventDefault();
    setPJob({ ...pJob, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Job Manager</h2>
      <div className="jobs">
        <div className="job-manager">
          <AddJobs
            handleChange={handleChange}
            jobTitle={jobTitle}
            introduction={introduction}
            roles={roles}
            experience={experience}
            minExperience={minExperience}
            maxExperience={maxExperience}
            qualification={qualification}
            salaryRange={salaryRange}
            cta={cta}
            company={company}
            location={location}
            workBasis={workBasis}
            workMode={workMode}
          />
        </div>
        <div className="job-preview">
          <Preview
            pJobTitle={jobTitle}
            pIntroduction={introduction}
            pRoles={roles}
            pExperience={experience}
            pMinExperience={minExperience}
            pMaxExperience={maxExperience}
            pQualification={qualification}
            pSalaryRange={salaryRange}
            pCta={cta}
            pCompany={company}
            pLocation={location}
            pWorkBasis={workBasis}
            pWorkMode={workMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
