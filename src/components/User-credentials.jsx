import { useState } from 'react';
import {
    initialFormState,
    personalForm,
    personalInputAttributes,
    EducationForm,
    educationInputAttributes,
    ExperienceForm,
    experienceInputAttributes,
} from './Data.jsx';

function CreateCvApp() {
    const [formState, setFormState] = useState(initialFormState);
    const [personalDetails, setPersonalDetails] = useState(personalForm);
    const [educationDetails, setEducationDetails] = useState([new EducationForm(self.crypto.randomUUID())]);
    const [experienceDetails, setExperienceDetails] = useState([new ExperienceForm(self.crypto.randomUUID())]);

    function handleShowSection(e, section, showSection) {
        const newFormState = formState.map((elem, index) => {
            if (elem.section === section) {
                if (showSection) return { ...elem, showSection: false };
                return { ...elem, showSection: true };
            }
            return { ...elem, showSection: false };
        });
        setFormState(newFormState);
    }

    function handleShowSubSection(e, section, index) {
        const newFormState = formState.map((elem) =>
            elem.section === section
                ? {
                      ...elem,
                      showSubSection: !elem.showSubSection,
                      currentSubSection: index,
                  }
                : { ...elem }
        );
        setFormState(newFormState);
    }

    function handleDetailsChange(
        e,
        section,
        sectionDetails,
        currentSubSection,
        setDetails,
        newSubSection,
        inputPropertyName
    ) {
        if (section === 'Personal Details') {
            setDetails({ ...sectionDetails, [inputPropertyName]: e.target.value });
            return;
        }
        if (e.target.classList[0] === 'add-btn') {
            const newDetails = sectionDetails.map((elem, index) => ({ ...elem }));
            newDetails.push(new newSubSection(self.crypto.randomUUID()));
            setDetails(newDetails);
            return;
        }
        const newDetails = sectionDetails.map((elem, index) =>
            currentSubSection === index ? { ...elem, [inputPropertyName]: e.target.value } : { ...elem }
        );
        setDetails(newDetails);
    }

    function handleResetDetails(e, section, sectionDetails, currentSubSection, setDetails, newSubSection) {
        if (section === 'Personal Details') {
            setDetails(personalForm);
            return;
        }
        const newDetails = sectionDetails.map((elem, index) =>
            currentSubSection === index ? new newSubSection(self.crypto.randomUUID()) : { ...elem }
        );
        setDetails(newDetails);
    }

    function handleDeleteDetails(e, section, sectionDetails, currentSubSection, setDetails) {
        const newDetails = sectionDetails.map((elem, index) => ({ ...elem }));
        newDetails.splice(currentSubSection, 1);
        setDetails(newDetails);
    }

    return (
        <>
            <div>
                <CreateInputSection
                    section={formState[0].section}
                    showSection={formState[0].showSection}
                    hasSubSection={formState[0].hasSubSection}
                    sectionDetails={personalDetails}
                    sectionInputAttributes={personalInputAttributes}
                    handleShowSection={handleShowSection}
                    setSectionDetails={setPersonalDetails}
                    handleDetailsChange={handleDetailsChange}
                    handleResetDetails={handleResetDetails}
                />
                <CreateInputSection
                    section={formState[1].section}
                    showSection={formState[1].showSection}
                    hasSubSection={formState[1].hasSubSection}
                    showSubSection={formState[1].showSubSection}
                    currentSubSection={formState[1].currentSubSection}
                    sectionDetails={educationDetails}
                    sectionInputAttributes={educationInputAttributes}
                    newSubSection={EducationForm}
                    setSectionDetails={setEducationDetails}
                    handleDetailsChange={handleDetailsChange}
                    handleShowSection={handleShowSection}
                    handleShowSubSection={handleShowSubSection}
                    handleResetDetails={handleResetDetails}
                    handleDeleteDetails={handleDeleteDetails}
                />
                <CreateInputSection
                    section={formState[2].section}
                    showSection={formState[2].showSection}
                    hasSubSection={formState[2].hasSubSection}
                    showSubSection={formState[2].showSubSection}
                    currentSubSection={formState[2].currentSubSection}
                    sectionDetails={experienceDetails}
                    sectionInputAttributes={experienceInputAttributes}
                    newSubSection={ExperienceForm}
                    setSectionDetails={setExperienceDetails}
                    handleDetailsChange={handleDetailsChange}
                    handleShowSection={handleShowSection}
                    handleShowSubSection={handleShowSubSection}
                    handleResetDetails={handleResetDetails}
                    handleDeleteDetails={handleDeleteDetails}
                />
            </div>
            <OutputCv personal={personalDetails} education={educationDetails} experience={experienceDetails} />
        </>
    );
}

function CreateInputSection({
    section,
    showSection,
    hasSubSection,
    showSubSection,
    currentSubSection,
    sectionDetails,
    newSubSection,
    sectionInputAttributes,
    setSectionDetails,
    handleDetailsChange,
    handleShowSection,
    handleShowSubSection,
    handleResetDetails,
    handleDeleteDetails,
}) {
    return (
        <div className='user-input-container'>
            <button
                type='button'
                className='user-input-child header'
                onClick={(e) => {
                    handleShowSection(e, section, showSection);
                }}>
                {section} <ion-icon name={`chevron-${showSection ? 'up' : 'down'}-outline`}></ion-icon>
            </button>
            {showSection && hasSubSection && showSubSection && (
                <div className='user-input-child'>
                    {sectionDetails.map((elem, index) => (
                        <button
                            key={elem.key}
                            onClick={(e) => {
                                handleShowSubSection(e, section, index);
                            }}>
                            {section === 'Education' &&
                                (elem.universityName || (
                                    <>
                                        <ion-icon name='library-outline'></ion-icon>
                                        &nbsp;&nbsp;{section + ' ' + (index + 1)}
                                    </>
                                ))}
                            {section === 'Experience' &&
                                (elem.companyName || (
                                    <>
                                        <ion-icon name='globe-outline'></ion-icon>
                                        &nbsp;&nbsp;{section + ' ' + (index + 1)}
                                    </>
                                ))}
                        </button>
                    ))}
                    <button
                        className='add-btn'
                        onClick={(e) => {
                            handleDetailsChange(
                                e,
                                section,
                                sectionDetails,
                                currentSubSection,
                                setSectionDetails,
                                newSubSection
                            );
                            handleShowSubSection(e, section, sectionDetails.length);
                        }}>
                        <ion-icon name='add-circle-outline'></ion-icon>&nbsp; {section}
                    </button>
                </div>
            )}
            {showSection && !showSubSection && (
                <>
                    {sectionInputAttributes.map((elem, index) => (
                        <div className={`user-input-child ${elem.id}`} key={elem.id}>
                            <label htmlFor={elem.labelFor}>{elem.labelContent}</label>
                            {elem.type === 'textarea' ? (
                                <textarea
                                    id={elem.id}
                                    rows={elem.rows}
                                    value={
                                        hasSubSection
                                            ? sectionDetails[currentSubSection][elem.propertyName]
                                            : sectionDetails[elem.propertyName]
                                    }
                                    onChange={(e) => {
                                        handleDetailsChange(
                                            e,
                                            section,
                                            sectionDetails,
                                            currentSubSection,
                                            setSectionDetails,
                                            newSubSection,
                                            elem.propertyName
                                        );
                                    }}></textarea>
                            ) : (
                                <input
                                    type={elem.type}
                                    id={elem.id}
                                    value={
                                        hasSubSection
                                            ? sectionDetails[currentSubSection][elem.propertyName]
                                            : sectionDetails[elem.propertyName]
                                    }
                                    onChange={(e) => {
                                        handleDetailsChange(
                                            e,
                                            section,
                                            sectionDetails,
                                            currentSubSection,
                                            setSectionDetails,
                                            newSubSection,
                                            elem.propertyName
                                        );
                                    }}
                                />
                            )}
                        </div>
                    ))}
                    <div className='btnWrapper'>
                        {section !== 'Personal Details' && (
                            <button
                                type='button'
                                className='delete-btn'
                                onClick={(e) => {
                                    handleDeleteDetails(
                                        e,
                                        section,
                                        sectionDetails,
                                        currentSubSection,
                                        setSectionDetails
                                    );
                                    handleShowSubSection(e, section, sectionDetails.length);
                                }}>
                                <ion-icon name='trash-outline' size='large'></ion-icon>
                            </button>
                        )}
                        <button
                            type='button'
                            className='reset-btn'
                            onClick={(e) => {
                                handleResetDetails(
                                    e,
                                    section,
                                    sectionDetails,
                                    currentSubSection,
                                    setSectionDetails,
                                    newSubSection
                                );
                            }}>
                            <ion-icon name='refresh-outline' size='large'></ion-icon>
                        </button>
                        <button
                            type='button'
                            className='save-btn'
                            onClick={(e) => {
                                section === 'Personal Details'
                                    ? handleShowSection(e, section, showSection)
                                    : handleShowSubSection(e, section, sectionDetails.length);
                            }}>
                            <ion-icon name='checkmark' size='large'></ion-icon>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

function OutputCv({ personal, education, experience }) {
    const personalArr = Object.entries(personal);
    const fullNameArr = personalArr.splice(0, 2).flat();
    personalArr.unshift(['Full Name', fullNameArr[1] + ' ' + fullNameArr[3]]);
    const educationArr = education.map((elem, index) => Object.entries(elem));
    const experienceArr = experience.map((elem, index) => Object.entries(elem));

    return (
        <div className='cv-container'>
            <div className='cv-personal-container'>
                {personalArr.map((elem, index) => (
                    <p key={elem[0]}>{elem[1]}</p>
                ))}
            </div>
            <div>Education</div>
            <div className='cv-education-container'>
                {educationArr.map((arr, index) => (
                    <div className='cv-education-list' key={arr[arr.length - 1][1]}>
                        {arr.map(
                            (list, index) =>
                                list[0] !== 'key' &&
                                (list[0] === 'startPeriod' && list[1] ? (
                                    <p key={list[0]}>{list[1]}&nbsp;-&nbsp;</p>
                                ) : (
                                    <p key={list[0]}>{list[1]}</p>
                                ))
                        )}
                    </div>
                ))}
            </div>
            <div>
                <div>Experience</div>
            </div>
            <div className='cv-experience-container'>
                {experienceArr.map((arr, index) => (
                    <div className='cv-experience-list' key={arr[arr.length - 1][1]}>
                        {arr.map(
                            (list, index) =>
                                list[0] !== 'key' &&
                                (list[0] === 'startPeriod' && list[1] ? (
                                    <p key={list[0]}>{list[1]}&nbsp;-&nbsp;</p>
                                ) : (
                                    <p key={list[0]}>{list[1]}</p>
                                ))
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { CreateCvApp };
