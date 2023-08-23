function CvExperienceSection({ sectionInputDetails }) {
    return (
        <div className='cv-experience-container'>
            {sectionInputDetails.length > 0 && <div className='cv-title'>Experience</div>}
            {sectionInputDetails.map((elem) => (
                <div className='cv-experience-section cv-section' key={elem.key}>
                    <p className='cv-experience-company-name'>{elem.companyName}</p>
                    <p className='cv-experience-job-title'>{elem.jobTitle}</p>
                    <div className='cv-experience-period'>
                        {elem.startPeriod && <p className='cv-experience-start-period'>{elem.startPeriod} - </p>}
                        <p className='cv-experience-end-period'> {elem.endPeriod}</p>
                    </div>
                    <p className='cv-experience-location'>{elem.location}</p>
                    <p className='cv-experience-job-description'>{elem.jobDescription}</p>
                </div>
            ))}
        </div>
    );
}

export default CvExperienceSection;
