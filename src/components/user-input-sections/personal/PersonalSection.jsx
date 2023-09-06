import InputButtons from '../shared/InputButtons';

function PersonalSection({
    section,
    handleShowSection,
    personalInputDetails,
    setPersonalInputDetails,
    emptyPersonalInputDetails,
}) {
    function handleInputDetailsChange(e, inputName) {
        setPersonalInputDetails((prevInput) => ({ ...prevInput, [inputName]: e.target.value }));
    }

    function handleResetInputDetails() {
        setPersonalInputDetails(emptyPersonalInputDetails);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleShowSection(section.name);
    }

    return (
        <form className='user-input-container personal-form' onSubmit={handleSubmit}>
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
            <div className='user-input address'>
                <label htmlFor='address'>Address:</label>
                <textarea
                    id='address'
                    value={personalInputDetails.address}
                    data-value={personalInputDetails.address}
                    rows='4'
                    onChange={(e) => {
                        handleInputDetailsChange(e, 'address');
                    }}
                />
            </div>
            <InputButtons section={section} handleResetInputDetails={handleResetInputDetails} />
        </form>
    );
}

function Input({ id, label, type, propertyName, personalInputDetails, handleInputDetailsChange }) {
    return (
        <div className={`user-input ${id}`}>
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
