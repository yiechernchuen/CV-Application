function CvEducationSection({ sectionInputDetails }) {
    return (
        <div className='cv-education-container'>
            {sectionInputDetails.length > 0 && <div className='cv-title'>Education</div>}
            {sectionInputDetails.map((elem) => (
                <div className='cv-education-section cv-section' key={elem.key}>
                    <p className='cv-education-university-name'>{elem.universityName}</p>
                    <p className='cv-education-location'>{elem.location}</p>
                    <p className='cv-education-course'>{elem.course}</p>
                    <div className='cv-education-period'>
                        {elem.startPeriod && <p className='cv-education-start-period'>{elem.startPeriod} - </p>}
                        <p className='cv-education-end-period'> {elem.endPeriod}</p>
                    </div>
                    <p className='cv-education-awards'>{elem.awards}</p>
                    <p className='cv-education-cgpa'>{elem.cgpa}</p>
                </div>
            ))}
        </div>
    );
}

export default CvEducationSection;
