function CvEducationSection({ sectionInputDetails }) {
    return (
        sectionInputDetails.length > 0 && (
            <div className='cv-education-container'>
                <p className='ion-icon-school-outline grid-item'>
                    <ion-icon name='school-outline' size='large'></ion-icon>
                </p>
                {sectionInputDetails.map((elem) => (
                    <div className='cv-education-sub-section cv-sub-section' key={elem.key}>
                        {elem.universityName && (
                            <p className='cv-education-university-name grid-item'>{elem.universityName}</p>
                        )}
                        {elem.location && <p className='cv-education-location grid-item'>{elem.location}</p>}
                        {elem.course && <p className='cv-education-course grid-item'>{elem.course}</p>}
                        {elem.startPeriod && (
                            <p className='cv-education-period grid-item'>
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
                        {elem.awards && <p className='cv-education-awards grid-item'>Awards: {elem.awards}</p>}
                        {elem.cgpa && <p className='cv-education-cgpa grid-item'>CGPA: {elem.cgpa}</p>}
                    </div>
                ))}
            </div>
        )
    );
}

export default CvEducationSection;
