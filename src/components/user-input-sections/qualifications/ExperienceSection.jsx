import SubSectionButtons from './shared/SubSectionButtons';
import InputButtons from '../shared/InputButtons';

class EmptyExperienceInputDetails {
    constructor() {
        this.companyName = '';
        this.jobTitle = '';
        this.startPeriod = '';
        this.endPeriod = '';
        this.location = '';
        this.jobDescription = '';
        this.key = self.crypto.randomUUID();
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
            newDetails.push(new EmptyExperienceInputDetails());
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
            currentSubSection === index ? new EmptyExperienceInputDetails() : { ...elem }
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
    function handleSubmit(e) {
        e.preventDefault();
        handleShowSubSection(setSectionState, 0);
    }
    return (
        !section.showSubSection && (
            <form className='user-input-container experience-form' onSubmit={handleSubmit}>
                <Input
                    id='company-name'
                    label='Company/Employer:'
                    propertyName='companyName'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='location'
                    label='Location:'
                    propertyName='location'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='job-title'
                    label='Job Title:'
                    propertyName='jobTitle'
                    experienceInputDetails={experienceInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <div className='user-input period'>
                    <label htmlFor='start-period'>Period:</label>
                    <div className='period-container'>
                        <input
                            type='month'
                            id='start-period'
                            value={experienceInputDetails.startPeriod}
                            onChange={(e) => {
                                handleInputDetailsChange(e, section.currentSubSection, 'startPeriod');
                            }}
                        />
                        <label htmlFor='end-period' className='ion-icon-period-arrow'>
                            <ion-icon name='arrow-forward-outline'></ion-icon>
                        </label>
                        <input
                            type='month'
                            id='end-period'
                            value={experienceInputDetails.endPeriod}
                            onChange={(e) => {
                                handleInputDetailsChange(e, section.currentSubSection, 'endPeriod');
                            }}
                        />
                    </div>
                </div>
                <div className='user-input job-description'>
                    <label htmlFor='job-description'>Job Description:</label>
                    <textarea
                        value={experienceInputDetails.jobDescription}
                        data-value={experienceInputDetails.jobDescription}
                        id='job-description'
                        rows='4'
                        onChange={(e) => {
                            handleInputDetailsChange(e, section.currentSubSection, 'jobDescription');
                        }}
                    />
                </div>
                <InputButtons
                    section={section}
                    handleResetInputDetails={handleResetInputDetails}
                    handleDeleteInputDetails={handleDeleteInputDetails}
                    handleShowSubSection={handleShowSubSection}
                    setSectionState={setSectionState}
                />
            </form>
        )
    );
}

function Input({ id, label, propertyName, experienceInputDetails, handleInputDetailsChange, section }) {
    return (
        <div className={`user-input ${id}`}>
            <label htmlFor={id}>{label}</label>
            <input
                type='text'
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
