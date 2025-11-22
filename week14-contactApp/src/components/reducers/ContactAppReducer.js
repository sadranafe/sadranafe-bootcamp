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

const reducer = (state , action) => {
    switch(action.type) {
        case 'ADD_Contact' : {
            return { ...state, CONTACTS : [...state.CONTACTS , action.payLoad] }
        }

        case 'UPDATE_CONTACT' : {

        }
        
        case 'DELETE_CONTACT' : {

        }
        
        case 'SET_SELECTED_CONTACT' : {

        }

        case 'SET_SELECTED_CONTACTS' : {
            
        }

        case 'DELETE_SELECTED_CONTACT' : {
            
        }
        
        case 'DELETE_SELECTED_CONTACTS' : {

        }

        case 'SET_DEBOUNCED_SEARCH' : {

        }

        case 'SET_SORT_OPTION' : {

        }

        case 'OPEN_MODAL' : {

        }

        case 'CLOSE_MODAL' : {

        }

        case 'SET_EDITING' : {

        }

        case 'SHOW_TOAST' : {

        }

        case 'CLOSE_TOAST' : {

        }

        default : return state;
    }
}

export {initialContactState , reducer as contactReducer};