import { useContext, useEffect, useState } from 'react';
import Contact from '../contact/Contact';
import EmptyState from '../EmptyState';
import { ContactAppContext } from '../context/ContactAppContext';

const ContactsMainPanel = () => {
    const {state , dispatch} = useContext(ContactAppContext);
    const { DUMMY_CONTACTS , debouncedSearch , sortOption , selectedContacts } = state;
    const [activeContact , setActiveContact] = useState();

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

    const toggleContactSelection = id => {
        dispatch({ type : "TOGGLE_CONTACT_SELECTION" , payLoad : id })
    }

    useEffect(() => {
        dispatch({ type : "SET_SELECTED_CONTACTS" , payLoad : DUMMY_CONTACTS.filter(contact => contact.selected) })
    } , [DUMMY_CONTACTS])

    return (
        <>
            <div className = 'w-full h-full flex flex-wrap justify-center items-start content-start pb-2 gap-2.5 overflow-y-scroll'>
                {
                    DUMMY_CONTACTS.length === 0 ? 
                    <EmptyState type = 'noContacts' action = {() => dispatch({ type : 'MODAL_STATUS' , payLoad : true })}/>
                    : sortedContacts.length === 0 ? 
                    <EmptyState type = 'noResults'/>
                    :
                    sortedContacts.map((contact , index) => {
                        return(
                            <Contact key = {index} currentContact = {contact} isActive = {activeContact === index} onActiveContact = {() => setActiveContact(index)} onToggleContactSelection = {toggleContactSelection} selectedGroupContacts = {selectedContacts} selectedStatus = {contact.selected}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ContactsMainPanel;