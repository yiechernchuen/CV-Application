function InputButtons({
    section,
    setSectionState,
    handleDeleteInputDetails,
    handleResetInputDetails,
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
                        <ion-icon name='trash-sharp'></ion-icon>
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
                    <ion-icon name='refresh-circle'></ion-icon>
                </span>
            </button>
            <button type='submit' className='submit-btn btn'>
                <span className='ion-icon-submit'>
                    <ion-icon name='checkmark-circle'></ion-icon>
                </span>
            </button>
        </div>
    );
}

export default InputButtons;
