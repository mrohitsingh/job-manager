function Preview(props) {
  const {
    pJobTitle,
    pIntroduction,
    pRoles,
    pExperience,
    pMinExperience,
    pMaxExperience,
    pQualification,
    pSalaryRange,
    pCta,
    pCompany,
    pLocation,
    pWorkBasis,
    pWorkMode,
  } = props;

  return (
    <div className="live-preview">
      <h3>Preview</h3>
      <hr />
      <div>
        <h2>{pJobTitle}</h2>
        <p>
          <b>Introduction: </b>
          {pIntroduction}
        </p>
        <p>
          <b>Roles and Responsibility: </b>
          {pRoles}
        </p>
        <p>
          <b>Experience: </b>
          {pExperience} - {pMinExperience} - {pMaxExperience}
        </p>

        <p>
          <b>Qualification: </b>
          {pQualification}
        </p>
        <p>
          <b>Salary Range: </b>
          {pSalaryRange}
        </p>
        <p>
          <b>Call To Action: </b>
          {pCta}
        </p>
        <p>
          <b>Company: </b>
          {pCompany}
        </p>
        <p>
          <b>Location: </b>
          {pLocation}
        </p>
        <p>
          <b>Job Type: </b>
          {pWorkBasis} , {pWorkMode}
        </p>
      </div>
    </div>
  );
}

export default Preview;
