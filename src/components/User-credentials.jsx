import { useState } from 'react';
import {
    initialFormState,
    initialPersonalDetails,
    initialEducationDetails,
    initialExperienceDetails,
} from './Data.jsx';

// Add local storage

function CreateCvApp() {
    const [formState, setFormState] = useState(initialFormState);
    const [personalDetails, setPersonalDetails] = useState(initialPersonalDetails);
    const [educationDetails, setEducationDetails] = useState(initialEducationDetails);
    const [experienceDetails, setExperienceDetails] = useState(initialExperienceDetails);

    function handleExpandForm(e, section, isActive) {
        const newFormState = formState.map((elem, index) => {
            if (elem.section === section) {
                if (isActive) return { ...elem, expandForm: false };
                return { ...elem, expandForm: true };
            }
            return { ...elem, expandForm: false };
        });
        setFormState(newFormState);
    }

    function handleSaveForm(e, section) {
        const newFormState = formState.map((elem, index) =>
            elem.section === section ? { ...elem, saveForm: !elem.saveForm } : { ...elem }
        );
        setFormState(newFormState);
    }

    return (
        <>
            <div>
                <CreatePersonalForm
                    isActive={formState[0].expandForm}
                    handleExpandForm={handleExpandForm}
                    isSaved={formState[0].saveForm}
                    handleSaveForm={handleSaveForm}
                    personalDetails={personalDetails}
                    setPersonalDetails={setPersonalDetails}
                />
                <CreateEducationForm
                    isActive={formState[1].expandForm}
                    handleExpandForm={handleExpandForm}
                    isSaved={formState[1].saveForm}
                    handleSaveForm={handleSaveForm}
                    educationDetails={educationDetails}
                    setEducationDetails={setEducationDetails}
                />
                <CreateExperienceForm
                    isActive={formState[2].expandForm}
                    handleExpandForm={handleExpandForm}
                    isSaved={formState[2].saveForm}
                    handleSaveForm={handleSaveForm}
                    experienceDetails={experienceDetails}
                    setExperienceDetails={setExperienceDetails}
                />
            </div>
            <OutputCv personal={personalDetails} education={educationDetails} experience={experienceDetails} />
        </>
    );
}

function CreatePersonalForm({
    personalDetails,
    setPersonalDetails,
    isActive,
    handleExpandForm,
    isSaved,
    handleSaveForm,
}) {
    function handlePersonalDetailsChange(e) {
        const inputName = e.target.id;
        setPersonalDetails({ ...personalDetails, [inputName]: e.target.value });
    }

    function handlePersonalDetailsReset(e) {
        setPersonalDetails(initialPersonalDetails);
    }

    return (
        <div className='user-input-container personal'>
            <div className='user-input-child header'>
                <p className='title'>Personal Details</p>
                <ion-icon
                    name={`chevron-${isActive ? 'up' : 'down'}-outline`}
                    onClick={(e) => {
                        handleExpandForm(e, 'Personal Details', isActive);
                    }}></ion-icon>
            </div>
            {isActive && (
                <>
                    <div className='user-input-child'>
                        <label htmlFor='firstName'>First Name:</label>
                        <input
                            type='text'
                            id='firstName'
                            value={personalDetails.firstName}
                            onChange={handlePersonalDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            type='text'
                            id='lastName'
                            value={personalDetails.lastName}
                            onChange={handlePersonalDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='phoneNumber'>Phone Number:</label>
                        <input
                            type='text'
                            id='phoneNumber'
                            value={personalDetails.phoneNumber}
                            onChange={handlePersonalDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            value={personalDetails.email}
                            onChange={handlePersonalDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='address'>Address:</label>
                        <textarea
                            id='address'
                            rows='4'
                            value={personalDetails.address}
                            onChange={handlePersonalDetailsChange}
                            disabled={isSaved}></textarea>
                    </div>
                    <CreateFormButtons
                        section='Personal Details'
                        isSaved={isSaved}
                        handleSaveForm={handleSaveForm}
                        handleResetInput={handlePersonalDetailsReset}
                    />
                </>
            )}
        </div>
    );
}

function CreateEducationForm({
    isActive,
    handleExpandForm,
    isSaved,
    handleSaveForm,
    educationDetails,
    setEducationDetails,
}) {
    function handleEducationDetailsChange(e) {
        const inputName = e.target.id;
        setEducationDetails({ ...educationDetails, [inputName]: e.target.value });
    }

    function handleEducationDetailsReset(e) {
        setEducationDetails(initialEducationDetails);
    }

    return (
        <div className='user-input-container education'>
            <div className='user-input-child header'>
                <p className='title'>Education</p>
                <ion-icon
                    name={`chevron-${isActive ? 'up' : 'down'}-outline`}
                    onClick={(e) => {
                        handleExpandForm(e, 'Education', isActive);
                    }}></ion-icon>
            </div>
            {isActive && (
                <>
                    <div className='user-input-child'>
                        <label htmlFor='institution-name'>University/Institution Name:</label>
                        <input
                            type='text'
                            id='universityName'
                            value={educationDetails.universityName}
                            onChange={handleEducationDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='location'>Location:</label>
                        <input
                            type='text'
                            id='location'
                            value={educationDetails.location}
                            onChange={handleEducationDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='course'>Course/Degree:</label>
                        <input
                            type='text'
                            id='course'
                            value={educationDetails.course}
                            onChange={handleEducationDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='startPeriod'>Period:</label>
                        <div>
                            <input
                                type='month'
                                id='startPeriod'
                                value={educationDetails.startPeriod}
                                onInput={handleEducationDetailsChange}
                                disabled={isSaved}
                            />
                            <label htmlFor='endPeriod'>
                                <ion-icon name='arrow-forward-outline'></ion-icon>
                            </label>
                            <input
                                type='month'
                                id='endPeriod'
                                value={educationDetails.endPeriod}
                                onInput={handleEducationDetailsChange}
                                disabled={isSaved}
                            />
                        </div>
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='awards'>Honors/Awards:</label>
                        <textarea
                            id='awards'
                            rows='4'
                            value={educationDetails.awards}
                            onChange={handleEducationDetailsChange}
                            disabled={isSaved}></textarea>
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='cgpa'>CGPA:</label>
                        <input
                            type='email'
                            id='cgpa'
                            value={educationDetails.cgpa}
                            onChange={handleEducationDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <CreateFormButtons
                        section='Education'
                        isSaved={isSaved}
                        handleSaveForm={handleSaveForm}
                        handleResetInput={handleEducationDetailsReset}
                    />
                </>
            )}
        </div>
    );
}

function CreateExperienceForm({
    isActive,
    handleExpandForm,
    isSaved,
    handleSaveForm,
    experienceDetails,
    setExperienceDetails,
}) {
    function handleExperienceDetailsChange(e) {
        const inputName = e.target.id;
        setExperienceDetails({ ...experienceDetails, [inputName]: e.target.value });
    }

    function handleExperienceDetailsReset(e) {
        setExperienceDetails(initialExperienceDetails);
    }

    return (
        <div className='user-input-container experience'>
            <div className='user-input-child header'>
                <p className='title'>Experience</p>
                <ion-icon
                    name={`chevron-${isActive ? 'up' : 'down'}-outline`}
                    onClick={(e) => {
                        handleExpandForm(e, 'Experience', isActive);
                    }}></ion-icon>
            </div>
            {isActive && (
                <>
                    <div className='user-input-child'>
                        <label htmlFor='jobTitle'>Job Title:</label>
                        <input
                            type='text'
                            id='jobTitle'
                            value={experienceDetails.jobTitle}
                            onChange={handleExperienceDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='companyName'>Company/Employer:</label>
                        <input
                            type='text'
                            id='companyName'
                            value={experienceDetails.companyName}
                            onChange={handleExperienceDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='startPeriod'>Period:</label>
                        <div>
                            <input
                                type='month'
                                id='startPeriod'
                                value={experienceDetails.startPeriod}
                                onInput={handleExperienceDetailsChange}
                                disabled={isSaved}
                            />
                            <label htmlFor='endPeriod'>
                                <ion-icon name='arrow-forward-outline'></ion-icon>
                            </label>
                            <input
                                type='month'
                                id='endPeriod'
                                value={experienceDetails.endPeriod}
                                onInput={handleExperienceDetailsChange}
                                disabled={isSaved}
                            />
                        </div>
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='location'>Location:</label>
                        <input
                            type='text'
                            id='location'
                            value={experienceDetails.location}
                            onChange={handleExperienceDetailsChange}
                            disabled={isSaved}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='jobDescription'>Job Description:</label>
                        <textarea
                            id='jobDescription'
                            rows='4'
                            value={experienceDetails.jobDescription}
                            onChange={handleExperienceDetailsChange}
                            disabled={isSaved}></textarea>
                    </div>
                    <CreateFormButtons
                        section='Experience'
                        isSaved={isSaved}
                        handleSaveForm={handleSaveForm}
                        handleResetInput={handleExperienceDetailsReset}
                    />
                </>
            )}
        </div>
    );
}

function CreateFormButtons({ section, isSaved, handleSaveForm, handleResetInput }) {
    return (
        <div className='btnWrapper'>
            {isSaved && (
                <button
                    type='button'
                    className='edit-Btn'
                    onClick={(e) => {
                        handleSaveForm(e, section);
                    }}>
                    <ion-icon name='create-outline' size='large'></ion-icon>
                </button>
            )}

            {!isSaved && (
                <>
                    <button
                        type='button'
                        className='reset-Btn'
                        onClick={(e) => {
                            handleResetInput(e, section);
                        }}>
                        <ion-icon name='refresh-outline' size='large'></ion-icon>
                    </button>

                    <button
                        type='button'
                        className='save-Btn'
                        onClick={(e) => {
                            handleSaveForm(e, section);
                        }}>
                        <ion-icon name='checkmark' size='large'></ion-icon>
                    </button>
                </>
            )}
        </div>
    );
}

function OutputCv({ personal, education, experience }) {
    const personalArr = Object.entries(personal);
    const educationArr = Object.entries(education);
    const experienceArr = Object.entries(experience);
    const fullNameArr = personalArr.splice(0, 2).flat();
    personalArr.unshift(['Full Name', fullNameArr[1] + ' ' + fullNameArr[3]]);

    return (
        <div className='cv-container'>
            <div>
                {personalArr.map((elem, index) => (
                    <p key={elem[0]}>{elem[1]}</p>
                ))}
            </div>
            <div>{Object.values(education).join('') && <p>Education</p>}</div>
            <div>
                {educationArr.map((elem, index) =>
                    elem[0] === 'startPeriod' && elem[1] ? (
                        <p key={elem[0]}>{elem[1]}&nbsp;-&nbsp;</p>
                    ) : (
                        <p key={elem[0]}>{elem[1]}</p>
                    )
                )}
            </div>
            <div>
                <div>{Object.values(experience).join('') && <p>Experience</p>}</div>
            </div>
            <div>
                {experienceArr.map((elem, index) =>
                    elem[0] === 'startPeriod' && elem[1] ? (
                        <p key={elem[0]}>{elem[1]}&nbsp;-&nbsp;</p>
                    ) : (
                        <p key={elem[0]}>{elem[1]}</p>
                    )
                )}
            </div>
        </div>
    );
}

export { CreateCvApp };
