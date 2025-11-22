const initialContactState = {
    CONTACTS : [],
    selectedContact : {},
    selectedContacts : [],
    debouncedSearch : '',
    sortOption : 'default',
    isEditing : false,
    isSelecting : false,
    modalIsOpen : false,
    toast : {
        isFired : false,
        type : '',
        content : ''
    },
}