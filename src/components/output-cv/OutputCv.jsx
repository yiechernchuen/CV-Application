import CvPersonalSection from './cv-sections/personal/CvPersonalSection';
import CvEducationSection from './cv-sections/qualifications/CvEducationSection';
import CvExperienceSection from './cv-sections/qualifications/CvExperienceSection';

function OutputCv({ personalInputDetails, educationInputDetails, experienceInputDetails }) {
    return (
        <div className='cv-container'>
            <CvPersonalSection sectionInputDetails={personalInputDetails} />
            <CvEducationSection sectionInputDetails={educationInputDetails} />
            <CvExperienceSection sectionInputDetails={experienceInputDetails} />
        </div>
    );
}

export default OutputCv;
