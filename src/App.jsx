import { useState } from 'react';
import PersonalSection from './components/user-input-sections/personal/PersonalSection.jsx';
import EducationSection from './components/user-input-sections/qualifications/EducationSection.jsx';
import ExperienceSection from './components/user-input-sections/qualifications/ExperienceSection.jsx';
import OutputCv from './components/output-cv/OutputCv.jsx';

const initialPersonalState = { name: 'Personal', showSection: false };
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
const emptyPersonalInputDetails = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
};
const samplePersonalInputDetails = {
    firstName: 'John',
    lastName: 'Smith',
    phoneNumber: '(555) 123-4567',
    email: 'john.smith@example.com',
    address: '123 Main Street, Apt 4B, Springfield, USA',
};
const sampleEducationInputDetails = [
    {
        universityName: 'Liberty Ridge University',
        location: 'Springfield, USA',
        course: 'Bachelor of Computer Science',
        startPeriod: '2012-10',
        endPeriod: '2016-05',
        awards: "Dean's List, Academic Excellence Award",
        cgpa: '3.85',
        key: self.crypto.randomUUID(),
    },
];
const sampleExperienceInputDetails = [
    {
        companyName: 'DataTech Solutions LLC',
        jobTitle: 'Data Analyst',
        startPeriod: '2016-08',
        endPeriod: '2018-01',
        location: 'Dataville, USA',
        jobDescription:
            "Analyzed large datasets, generated actionable insights, and prepared comprehensive reports for clients. Collaborated proactively to identify opportunities for process improvement, streamline data workflows, and optimize data collection methodologies, ultimately enhancing the organization's data infrastructure.",
        key: self.crypto.randomUUID(),
    },
    {
        companyName: 'Tech Solutions Inc.',
        jobTitle: 'Software Engineer',
        startPeriod: '2018-06',
        endPeriod: `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}`,
        location: 'Techville, USA',
        jobDescription:
            'Developed and maintained web applications, and contributed to the development of innovative software solutions to meet client needs.Collaborated seamlessly with diverse cross-functional teams, fostering a culture of knowledge sharing and innovation',
        key: self.crypto.randomUUID(),
    },
];
let initialPersonalInputDetails = samplePersonalInputDetails;
let initialEducationInputDetails = sampleEducationInputDetails;
let initialExperienceInputDetails = sampleExperienceInputDetails;

if (localStorage.length > 0) {
    initialPersonalInputDetails = JSON.parse(localStorage.getItem('personalInputDetails'));
    initialEducationInputDetails = JSON.parse(localStorage.getItem('educationInputDetails'));
    initialExperienceInputDetails = JSON.parse(localStorage.getItem('experienceInputDetails'));
}

function App() {
    const [personalState, setPersonalState] = useState(initialPersonalState);
    const [educationState, setEducationState] = useState(initialEducationState);
    const [experienceState, setExperienceState] = useState(initialExperienceState);
    const [personalInputDetails, setPersonalInputDetails] = useState(initialPersonalInputDetails);
    const [educationInputDetails, setEducationInputDetails] = useState(initialEducationInputDetails);
    const [experienceInputDetails, setExperienceInputDetails] = useState(initialExperienceInputDetails);
    localStorage.setItem('personalInputDetails', JSON.stringify(personalInputDetails));
    localStorage.setItem('educationInputDetails', JSON.stringify(educationInputDetails));
    localStorage.setItem('experienceInputDetails', JSON.stringify(experienceInputDetails));

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
            <header>
                <ion-icon name='layers'></ion-icon>
                <span className='site-name-part1'>
                    <span className='site-name-part2'>S</span>wift
                    <span className='site-name-part2'>CV</span>
                </span>
            </header>
            <div className='main'>
                <div className='section-container'>
                    <div className='alter-all-inputs-btn-wrapper'>
                        <ResetAllInputs
                            setPersonalState={setPersonalState}
                            setEducationState={setEducationState}
                            setExperienceState={setExperienceState}
                            setPersonalInputDetails={setPersonalInputDetails}
                            setEducationInputDetails={setEducationInputDetails}
                            setExperienceInputDetails={setExperienceInputDetails}
                        />
                        <LoadSampleInputs
                            setEducationState={setEducationState}
                            setExperienceState={setExperienceState}
                            setPersonalInputDetails={setPersonalInputDetails}
                            setEducationInputDetails={setEducationInputDetails}
                            setExperienceInputDetails={setExperienceInputDetails}
                        />
                    </div>
                    <div className={`personal ${personalState.showSection ? 'isActive' : ''}`}>
                        <SectionHeader section={personalState} handleShowSection={handleShowSection} />
                        <PersonalSection
                            section={personalState}
                            personalInputDetails={personalInputDetails}
                            setPersonalInputDetails={setPersonalInputDetails}
                            handleShowSection={handleShowSection}
                            emptyPersonalInputDetails={emptyPersonalInputDetails}
                        />
                    </div>
                    <div className={`education ${educationState.showSection ? 'isActive' : ''}`}>
                        <SectionHeader section={educationState} handleShowSection={handleShowSection} />
                        <EducationSection
                            section={educationState}
                            educationInputDetails={educationInputDetails}
                            setEducationInputDetails={setEducationInputDetails}
                            handleShowSubSection={handleShowSubSection}
                            setSectionState={setEducationState}
                        />
                    </div>
                    <div className={`experience ${experienceState.showSection ? 'isActive' : ''}`}>
                        <SectionHeader section={experienceState} handleShowSection={handleShowSection} />
                        <ExperienceSection
                            section={experienceState}
                            experienceInputDetails={experienceInputDetails}
                            setExperienceInputDetails={setExperienceInputDetails}
                            handleShowSubSection={handleShowSubSection}
                            setSectionState={setExperienceState}
                        />
                    </div>
                </div>
                <OutputCv
                    personalInputDetails={personalInputDetails}
                    educationInputDetails={educationInputDetails}
                    experienceInputDetails={experienceInputDetails}
                />
            </div>
            <footer>
                Copyright &copy; 2023 yiechernchuen{' '}
                <a href='https://github.com/yiechernchuen' className='ion-icon-github' target='_blank' rel='noreferrer'>
                    <ion-icon name='logo-github'></ion-icon>
                </a>
            </footer>
        </>
    );
}

function SectionHeader({ section, handleShowSection }) {
    return (
        <button
            type='button'
            className='section-header'
            onClick={() => {
                handleShowSection(section.name);
            }}>
            {section.name}
            <span className='ion-icon-drop-down'>
                <ion-icon name='chevron-down-outline' data-show-section={section.showSection}></ion-icon>
            </span>
        </button>
    );
}

function ResetAllInputs({
    setEducationState,
    setExperienceState,
    setPersonalInputDetails,
    setEducationInputDetails,
    setExperienceInputDetails,
}) {
    return (
        <button
            type='button'
            className='reset-all-inputs-btn'
            onClick={() => {
                setEducationState((prevEduState) => ({ ...prevEduState, currentSubSection: 0, showSubSection: true }));
                setExperienceState((prevExpState) => ({ ...prevExpState, currentSubSection: 0, showSubSection: true }));
                setPersonalInputDetails(emptyPersonalInputDetails);
                setEducationInputDetails([]);
                setExperienceInputDetails([]);
            }}>
            Reset CV
        </button>
    );
}

function LoadSampleInputs({
    setEducationState,
    setExperienceState,
    setPersonalInputDetails,
    setEducationInputDetails,
    setExperienceInputDetails,
}) {
    return (
        <button
            type='button'
            className='load-sample-inputs-btn'
            onClick={() => {
                setEducationState((prevEduState) => ({ ...prevEduState, currentSubSection: 0 }));
                setExperienceState((prevExpState) => ({
                    ...prevExpState,
                    currentSubSection: prevExpState.currentSubSection > 1 ? 0 : prevExpState.currentSubSection,
                }));
                setPersonalInputDetails(samplePersonalInputDetails);
                setEducationInputDetails(sampleEducationInputDetails);
                setExperienceInputDetails(sampleExperienceInputDetails);
            }}>
            Load Sample
        </button>
    );
}

export default App;
