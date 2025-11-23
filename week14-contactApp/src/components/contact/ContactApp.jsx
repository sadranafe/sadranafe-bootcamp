import { useContext, useEffect, useState } from "react";
import ContactsPanel from "../contactPanel/ContactsPanel";
import SideBar from "../SideBar";
import Model from "../model";
import Toast from "../Toast";
import { ContactAppContext } from "../context/ContactAppContext";

const ContactApp = () => {
    const {state , dispatch} = useContext(ContactAppContext);
    const { DUMMY_CONTACTS } = state;
    const [DummyContacts, setDummyContacts] = useState([])

    const [modelIsOpen , setModelIsOpen] = useState(false);
    const [selectedContact , setSelectedContact] = useState({}); // for selecting a contact
    const [selectedContacts , setSelectedContacts] = useState([]); // for delete group
    const [searchInput , setSearchInput] = useState('');
    const [debouncedSearch , setDebouncedSearch] = useState('');
    const [sortOption , setSortOption] = useState('default');
    const [isEditing , setIsEditing] = useState(false);
    const [isSelecting , setIsSelecting] = useState(false);
    const [toastIsFired , setToastIsFired] = useState(false);
    const [toast , setToast] = useState({ type : '' , content : '' })

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type : 'SET_DEBOUNCED_SEARCH' , payLoad : searchInput })
            // setDebouncedSearch(searchInput);
        } , 500)
        return () => clearTimeout(timer);
    },[searchInput])

    useEffect(() => {
        dispatch({ type : 'SET_EDITING' , payLoad : false })
        // setIsEditing(false);
    } , [selectedContact])

    const selectedContactIsEmpty = Object.values(selectedContact).length === 0;
    const searchedContacts = [...DUMMY_CONTACTS].filter(contact => 
        contact.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        contact.email.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    const sortedContacts = searchedContacts.sort((a , b) => {
        switch(sortOption) {
            case 'default' : {
                return DUMMY_CONTACTS;
            }

            case 'asc' : {
                return a.name.localeCompare(b.name)
            }

            case 'desc' : {
                return b.name.localeCompare(a.name)
            }
        }
    })

    const dummycontactsHandler = val => {
        setDummyContacts(val);
    }

    const searchHandler = val => {
        setSearchInput(val)
    }
    
    const sortContactsHandler = val => {
        setSortOption(val)
    }

    const updateContactHandler = contact => {
        setDummyContacts(prevDummyContacts => prevDummyContacts.map(user => user.id === contact.id ? contact : user))
    }

    return (
        <>
            <div className = "bg-neutral-200/40 w-8/12 flex justify-between items-start content-center shadow-md rounded-4xl overflow-hidden p-5 h-[500px]">
                <SideBar DUMMYCONTACTS = {DummyContacts} dummycontactsHandler = {dummycontactsHandler} onUpdate = {updateContactHandler} onSelectedContact = {contact => setSelectedContact(contact)} setToast = {setToast} onToastIsFired = {setToastIsFired} selectedContact = {selectedContact} selectedContactIsEmpty = {selectedContactIsEmpty} isEditing = {isEditing} onIsEditing = { status => setIsEditing(status) }/>

                <ContactsPanel DUMMYCONTACTS = {DummyContacts} onDUMMYCONTACTS = {setDummyContacts} contacts = {sortedContacts} selectedContactIsEmpty = {selectedContactIsEmpty} selectedContact = {selectedContact} onSelectedContact = {contact => setSelectedContact(contact)} isSelecting = {isSelecting} onIsSelecting = {setIsSelecting} selectedGroupContacts = {selectedContacts} setSelectedGroupContacts = {setSelectedContacts} search = { searchInput } searchHandler = { searchHandler } sortContactsHandler = {sortContactsHandler} setToast = {setToast} onToastIsFired = {setToastIsFired}/>
            </div>

            <Model/>
            <Toast toastIsFired = {toastIsFired} onToastIsFired = {setToastIsFired} type = {toast.type} content = {toast.content}/>
        </>
    );
};

export default ContactApp;