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
            const updatedList = state.DUMMY_CONTACTS.map(user => user.id === action.payLoad.id ? action.payLoad : user)
            return{
                ...state , 
                DUMMY_CONTACTS : updatedList,
            }
        };

        case 'TOGGLE_CONTACT_SELECTION' : {
            return {
                ...state,
                DUMMY_CONTACTS : state.DUMMY_CONTACTS.map(contact => contact.id === action.payLoad ? { ...contact, selected : !contact.selected } : contact)
            }
        };

        case 'DELETE_SELECTED_CONTACTS' : {
            const updated = state.DUMMY_CONTACTS.filter(contact => !contact.selected)
            let nextSelected = {}
            if(updated.length !== 0) {
                const index = state.DUMMY_CONTACTS.findIndex(contact => contact.id === state.selectedContact.id)
                const nextIndex = index.length >= updated.length ? updated.length - 1 : index
                nextSelected = updated[nextIndex]
            }
            return {
                ...state,
                DUMMY_CONTACTS : updated,
                selectedContact : nextSelected,
                selectedContacts : [],
                toast : {
                    isFired : true,
                    type : "success",
                    content : "contact(s) deleted successfully"
                }
            }
        }
        
        case 'DELETE_CONTACT' : {
            const id = action.payLoad;
            const index = state.DUMMY_CONTACTS.findIndex(contact => contact.id === id)
            const updated = state.DUMMY_CONTACTS.filter(contact => contact.id !== id);
            let nextSelected = {};
            if(updated.length > 0) {
                const nextIndex = index >= updated.length ? updated.length - 1 : index;
                nextSelected = updated[nextIndex];
            }
            return{
                ...state,
                DUMMY_CONTACTS : updated,
                selectedContact: nextSelected,
                toast : {
                    isFired : true,
                    type : 'info',
                    content : 'user deleted'
                }
            }
        };
        
        case 'SET_SELECTED_CONTACT' : {
            return {...state , selectedContact : action.payLoad}
        };

        case 'SET_SELECTED_CONTACTS' : {
            return { ...state , selectedContacts : action.payLoad }
        };

        case 'SET_DEBOUNCED_SEARCH' : {
            return { ...state , debouncedSearch : action.payLoad }
        };

        case 'SET_SORT_OPTION' : {
            return { ...state , sortOption : action.payLoad }
        };

        case 'SELECTING_STATUS' : {
            return { ...state , isSelecting : action.payLoad }
        };

        case 'MODAL_STATUS' : {
            return { ...state , modalIsOpen : action.payLoad }
        };
        
        case 'EDITING_STATUS' : {
            return { ...state , isEditing : action.payLoad }
        };

        case 'TOAST' : {
            return {
                ...state,
                toast : {
                    isFired : action.payLoad.isFired,
                    type : action.payLoad.type,
                    content : action.payLoad.content
                }
            }
        };

        default : return state;
    }
}

export { InitialContactState };
export default ContactReducer;