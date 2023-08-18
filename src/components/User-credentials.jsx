import { useState } from 'react';
import {
    initialFormState,
    initialPersonalDetails,
    initialEducationDetails,
    initialExperienceDetails,
} from './Data.jsx';

function CreateUserInputContainer() {
    const [formState, setFormState] = useState(initialFormState);

    function handleExpandInput(e, section, isActive) {
        const newFormState = formState.map((elem, index) => {
            if (elem.section === section) {
                if (isActive) return { ...elem, expandInput: false };
                return { ...elem, expandInput: true };
            }
            return { ...elem, expandInput: false };
        });
        setFormState(newFormState);
    }

    function handleSaveInput(e, section) {
        const newFormState = formState.map((elem, index) =>
            elem.section === section ? { ...elem, saveInput: !elem.saveInput } : { ...elem }
        );
        setFormState(newFormState);
    }

    return (
        <>
            <CreatePersonalInput
                isActive={formState[0].expandInput}
                handleExpandInput={handleExpandInput}
                isSaved={formState[0].saveInput}
                handleSaveInput={handleSaveInput}
            />
            <CreateEducationInput
                isActive={formState[1].expandInput}
                handleExpandInput={handleExpandInput}
                isSaved={formState[1].saveInput}
                handleSaveInput={handleSaveInput}
            />
            <CreateExperienceInput
                isActive={formState[2].expandInput}
                handleExpandInput={handleExpandInput}
                isSaved={formState[2].saveInput}
                handleSaveInput={handleSaveInput}
            />
        </>
    );
}

function CreatePersonalInput({ isActive, handleExpandInput, isSaved, handleSaveInput }) {
    const [personalDetails, setPersonalDetails] = useState(initialPersonalDetails);

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
                    name='chevron-down-outline'
                    onClick={(e) => {
                        handleExpandInput(e, 'Personal Details', isActive);
                    }}></ion-icon>
            </div>
            {isActive && (
                <form>
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
                    <CreateUserInputButtons
                        section='Personal Details'
                        isSaved={isSaved}
                        handleSaveInput={handleSaveInput}
                        handleResetInput={handlePersonalDetailsReset}
                    />
                </form>
            )}
        </div>
    );
}

function CreateEducationInput({ isActive, handleExpandInput, isSaved, handleSaveInput }) {
    const [educationDetails, setEducationDetails] = useState(initialEducationDetails);

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
                    name='chevron-down-outline'
                    onClick={(e) => {
                        handleExpandInput(e, 'Education', isActive);
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
                        <label htmlFor='start-period'>Period:</label>
                        <div>
                            <input
                                type='month'
                                id='startPeriod'
                                value={educationDetails.startPeriod}
                                onInput={handleEducationDetailsChange}
                                disabled={isSaved}
                            />
                            <label htmlFor='end-period'>
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
                        />
                    </div>
                    <CreateUserInputButtons
                        section='Education'
                        isSaved={isSaved}
                        handleSaveInput={handleSaveInput}
                        handleResetInput={handleEducationDetailsReset}
                    />
                </>
            )}
        </div>
    );
}

function CreateExperienceInput({ isActive, handleExpandInput, isSaved, handleSaveInput }) {
    const [experienceDetails, setExperienceDetails] = useState(initialExperienceDetails);

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
                    name='chevron-down-outline'
                    onClick={(e) => {
                        handleExpandInput(e, 'Experience', isActive);
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
                    <CreateUserInputButtons
                        section='Experience'
                        isSaved={isSaved}
                        handleSaveInput={handleSaveInput}
                        handleResetInput={handleExperienceDetailsReset}
                    />
                </>
            )}
        </div>
    );
}

function CreateUserInputButtons({ section, isSaved, handleSaveInput, handleResetInput }) {
    return (
        <div className='btnWrapper'>
            {isSaved && (
                <button
                    type='button'
                    className='edit-Btn'
                    onClick={(e) => {
                        handleSaveInput(e, section);
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
                            handleSaveInput(e, section);
                        }}>
                        <ion-icon name='checkmark' size='large'></ion-icon>
                    </button>
                </>
            )}
        </div>
    );
}

export { CreateUserInputContainer };
