import React, { useState } from "react";
import AddJobs from "./AddJobs";
import Preview from "./Preview";
import Jobs from "./Jobs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [checkedTitle, setCheckedTitle] = useState(false);
  const [checkedIntro, setCheckedIntro] = useState(false);
  const [checkedRole, setCheckedRole] = useState(false);
  const [checkedExperience, setCheckedExperience] = useState(false);
  const [checkedQualification, setCheckedQualification] = useState(false);
  const [checkedSalary, setCheckedSalary] = useState(false);
  const [checkedCta, setCheckedCta] = useState(false);
  const [checkedCompany, setCheckedCompany] = useState(false);
  const [checkedLocation, setCheckedLocation] = useState(false);
  const [checkedWorkBasis, setCheckedWorkBasis] = useState(false);
  const [checkedWorkMode, setCheckedWorkMode] = useState(false);

  const [newJob, setNewJob] = useState({
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

  const [pJob, setPJob] = useState({
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setPJob({ ...pJob, [e.target.name]: e.target.value });
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleCheckTitle = (e) => {
    setCheckedTitle(!checkedTitle);
  };
  const handleCheckIntro = (e) => {
    setCheckedIntro(!checkedIntro);
  };

  const handleCheckRole = (e) => {
    setCheckedRole(!checkedRole);
  };

  const handleCheckExperience = (e) => {
    setCheckedExperience(!checkedExperience);
  };

  const handleCheckQualification = (e) => {
    setCheckedQualification(!checkedQualification);
  };

  const handleCheckSalary = (e) => {
    setCheckedSalary(!checkedSalary);
  };

  const handleCheckCta = (e) => {
    setCheckedCta(!checkedCta);
  };

  const handleCheckCompany = (e) => {
    setCheckedCompany(!checkedCompany);
  };

  const handleCheckLocation = (e) => {
    setCheckedLocation(!checkedLocation);
  };

  const handleCheckWorkBasis = (e) => {
    setCheckedWorkBasis(!checkedWorkBasis);
  };

  const handleCheckWorkMode = (e) => {
    setCheckedWorkMode(!checkedWorkMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/jobs", newJob);
    navigate("/jobs");
  };

  return (
    <div>
      <h2>Job Manager</h2>
      <div className="jobs">
        <div className="job-manager">
          <AddJobs
            handleCheckTitle={handleCheckTitle}
            handleCheckIntro={handleCheckIntro}
            handleCheckRole={handleCheckRole}
            handleCheckExperience={handleCheckExperience}
            handleCheckQualification={handleCheckQualification}
            handleCheckSalary={handleCheckSalary}
            handleCheckCta={handleCheckCta}
            handleCheckCompany={handleCheckCompany}
            handleCheckLocation={handleCheckLocation}
            handleCheckWorkBasis={handleCheckWorkBasis}
            handleCheckWorkMode={handleCheckWorkMode}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
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
            checkedTitle={checkedTitle}
            checkedIntro={checkedIntro}
            checkedRole={checkedRole}
            checkedExperience={checkedExperience}
            checkedQualification={checkedQualification}
            checkedSalary={checkedSalary}
            checkedCta={checkedCta}
            checkedCompany={checkedCompany}
            checkedLocation={checkedLocation}
            checkedWorkBasis={checkedWorkBasis}
            checkedWorkMode={checkedWorkMode}
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
