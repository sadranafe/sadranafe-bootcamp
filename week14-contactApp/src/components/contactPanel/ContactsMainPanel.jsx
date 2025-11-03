import React, { useState } from 'react';
import Contact from '../contact/Contact';
import EmptyState from '../EmptyState';

const ContactsMainPanel = ({ DUMMYCONTACTS , onDUMMYCONTACTS , contacts , onModelIsOpen , selectedContact , onSelectedContact }) => {
    const [activeContact , setActiveContact] = useState();
    return (
        <>
            <div className = 'w-full h-full flex flex-wrap justify-center items-start content-start pb-2 gap-2.5 overflow-y-scroll'>
                {
                    DUMMYCONTACTS.length === 0 ? 
                    <EmptyState type = 'noContacts' action = {() => onModelIsOpen(true)}/>
                    : contacts.length === 0 ? 
                    <EmptyState type = 'noResults'/>
                    :
                    contacts.map((contact , index) => {
                        return(
                            <Contact key = {index} currentContact = {contact} isActive = {activeContact === index} onActiveContact = {() => setActiveContact(index)} onSelectedContact = {onSelectedContact}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ContactsMainPanel;