function CvPersonalSection({ sectionInputDetails }) {
    const hasInputDetails = Object.values(sectionInputDetails).join('');
    const hasNameInputDetails = sectionInputDetails.firstName + sectionInputDetails.lastName;

    return (
        hasInputDetails && (
            <div className='cv-personal-container'>
                <p className='ion-icon-person-outline grid-item'>
                    <ion-icon name='person-outline' size='large'></ion-icon>
                </p>
                <div className='cv-personal-section cv-sub-section'>
                    {hasNameInputDetails && (
                        <p className='cv-personal-full-name grid-item'>
                            {sectionInputDetails.firstName + ' ' + sectionInputDetails.lastName}
                        </p>
                    )}
                    {sectionInputDetails.phoneNumber && (
                        <p className='cv-personal-phone-number grid-item'>
                            <ion-icon name='call'></ion-icon> {sectionInputDetails.phoneNumber}
                        </p>
                    )}
                    {sectionInputDetails.email && (
                        <p className='cv-personal-email grid-item'>
                            <ion-icon name='mail'></ion-icon> {sectionInputDetails.email}
                        </p>
                    )}
                    {sectionInputDetails.address && (
                        <p className='cv-personal-address grid-item'>
                            <ion-icon name='location'></ion-icon> {sectionInputDetails.address}
                        </p>
                    )}
                </div>
            </div>
        )
    );
}

export default CvPersonalSection;
