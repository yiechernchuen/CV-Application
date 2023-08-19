const initialFormState = [
    { section: 'Personal Details', expandForm: false, saveForm: false },
    { section: 'Education', expandForm: false, saveForm: false },
    { section: 'Experience', expandForm: false, saveForm: false },
];

const initialPersonalDetails = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
};

const initialEducationDetails = {
    universityName: '',
    location: '',
    course: '',
    startPeriod: '',
    endPeriod: '',
    awards: '',
    cgpa: '',
};

const initialExperienceDetails = {
    jobTitle: '',
    companyName: '',
    startPeriod: '',
    endPeriod: '',
    location: '',
    jobDescription: '',
};

export { initialFormState, initialPersonalDetails, initialEducationDetails, initialExperienceDetails };
