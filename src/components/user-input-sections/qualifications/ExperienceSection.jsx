import SubSectionButtons from './shared/SubSectionButtons';
import InputButtons from '../shared/InputButtons';

class InitialExperienceInputDetails {
    constructor(key) {
        this.companyName = '';
        this.jobTitle = '';
        this.startPeriod = '';
        this.endPeriod = '';
        this.location = '';
        this.jobDescription = '';
        this.key = key;
    }
}

function ExperienceSection({
    section,
    experienceInputDetails,
    setSectionState,
    setExperienceInputDetails,
    handleShowSubSection,
}) {
    function handleInputDetailsChange(e, currentSubSection, inputPropertyName) {
        if (e.currentTarget.classList[0] === 'add-sub-section-btn') {
            const newDetails = experienceInputDetails.map((elem) => ({ ...elem }));
            newDetails.push(new InitialExperienceInputDetails(self.crypto.randomUUID()));
            setExperienceInputDetails(newDetails);
            return;
        }
        const newDetails = experienceInputDetails.map((elem, index) =>
            currentSubSection === index ? { ...elem, [inputPropertyName]: e.target.value } : { ...elem }
        );
        setExperienceInputDetails(newDetails);
    }

    function handleResetInputDetails(currentSubSection) {
        const newDetails = experienceInputDetails.map((elem, index) =>
            currentSubSection === index ? new InitialExperienceInputDetails(self.crypto.randomUUID()) : { ...elem }
        );
        setExperienceInputDetails(newDetails);
    }

    function handleDeleteInputDetails(currentSubSection) {
        const newDetails = experienceInputDetails.map((elem) => ({ ...elem }));
        newDetails.splice(currentSubSection, 1);
        setExperienceInputDetails(newDetails);
    }

    return (
        <>
            <SubSectionButtons
                section={section}
                sectionInputDetails={experienceInputDetails}
                handleShowSubSection={handleShowSubSection}
                handleInputDetailsChange={handleInputDetailsChange}
                setSectionState={setSectionState}
            />
            <ExperienceInput
                section={section}
                experienceInputDetails={experienceInputDetails[section.currentSubSection]}
                handleShowSubSection={handleShowSubSection}
                handleInputDetailsChange={handleInputDetailsChange}
                handleResetInputDetails={handleResetInputDetails}
                handleDeleteInputDetails={handleDeleteInputDetails}
                setSectionState={setSectionState}
            />
        </>
    );
}

function ExperienceInput({
    section,
    handleShowSubSection,
    setSectionState,
    experienceInputDetails,
    handleInputDetailsChange,
    handleResetInputDetails,
    handleDeleteInputDetails,
}) {
    return (
        section.showSection &&
        !section.showSubSection && (
            <>
                <Input
                    id='company-name'
                    label='Company/Employer:'
                    type='text'
                    propertyName='companyName'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='job-title'
                    label='Job Title:'
                    type='text'
                    propertyName='jobTitle'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='location'
                    label='Location:'
                    type='text'
                    propertyName='location'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='start-period'
                    label='Period:'
                    type='month'
                    propertyName='startPeriod'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='end-period'
                    label={
                        <span className='icon-icon-period-arrow'>
                            <ion-icon name='arrow-forward-outline'></ion-icon>
                        </span>
                    }
                    type='month'
                    propertyName='endPeriod'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <div className='user-input-child'>
                    <label htmlFor='job-description'>Job Description:</label>
                    <textarea
                        id='job-description'
                        rows='4'
                        value={experienceInputDetails.jobDescription}
                        onChange={(e) => {
                            handleInputDetailsChange(e, section.currentSubSection, 'jobDescription');
                        }}></textarea>
                </div>
                <InputButtons
                    section={section}
                    handleResetInputDetails={handleResetInputDetails}
                    handleDeleteInputDetails={handleDeleteInputDetails}
                    handleShowSubSection={handleShowSubSection}
                    setSectionState={setSectionState}
                />
            </>
        )
    );
}

function Input({ id, label, type, propertyName, experienceInputDetails, handleInputDetailsChange, section }) {
    return (
        <div className='user-input-child'>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={experienceInputDetails[propertyName]}
                onChange={(e) => {
                    handleInputDetailsChange(e, section.currentSubSection, propertyName);
                }}
            />
        </div>
    );
}

export default ExperienceSection;
