function CvExperienceSection({ sectionInputDetails }) {
    return (
        sectionInputDetails.length > 0 && (
            <div className='cv-experience-container'>
                <p className='ion-icon-briefcase-outline grid-item'>
                    <ion-icon name='briefcase-outline' size='large'></ion-icon>
                </p>
                {sectionInputDetails.map((elem) => (
                    <div className='cv-experience-sub-section cv-sub-section' key={elem.key}>
                        {elem.companyName && <p className='cv-experience-company-name grid-item'>{elem.companyName}</p>}
                        {elem.location && <p className='cv-experience-location grid-item'>{elem.location}</p>}
                        {elem.jobTitle && <p className='cv-experience-job-title grid-item'>{elem.jobTitle}</p>}
                        {elem.startPeriod && (
                            <p className='cv-experience-period grid-item'>
                                {new Date(elem.startPeriod).toLocaleString('default', {
                                    year: '2-digit',
                                    month: 'short',
                                })}{' '}
                                -{' '}
                                {elem.endPeriod &&
                                    new Date(elem.endPeriod).toLocaleString('default', {
                                        year: '2-digit',
                                        month: 'short',
                                    })}
                                {!elem.endPeriod && 'present'}
                            </p>
                        )}
                        {elem.jobDescription && (
                            <p className='cv-experience-job-description grid-item'>{elem.jobDescription}</p>
                        )}
                    </div>
                ))}
            </div>
        )
    );
}

export default CvExperienceSection;
