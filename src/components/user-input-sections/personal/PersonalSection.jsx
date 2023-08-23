import InputButtons from '../shared/InputButtons';

function PersonalSection({
    section,
    handleShowSection,
    personalInputDetails,
    setPersonalInputDetails,
    initialPersonalInputDetails,
}) {
    function handleInputDetailsChange(e, inputName) {
        setPersonalInputDetails({ ...personalInputDetails, [inputName]: e.target.value });
    }

    function handleResetInputDetails() {
        setPersonalInputDetails(initialPersonalInputDetails);
    }

    return (
        section.showSection && (
            <>
                <Input
                    id='first-name'
                    label='First Name:'
                    type='text'
                    personalInputDetails={personalInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    propertyName='firstName'
                />
                <Input
                    id='last-name'
                    label='Last Name:'
                    type='text'
                    personalInputDetails={personalInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    propertyName='lastName'
                />
                <Input
                    id='phone-number'
                    label='Phone Number:'
                    type='text'
                    personalInputDetails={personalInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    propertyName='phoneNumber'
                />
                <Input
                    id='email'
                    label='Email:'
                    type='email'
                    personalInputDetails={personalInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    propertyName='email'
                />
                <div className='user-input-child'>
                    <label htmlFor='address'>Address:</label>
                    <textarea
                        id='address'
                        rows='4'
                        value={personalInputDetails.address}
                        onChange={(e) => {
                            handleInputDetailsChange(e, 'address');
                        }}></textarea>
                </div>
                <InputButtons
                    section={section}
                    handleResetInputDetails={handleResetInputDetails}
                    handleShowSection={handleShowSection}
                />
            </>
        )
    );
}

function Input({ id, label, type, propertyName, personalInputDetails, handleInputDetailsChange }) {
    return (
        <div className='user-input-child'>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={personalInputDetails[propertyName]}
                onChange={(e) => {
                    handleInputDetailsChange(e, propertyName);
                }}
            />
        </div>
    );
}

export default PersonalSection;
