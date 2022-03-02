import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Job() {
  const [job, setJob] = useState({
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
  const { id } = useParams();

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    const result = await axios.get(`http://localhost:3001/jobs/${id}`);
    setJob(result.data);
  };
  return (
    <div className="job">
      <h1>Job</h1>
      <hr />
      <div key={job.id} className="job-item">
        <h3>{job.jobTitle}</h3>
        <p>
          <b>Introduction: </b>
          {job.introduction}
        </p>

        <p>
          <b>Role:</b>
          {job.roles}
        </p>
        <p>
          <b>Experience: </b>
          {job.experience}
        </p>
        <p>
          <b>Qualification: </b>
          {job.qualification}
        </p>
        <p>
          <b>Salary: </b>
          {job.salaryRange}
        </p>
        <p>
          <b>Call To Action: </b>
          {job.cta}
        </p>
        <p>
          <b>Company: </b>
          {job.company}
        </p>
        <p>
          <b>Location: </b>
          {job.location}
        </p>
        <p>
          <b>Work Basis: </b>
          {job.workBasis}
        </p>
        <p>
          <b>Work Mode: </b>
          {job.workMode}
        </p>
      </div>
    </div>
  );
}

export default Job;
