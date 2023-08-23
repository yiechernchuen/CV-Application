function SubSectionButtons({
    section,
    handleShowSubSection,
    setSectionState,
    sectionInputDetails,
    handleInputDetailsChange,
}) {
    return (
        section.showSection &&
        section.showSubSection && (
            <div className='user-input-child'>
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
                <ion-icon name='add-circle-outline'></ion-icon> {section.name}
            </span>
        </button>
    );
}

export default SubSectionButtons;
