import React, { useState } from 'react';
import Contact from '../contact/Contact';

const ContactsMainPanel = ({ DUMMYCONTACTS , onDUMMYCONTACTS , contacts , selectedContact , onSelectedContact }) => {
    const [activeContact , setActiveContact] = useState();
    return (
        <>
            <div className = 'w-full h-full flex flex-wrap justify-center items-start content-start pb-2 gap-2.5 overflow-y-scroll'>
                {
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