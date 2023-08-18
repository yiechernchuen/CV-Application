const initialFormState = [
    { section: 'Personal Details', expandInput: false, saveInput: false, editInput: false },
    { section: 'Education', expandInput: false, saveInput: false, editInput: false },
    { section: 'Experience', expandInput: false, saveInput: false, editInput: false },
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
