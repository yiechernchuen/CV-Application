import SubSectionButtons from './shared/SubSectionButtons';
import InputButtons from '../shared/InputButtons';

class InitialEducationInputDetails {
    constructor(key) {
        this.universityName = '';
        this.location = '';
        this.course = '';
        this.startPeriod = '';
        this.endPeriod = '';
        this.awards = '';
        this.cgpa = '';
        this.key = key;
    }
}

function EducationSection({
    section,
    handleShowSubSection,
    setSectionState,
    educationInputDetails,
    setEducationInputDetails,
}) {
    function handleInputDetailsChange(e, currentSubSection, inputPropertyName) {
        if (e.currentTarget.classList[0] === 'add-sub-section-btn') {
            const newDetails = educationInputDetails.map((elem) => ({ ...elem }));
            newDetails.push(new InitialEducationInputDetails(self.crypto.randomUUID()));
            setEducationInputDetails(newDetails);
            return;
        }
        const newDetails = educationInputDetails.map((elem, index) =>
            currentSubSection === index ? { ...elem, [inputPropertyName]: e.target.value } : { ...elem }
        );
        setEducationInputDetails(newDetails);
    }

    function handleResetInputDetails(currentSubSection) {
        const newDetails = educationInputDetails.map((elem, index) =>
            currentSubSection === index ? new InitialEducationInputDetails(self.crypto.randomUUID()) : { ...elem }
        );
        setEducationInputDetails(newDetails);
    }

    function handleDeleteInputDetails(currentSubSection) {
        const newDetails = educationInputDetails.map((elem) => ({ ...elem }));
        newDetails.splice(currentSubSection, 1);
        setEducationInputDetails(newDetails);
    }

    return (
        <>
            <SubSectionButtons
                section={section}
                sectionInputDetails={educationInputDetails}
                handleShowSubSection={handleShowSubSection}
                handleInputDetailsChange={handleInputDetailsChange}
                setSectionState={setSectionState}
            />
            <EducationInput
                section={section}
                handleShowSubSection={handleShowSubSection}
                handleInputDetailsChange={handleInputDetailsChange}
                handleResetInputDetails={handleResetInputDetails}
                handleDeleteInputDetails={handleDeleteInputDetails}
                educationInputDetails={educationInputDetails[section.currentSubSection]}
                setSectionState={setSectionState}
            />
        </>
    );
}

function EducationInput({
    section,
    handleShowSubSection,
    setSectionState,
    educationInputDetails,
    handleInputDetailsChange,
    handleResetInputDetails,
    handleDeleteInputDetails,
}) {
    return (
        section.showSection &&
        !section.showSubSection && (
            <>
                <Input
                    id='university-name'
                    label='University/Institution:'
                    type='text'
                    propertyName='universityName'
                    educationInputDetails={educationInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />

                <Input
                    id='location'
                    label='Location:'
                    type='text'
                    propertyName='location'
                    educationInputDetails={educationInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />

                <Input
                    id='course'
                    label='Course/Degree:'
                    type='text'
                    propertyName='course'
                    educationInputDetails={educationInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />

                <Input
                    id='start-period'
                    label='Period:'
                    type='month'
                    propertyName='startPeriod'
                    educationInputDetails={educationInputDetails}
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
                    educationInputDetails={educationInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <div className='user-input-child'>
                    <label htmlFor='awards'>Honors/Awards:</label>
                    <textarea
                        id='awards'
                        rows='4'
                        value={educationInputDetails.awards}
                        onChange={(e) => {
                            handleInputDetailsChange(e, section.currentSubSection, 'awards');
                        }}></textarea>
                </div>
                <Input
                    id='cgpa'
                    label='CGPA:'
                    type='email'
                    educationInputDetails={educationInputDetails}
                    propertyName='cgpa'
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
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

function Input({ id, label, type, propertyName, educationInputDetails, handleInputDetailsChange, section }) {
    return (
        <div className='user-input-child'>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={educationInputDetails[propertyName]}
                onChange={(e) => {
                    handleInputDetailsChange(e, section.currentSubSection, propertyName);
                }}
            />
        </div>
    );
}

export default EducationSection;
