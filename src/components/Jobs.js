import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const result = await axios.get("http://localhost:3001/jobs");
    setJobs(result.data);
  };

  const deleteJob = async (id) => {
    await axios.delete(`http://localhost:3001/jobs/${id}`);
    loadJobs();
  };
  return (
    <div className="jobs-list">
      <h1>Jobs</h1>
      <hr />
      {jobs.map((job) => (
        <div key={job.id} className="d-flex align-items-center jobs-item">
          <h5>{job.jobTitle}</h5>
          <div>
            <Link to={`/jobs/${job.id}`} className="btn btn-primary btn-view">
              View
            </Link>
            <button
              onClick={() => deleteJob(job.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
