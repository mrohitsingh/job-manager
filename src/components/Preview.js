function Preview(props) {
  const {
    checkedTitle,
    checkedIntro,
    checkedRole,
    checkedExperience,
    checkedQualification,
    checkedSalary,
    checkedCta,
    checkedCompany,
    checkedLocation,
    checkedWorkBasis,
    checkedWorkMode,
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
        {checkedTitle && <h2>{pJobTitle}</h2>}
        {checkedIntro && (
          <p>
            <b>Introduction: </b>
            {pIntroduction}
          </p>
        )}
        {checkedRole && (
          <p>
            <b>Roles and Responsibility: </b>
            {pRoles}
          </p>
        )}
        {checkedExperience && (
          <p>
            <b>Experience: </b>
            {pExperience} - {pMinExperience} - {pMaxExperience}
          </p>
        )}

        {checkedQualification && (
          <p>
            <b>Qualification: </b>
            {pQualification}
          </p>
        )}
        {checkedSalary && (
          <p>
            <b>Salary Range: </b>
            {pSalaryRange}
          </p>
        )}
        {checkedCta && (
          <p>
            <b>Call To Action: </b>
            {pCta}
          </p>
        )}
        {checkedCompany && (
          <p>
            <b>Company: </b>
            {pCompany}
          </p>
        )}
        {checkedLocation && (
          <p>
            <b>Location: </b>
            {pLocation}
          </p>
        )}

        {checkedWorkBasis && (
          <p>
            <b>Job Type: </b>
            {pWorkBasis}
          </p>
        )}
        {checkedWorkMode && (
          <p>
            <b>Job Mode: </b>
            {pWorkMode}
          </p>
        )}
      </div>
    </div>
  );
}

export default Preview;
