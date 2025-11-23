import { useContext, useEffect, useState } from 'react';
import Contact from '../contact/Contact';
import EmptyState from '../EmptyState';
import { ContactAppContext } from '../context/ContactAppContext';

const ContactsMainPanel = ({ DUMMYCONTACTS , onDUMMYCONTACTS , contacts , selectedContact , isSelecting , selectedGroupContacts , setSelectedGroupContacts , onSelectedContact }) => {
    const {state , dispatch} = useContext(ContactAppContext);
    const [activeContact , setActiveContact] = useState();

    const toggleContactSelection = id => {
        onDUMMYCONTACTS(prev => {
            return prev.map(contact => contact.id === id ? {...contact , selected : !contact.selected} : contact)
        })
    }

    useEffect(() => {
        setSelectedGroupContacts(DUMMYCONTACTS.filter(contact => contact.selected));
    } , [DUMMYCONTACTS])

    return (
        <>
            <div className = 'w-full h-full flex flex-wrap justify-center items-start content-start pb-2 gap-2.5 overflow-y-scroll'>
                {
                    DUMMYCONTACTS.length === 0 ? 
                    <EmptyState type = 'noContacts' action = {() => dispatch({ type : 'MODAL_STATUS' , payLoad : true })}/>
                    : contacts.length === 0 ? 
                    <EmptyState type = 'noResults'/>
                    :
                    contacts.map((contact , index) => {
                        return(
                            <Contact key = {index} currentContact = {contact} isActive = {activeContact === index} onActiveContact = {() => setActiveContact(index)} onSelectedContact = {onSelectedContact} onToggleContactSelection = {toggleContactSelection} isSelecting = {isSelecting} selectedGroupContacts = {selectedGroupContacts} selectedStatus = {contact.selected}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ContactsMainPanel;