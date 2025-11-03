import React from 'react';
import Contact from '../contact/Contact';

const ContactsMainPanel = ({ DUMMYCONTACTS , onDUMMYCONTACTS }) => {
    return (
        <>
            <div className = 'w-full h-full flex flex-wrap justify-center items-start content-start pb-2 gap-2.5 overflow-y-scroll'>
                {
                    DUMMYCONTACTS.map((contact , index) => {
                        return(
                            <Contact key = {index} currentContact = {contact}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ContactsMainPanel;