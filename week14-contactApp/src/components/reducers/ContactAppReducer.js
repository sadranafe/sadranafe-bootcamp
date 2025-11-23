const InitialContactState = {
    DUMMY_CONTACTS : [],
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

const ContactReducer = (state , action) => {
    switch(action.type) {
        case 'ADD_CONTACT' : {
            return { ...state, DUMMY_CONTACTS : [...state.DUMMY_CONTACTS , action.payLoad] , toast : { isFired : true , type : 'success' , content : 'new contact added' } }
        };

        case 'UPDATE_CONTACT' : {

        };
        
        case 'DELETE_CONTACT' : {

        };
        
        case 'SET_SELECTED_CONTACT' : {

        };

        case 'SET_SELECTED_CONTACTS' : {
            
        };

        case 'DELETE_SELECTED_CONTACT' : {
            
        };
        
        case 'DELETE_SELECTED_CONTACTS' : {

        };

        case 'SET_DEBOUNCED_SEARCH' : {

        };

        case 'SET_SORT_OPTION' : {

        };

        case 'MODAL_STATUS' : {
            return { ...state , modalIsOpen : action.payLoad }
        };

        case 'SET_EDITING' : {

        };

        case 'TOAST_STATUS' : {

        };

        default : return state;
    }
}

export { InitialContactState };
export default ContactReducer;