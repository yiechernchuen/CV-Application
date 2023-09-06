import CvPersonalSection from './cv-sections/personal/CvPersonalSection';
import CvEducationSection from './cv-sections/qualifications/CvEducationSection';
import CvExperienceSection from './cv-sections/qualifications/CvExperienceSection';

function OutputCv({ personalInputDetails, educationInputDetails, experienceInputDetails }) {
    const hasPersonalInputDetails = Object.values(personalInputDetails).join('');

    return (
        <>
            {(hasPersonalInputDetails || educationInputDetails.length > 0 || experienceInputDetails.length > 0) && (
                <div className='cv-container'>
                    <CvPersonalSection sectionInputDetails={personalInputDetails} />
                    <CvEducationSection sectionInputDetails={educationInputDetails} />
                    <CvExperienceSection sectionInputDetails={experienceInputDetails} />
                </div>
            )}
            {!hasPersonalInputDetails && educationInputDetails.length === 0 && experienceInputDetails.length === 0 && (
                <div className='cv-placeholder'>
                    <div className='cv-placeholder-icons'>
                        <ion-icon name='person-outline' size='large'></ion-icon>
                        <ion-icon name='school-outline' size='large'></ion-icon>
                        <ion-icon name='briefcase-outline' size='large'></ion-icon>
                    </div>
                    <p>Ready to create your CV?</p>
                    <p>Start by entering your details!</p>
                </div>
            )}
        </>
    );
}

export default OutputCv;
