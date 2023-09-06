function SubSectionButtons({
    section,
    handleShowSubSection,
    setSectionState,
    sectionInputDetails,
    handleInputDetailsChange,
}) {
    return (
        section.showSubSection && (
            <div className='sub-section-container'>
                <div className='sub-section-header-container'>
                    <AccessHeaderBtn
                        section={section}
                        handleShowSubSection={handleShowSubSection}
                        setSectionState={setSectionState}
                        sectionInputDetails={sectionInputDetails}
                    />
                </div>
                <AddSubSecBtn
                    section={section}
                    handleShowSubSection={handleShowSubSection}
                    sectionInputDetails={sectionInputDetails}
                    handleInputDetailsChange={handleInputDetailsChange}
                    setSectionState={setSectionState}
                />
            </div>
        )
    );
}

function AccessHeaderBtn({ sectionInputDetails, setSectionState, handleShowSubSection, section }) {
    return (
        sectionInputDetails.length > 0 &&
        sectionInputDetails.map((elem, index) => (
            <button
                className='access-sub-section-btn btn'
                key={elem.key}
                onClick={() => {
                    handleShowSubSection(setSectionState, index);
                }}>
                {section.name === 'Education' && (elem.universityName || section.name + ' ' + (index + 1))}
                {section.name === 'Experience' && (elem.companyName || section.name + ' ' + (index + 1))}
                <span className='ion-icon-edit-sub-section'>
                    <ion-icon name='create-outline'></ion-icon>
                </span>
            </button>
        ))
    );
}

function AddSubSecBtn({
    section,
    setSectionState,
    handleShowSubSection,
    sectionInputDetails,
    handleInputDetailsChange,
}) {
    return (
        <button
            className='add-sub-section-btn btn'
            onClick={(e) => {
                handleInputDetailsChange(e, section.currentSubSection, sectionInputDetails.universityName);
                handleShowSubSection(setSectionState, sectionInputDetails.length);
            }}>
            <span className='ion-icon-add'>
                <ion-icon name='add-outline'></ion-icon>
            </span>
            Add {section.name}
        </button>
    );
}

export default SubSectionButtons;
