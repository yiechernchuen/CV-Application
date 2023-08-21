const initialFormState = [
    { section: 'Personal Details', showSection: false, hasSubSection: false },
    {
        section: 'Education',
        showSection: false,
        hasSubSection: true,
        showSubSection: true,
        currentSubSection: 0,
    },
    {
        section: 'Experience',
        showSection: false,
        hasSubSection: true,
        showSubSection: true,
        currentSubSection: 0,
    },
];

const personalForm = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
};

class EducationForm {
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
class ExperienceForm {
    constructor(key) {
        this.companyName = '';
        this.jobTitle = '';
        this.startPeriod = '';
        this.endPeriod = '';
        this.location = '';
        this.jobDescription = '';
        this.key = key;
    }
}

const personalInputAttributes = [
    {
        labelFor: 'first-name',
        labelContent: 'First Name:',
        type: 'text',
        id: 'first-name',
        propertyName: 'firstName',
    },
    {
        labelFor: 'last-name',
        labelContent: 'Last Name:',
        type: 'text',
        id: 'last-name',
        propertyName: 'lastName',
    },
    {
        labelFor: 'phone-number',
        labelContent: 'Phone Number:',
        type: 'text',
        id: 'phone-number',
        propertyName: 'phoneNumber',
    },
    {
        labelFor: 'email',
        labelContent: 'Email:',
        type: 'email',
        id: 'email',
        propertyName: 'email',
    },
    {
        labelFor: 'address',
        labelContent: 'Address:',
        type: 'textarea',
        id: 'address',
        rows: 4,
        propertyName: 'address',
    },
];

const educationInputAttributes = [
    {
        labelFor: 'university-name',
        labelContent: 'University/Institution:',
        type: 'text',
        id: 'university-name',
        propertyName: 'universityName',
    },
    { labelFor: 'location', labelContent: 'Location:', type: 'text', id: 'location', propertyName: 'location' },
    { labelFor: 'course', labelContent: 'Course/Degree:', type: 'text', id: 'course', propertyName: 'course' },
    {
        labelFor: 'start-period',
        labelContent: 'Period:',
        type: 'month',
        id: 'start-period',
        propertyName: 'startPeriod',
    },
    {
        labelFor: 'end-period',
        labelContent: <ion-icon name='arrow-forward-outline'></ion-icon>,
        type: 'month',
        id: 'end-period',
        propertyName: 'endPeriod',
    },
    { labelFor: 'cgpa', labelContent: 'CGPA:', type: 'text', id: 'cgpa', propertyName: 'cgpa' },
    {
        labelFor: 'awards',
        labelContent: 'Honors/Awards:',
        type: 'textarea',
        id: 'awards',
        rows: 4,
        propertyName: 'awards',
    },
];

const experienceInputAttributes = [
    {
        labelFor: 'company-name',
        labelContent: 'Company/Employer:',
        type: 'text',
        id: 'company-name',
        propertyName: 'companyName',
    },
    {
        labelFor: 'job-title',
        labelContent: 'Job Title:',
        type: 'text',
        id: 'job-title',
        propertyName: 'jobTitle',
    },
    {
        labelFor: 'location',
        labelContent: 'Location:',
        type: 'text',
        id: 'location',
        propertyName: 'location',
    },
    {
        labelFor: 'start-period',
        labelContent: 'Period:',
        type: 'month',
        id: 'start-period',
        propertyName: 'startPeriod',
    },
    {
        labelFor: 'end-period',
        labelContent: <ion-icon name='arrow-forward-outline'></ion-icon>,
        type: 'month',
        id: 'end-period',
        propertyName: 'endPeriod',
    },
    {
        labelFor: 'job-description',
        labelContent: 'Job Description:',
        type: 'textarea',
        id: 'job-description',
        rows: 4,
        propertyName: 'jobDescription',
    },
];

export {
    initialFormState,
    personalForm,
    personalInputAttributes,
    EducationForm,
    educationInputAttributes,
    ExperienceForm,
    experienceInputAttributes,
};
