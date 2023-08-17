import { useState } from 'react';

function CreateUserInputContainer() {
    const [showPersonalInput, setShowPersonalInput] = useState(true);
    const [showEducationInput, setShowEducationInput] = useState(false);
    const [showExperienceInput, setShowExperienceInput] = useState(false);

    function handleShowPersonalInput() {
        setShowPersonalInput((prevBool) => !prevBool);
        setShowEducationInput(false);
        setShowExperienceInput(false);
    }

    function handleShowEducationInput() {
        setShowPersonalInput(false);
        setShowEducationInput((prevBool) => !prevBool);
        setShowExperienceInput(false);
    }

    function handleShowExperienceInput() {
        setShowPersonalInput(false);
        setShowEducationInput(false);
        setShowExperienceInput((prevBool) => !prevBool);
    }

    return (
        <>
            <CreatePersonalInput isActive={showPersonalInput} onClick={handleShowPersonalInput} />
            <CreateEducationInput isActive={showEducationInput} onClick={handleShowEducationInput} />
            <CreateExperienceInput isActive={showExperienceInput} onClick={handleShowExperienceInput} />
        </>
    );
}

function CreatePersonalInput({ isActive, onClick }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }
    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handleAddressChange(e) {
        setAddress(e.target.value);
    }

    return (
        <div className='user-input-container personal'>
            <div className='user-input-child header'>
                <p className='title'>Personal Details</p>
                <ion-icon name='chevron-down-outline' onClick={onClick}></ion-icon>
            </div>
            {isActive && (
                <>
                    <div className='user-input-child'>
                        <label htmlFor='first-name'>First Name:</label>
                        <input type='text' id='first-name' value={firstName} onChange={handleFirstNameChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='last-name'>Last Name:</label>
                        <input type='text' id='last-name' value={lastName} onChange={handleLastNameChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='phone-number'>Phone Number:</label>
                        <input type='text' id='phone-number' value={phoneNumber} onChange={handlePhoneNumberChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='address'>Address:</label>
                        <textarea id='address' rows='4' value={address} onChange={handleAddressChange}></textarea>
                    </div>
                </>
            )}
        </div>
    );
}

function CreateEducationInput({ isActive, onClick }) {
    const [universityName, setUniversityName] = useState('');
    const [location, setLocation] = useState('');
    const [course, setCourse] = useState('');
    const [startPeriod, setStartPeriod] = useState('');
    const [endPeriod, setEndPeriod] = useState('');
    const [awards, setAwards] = useState('');
    const [cgpa, setCgpa] = useState('');

    function handleUniversityNameChange(e) {
        setUniversityName(e.target.value);
    }
    function handleLocationChange(e) {
        setLocation(e.target.value);
    }
    function handleCourseChange(e) {
        setCourse(e.target.value);
    }
    function handleStartPeriodChange(e) {
        setStartPeriod(e.target.value);
    }
    function handleEndPeriodChange(e) {
        setEndPeriod(e.target.value);
    }
    function handleAwardsChange(e) {
        setAwards(e.target.value);
    }
    function handleCgpaChange(e) {
        setCgpa(e.target.value);
    }

    return (
        <div className='user-input-container education'>
            <div className='user-input-child header'>
                <p className='title'>Education</p>
                <ion-icon name='chevron-down-outline' onClick={onClick}></ion-icon>
            </div>
            {isActive && (
                <>
                    <div className='user-input-child'>
                        <label htmlFor='institution-name'>University/Institution Name:</label>
                        <input
                            type='text'
                            id='institution-name'
                            value={universityName}
                            onChange={handleUniversityNameChange}
                        />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='location'>Location:</label>
                        <input type='text' id='location' value={location} onChange={handleLocationChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='course'>Course/Degree:</label>
                        <input type='text' id='course' value={course} onChange={handleCourseChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='start-period'>Period:</label>
                        <div>
                            <input
                                type='month'
                                id='start-period'
                                value={startPeriod}
                                onInput={handleStartPeriodChange}
                            />
                            <label htmlFor='end-period'>
                                <ion-icon name='arrow-forward-outline'></ion-icon>
                            </label>
                            <input type='month' id='end-period' value={endPeriod} onInput={handleEndPeriodChange} />
                        </div>
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='awards'>Honors/Awards:</label>
                        <textarea id='awards' rows='4' value={awards} onChange={handleAwardsChange}></textarea>
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='cgpa'>CGPA:</label>
                        <input type='email' id='cgpa' value={cgpa} onChange={handleCgpaChange} />
                    </div>
                    <CreateUserInputButtons text='Add Education' />
                </>
            )}
        </div>
    );
}

function CreateExperienceInput({ isActive, onClick }) {
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [startPeriod, setStartPeriod] = useState('');
    const [endPeriod, setEndPeriod] = useState('');
    const [location, setLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    function handleJobTitleChange(e) {
        setJobTitle(e.target.value);
    }
    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
    }
    function handleStartPeriodChange(e) {
        setStartPeriod(e.target.value);
    }
    function handleEndPeriodChange(e) {
        setEndPeriod(e.target.value);
    }
    function handleLocationChange(e) {
        setLocation(e.target.value);
    }
    function handleJobDescriptionChange(e) {
        setJobDescription(e.target.value);
    }

    return (
        <div className='user-input-container experience'>
            <div className='user-input-child header'>
                <p className='title'>Experience</p>
                <ion-icon name='chevron-down-outline' onClick={onClick}></ion-icon>
            </div>
            {isActive && (
                <>
                    <div className='user-input-child'>
                        <label htmlFor='job-title'>Job Title:</label>
                        <input type='text' id='job-title' value={jobTitle} onChange={handleJobTitleChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='company'>Company/Employer:</label>
                        <input type='text' id='company' value={companyName} onChange={handleCompanyNameChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='start-period'>Period:</label>
                        <div>
                            <input
                                type='month'
                                id='start-period'
                                value={startPeriod}
                                onInput={handleStartPeriodChange}
                            />
                            <label htmlFor='end-period'>
                                <ion-icon name='arrow-forward-outline'></ion-icon>
                            </label>
                            <input type='month' id='end-period' value={endPeriod} onInput={handleEndPeriodChange} />
                        </div>
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='location'>Location:</label>
                        <input type='text' id='location' value={location} onChange={handleLocationChange} />
                    </div>
                    <div className='user-input-child'>
                        <label htmlFor='job-description'>Job Description:</label>
                        <textarea
                            id='job-description'
                            rows='4'
                            value={jobDescription}
                            onChange={handleJobDescriptionChange}></textarea>
                    </div>
                    <CreateUserInputButtons text='Add Experience' />
                </>
            )}
        </div>
    );
}

function CreateUserInputButtons() {
    return (
        <div className='btnWrapper'>
            <button className='addBtn'>
                <ion-icon name='trash-outline' size='large'></ion-icon> &nbsp; Delete
            </button>
            <button className='cancelBtn'>
                <ion-icon name='close' size='large'></ion-icon>
            </button>
            <button className='saveBtn'>
                <ion-icon name='checkmark' size='large'></ion-icon>
            </button>
        </div>
    );
}

export { CreateUserInputContainer };
