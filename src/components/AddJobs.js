import { Form, Button } from "react-bootstrap";

const AddJobs = (props) => {
  const {
    handleCheckTitle,
    handleCheckIntro,
    handleCheckRole,
    handleCheckExperience,
    handleCheckQualification,
    handleCheckSalary,
    handleCheckCta,
    handleCheckCompany,
    handleCheckLocation,
    handleCheckWorkBasis,
    handleCheckWorkMode,
    handleChange,
    handleSubmit,
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
  } = props;

  return (
    <div>
      <h1>Add new job</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Check
            type="checkbox"
            onChange={handleCheckTitle}
            value={jobTitle}
            name="jobTitle"
          />
          <Form.Control
            type="text"
            className="job-title input"
            placeholder="Job Post Title"
            name="jobTitle"
            value={jobTitle}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className="d-flex">
            <Form.Check
              type="checkbox"
              onChange={handleCheckIntro}
              value={introduction}
              label="Introduction"
              className="check"
            />
          </div>
          <Form.Control
            className="input textarea"
            as="textarea"
            rows={3}
            placeholder="The ideal candidate is someone"
            name="introduction"
            value={introduction}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            onChange={handleCheckRole}
            value={roles}
            label="Roles and Responsibility "
          />
          <Form.Control
            className="input textarea"
            as="textarea"
            rows={3}
            placeholder="Your job role will include"
            name="roles"
            value={roles}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3 experience d-flex">
          <div className="left d-flex align-items-center">
            <Form.Check
              type="checkbox"
              onChange={handleCheckExperience}
              value={experience}
            />
            <Form.Control
              type="text"
              className="job-title input"
              placeholder="Experience range (years)"
              name="experience"
              value={experience}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="right d-flex align-items-center">
            <Form.Select
              aria-label="Default select example"
              className="select-experience input"
              name="minExperience"
              value={minExperience}
              onChange={(e) => handleChange(e)}
            >
              <option>Min</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              className="select-experience input"
              name="maxExperience"
              value={maxExperience}
              onChange={(e) => handleChange(e)}
            >
              <option>Max</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </div>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Check
            type="checkbox"
            onChange={handleCheckQualification}
            value={qualification}
          />
          <Form.Control
            type="text"
            className="qualification input"
            placeholder="Qualification"
            name="qualification"
            value={qualification}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Check
            type="checkbox"
            onChange={handleCheckSalary}
            value={salaryRange}
          />
          <Form.Control
            type="text"
            className="job-title input"
            placeholder="Salary Range"
            name="salaryRange"
            value={salaryRange}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Check type="checkbox" onChange={handleCheckCta} value={cta} />
          <Form.Control
            className="input cta"
            as="textarea"
            rows={3}
            placeholder="Call To Action"
            name="cta"
            value={cta}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Check
            type="checkbox"
            onChange={handleCheckCompany}
            value={company}
          />
          <Form.Control
            type="text"
            className="job-title input"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Check
            type="checkbox"
            onChange={handleCheckLocation}
            value={location}
          />
          <Form.Control
            type="text"
            className="job-title input"
            placeholder="Job Location (Map Search)"
            name="location"
            value={location}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3 select-sec d-flex align-items-center">
          <div className="left d-flex  align-items-center">
            <Form.Check
              type="checkbox"
              onChange={handleCheckWorkBasis}
              value={workBasis}
            />

            <Form.Select
              aria-label="Default select example"
              className="select-experience input"
              multiple
              name="workBasis"
              value={workBasis}
              onChange={(e) => handleChange(e)}
            >
              <option>Job Type:</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </Form.Select>
          </div>
          <div className="right d-flex align-items-center">
            <Form.Check
              type="checkbox"
              onChange={handleCheckWorkMode}
              value={workMode}
            />
            <Form.Select
              aria-label="Default select example"
              className="select-experience input"
              multiple
              name="workMode"
              value={workMode}
              onChange={(e) => handleChange(e)}
            >
              <option>Labels:</option>
              <option value="Is Remote">Is Remote</option>
              <option value="5 Days week">5 Days week</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Button type="submit">Add New Job</Button>
      </Form>
    </div>
  );
};

export default AddJobs;
