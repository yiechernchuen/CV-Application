function InputButtons({
    section,
    setSectionState,
    handleDeleteInputDetails,
    handleResetInputDetails,
    handleShowSection,
    handleShowSubSection,
}) {
    return (
        <div className='btn-wrapper'>
            {section.name !== 'Personal' && (
                <button
                    type='button'
                    className='delete-btn btn'
                    onClick={() => {
                        handleDeleteInputDetails(section.currentSubSection);
                        handleShowSubSection(setSectionState, 0);
                    }}>
                    <span className='ion-icon-delete'>
                        <ion-icon name='trash-outline' size='large'></ion-icon>
                    </span>
                </button>
            )}
            <button
                type='button'
                className='reset-btn btn'
                onClick={() => {
                    handleResetInputDetails(section.currentSubSection);
                }}>
                <span className='ion-icon-reset'>
                    <ion-icon name='refresh-outline' size='large'></ion-icon>
                </span>
            </button>
            <button
                type='button'
                className='save-btn btn'
                onClick={() => {
                    section.name === 'Personal'
                        ? handleShowSection(section.name)
                        : handleShowSubSection(setSectionState, 0);
                }}>
                <span className='ion-icon-save'>
                    <ion-icon name='checkmark' size='large'></ion-icon>
                </span>
            </button>
        </div>
    );
}

export default InputButtons;
