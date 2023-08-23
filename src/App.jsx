import { useState } from 'react';
import PersonalSection from './components/user-input-sections/personal/PersonalSection.jsx';
import EducationSection from './components/user-input-sections/qualifications/EducationSection.jsx';
import ExperienceSection from './components/user-input-sections/qualifications/ExperienceSection.jsx';
import OutputCv from './components/output-cv/OutputCv.jsx';

const initialPersonalState = { name: 'Personal', showSection: true };
const initialEducationState = {
    name: 'Education',
    showSection: false,
    showSubSection: true,
    currentSubSection: 0,
};
const initialExperienceState = {
    name: 'Experience',
    showSection: false,
    showSubSection: true,
    currentSubSection: 0,
};
const initialPersonalInputDetails = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
};

function App() {
    const [personalState, setPersonalState] = useState(initialPersonalState);
    const [educationState, setEducationState] = useState(initialEducationState);
    const [experienceState, setExperienceState] = useState(initialExperienceState);
    const [personalInputDetails, setPersonalInputDetails] = useState(initialPersonalInputDetails);
    const [educationInputDetails, setEducationInputDetails] = useState([]);
    const [experienceInputDetails, setExperienceInputDetails] = useState([]);

    function handleShowSection(section) {
        setPersonalState((prevState) => ({
            ...prevState,
            showSection: section === 'Personal' ? !prevState.showSection : false,
        }));
        setEducationState((prevState) => ({
            ...prevState,
            showSection: section === 'Education' ? !prevState.showSection : false,
        }));
        setExperienceState((prevState) => ({
            ...prevState,
            showSection: section === 'Experience' ? !prevState.showSection : false,
        }));
    }

    function handleShowSubSection(setSectionState, index) {
        setSectionState((prevState) => ({
            ...prevState,
            showSubSection: !prevState.showSubSection,
            currentSubSection: index,
        }));
    }

    return (
        <>
            <div className='user-input-container personal'>
                <SectionHeader section={personalState} handleShowSection={handleShowSection} />
                <PersonalSection
                    section={personalState}
                    personalInputDetails={personalInputDetails}
                    setPersonalInputDetails={setPersonalInputDetails}
                    handleShowSection={handleShowSection}
                    initialPersonalInputDetails={initialPersonalInputDetails}
                />
            </div>
            <div className='user-input-container education'>
                <SectionHeader section={educationState} handleShowSection={handleShowSection} />
                <EducationSection
                    section={educationState}
                    educationInputDetails={educationInputDetails}
                    setEducationInputDetails={setEducationInputDetails}
                    handleShowSubSection={handleShowSubSection}
                    setSectionState={setEducationState}
                />
            </div>
            <div className='user-input-container experience'>
                <SectionHeader section={experienceState} handleShowSection={handleShowSection} />
                <ExperienceSection
                    section={experienceState}
                    experienceInputDetails={experienceInputDetails}
                    setExperienceInputDetails={setExperienceInputDetails}
                    handleShowSubSection={handleShowSubSection}
                    setSectionState={setExperienceState}
                />
            </div>
            <OutputCv
                personalInputDetails={personalInputDetails}
                educationInputDetails={educationInputDetails}
                experienceInputDetails={experienceInputDetails}
            />
        </>
    );
}

function SectionHeader({ section, handleShowSection }) {
    return (
        <button
            type='button'
            className='user-input-child section-header'
            onClick={() => {
                handleShowSection(section.name);
            }}>
            {section.name}
            <span className='ion-icon-drop-down'>
                <ion-icon name={`chevron-${section.showSection ? 'up' : 'down'}-outline`}></ion-icon>
            </span>
        </button>
    );
}

export default App;
