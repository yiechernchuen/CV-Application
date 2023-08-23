function CvPersonalSection({ sectionInputDetails }) {
    return (
        <div className='cv-personal-container'>
            <p className='cv-personal-full-name'>
                {sectionInputDetails.firstName + ' ' + sectionInputDetails.lastName}
            </p>
            <p className='cv-personal-phone-number'>{sectionInputDetails.phoneNumber}</p>
            <p className='cv-personal-email'>{sectionInputDetails.email}</p>
            <p className='cv-personal-address'>{sectionInputDetails.address}</p>
        </div>
    );
}

export default CvPersonalSection;
