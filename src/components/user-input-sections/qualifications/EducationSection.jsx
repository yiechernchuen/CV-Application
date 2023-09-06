import SubSectionButtons from './shared/SubSectionButtons';
import InputButtons from '../shared/InputButtons';

class EmptyEducationInputDetails {
    constructor() {
        this.universityName = '';
        this.location = '';
        this.course = '';
        this.startPeriod = '';
        this.endPeriod = '';
        this.awards = '';
        this.cgpa = '';
        this.key = self.crypto.randomUUID();
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
            newDetails.push(new EmptyEducationInputDetails());
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
            currentSubSection === index ? new EmptyEducationInputDetails() : { ...elem }
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
    function handleSubmit(e) {
        e.preventDefault();
        handleShowSubSection(setSectionState, 0);
    }

    return (
        !section.showSubSection && (
            <form className='user-input-container education-form' onSubmit={handleSubmit}>
                <Input
                    id='university-name'
                    label='University/Institution:'
                    propertyName='universityName'
                    educationInputDetails={educationInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='location'
                    label='Location:'
                    propertyName='location'
                    educationInputDetails={educationInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <Input
                    id='course'
                    label='Course/Degree:'
                    propertyName='course'
                    educationInputDetails={educationInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <div className='user-input period'>
                    <label htmlFor='start-period'>Period:</label>
                    <div className='period-container'>
                        <input
                            type='month'
                            id='start-period'
                            value={educationInputDetails.startPeriod}
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
                            value={educationInputDetails.endPeriod}
                            onChange={(e) => {
                                handleInputDetailsChange(e, section.currentSubSection, 'endPeriod');
                            }}
                        />
                    </div>
                </div>
                <Input
                    id='cgpa'
                    label='CGPA:'
                    educationInputDetails={educationInputDetails}
                    propertyName='cgpa'
                    handleInputDetailsChange={handleInputDetailsChange}
                    section={section}
                />
                <div className='user-input awards'>
                    <label htmlFor='awards'>Honors/Awards:</label>
                    <textarea
                        data-value={educationInputDetails.awards}
                        value={educationInputDetails.awards}
                        id='awards'
                        rows='4'
                        onChange={(e) => {
                            handleInputDetailsChange(e, section.currentSubSection, 'awards');
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

function Input({ id, label, propertyName, educationInputDetails, handleInputDetailsChange, section }) {
    return (
        <div className={`user-input ${id}`}>
            <label htmlFor={id}>{label}</label>
            <input
                type='text'
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
