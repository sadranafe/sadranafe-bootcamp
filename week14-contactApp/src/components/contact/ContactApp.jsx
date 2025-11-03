import { useState } from "react";
import ContactsPanel from "../contactPanel/ContactsPanel";
import SideBar from "../SideBar";
import Model from "../model";

const ContactApp = () => {
    const [DummyContacts, setDummyContacts] = useState([
        { id: 0 , name : 'sadra' , email : 'sadranafe7@gmail.com' , phoneNumber : '09109919520' , selected : false },
        { id: 1 , name : 'john' , email : 'john@gmail.com' , phoneNumber : '09101234567' , selected : false },
        { id: 2 , name : 'reza' , email : 'reza24@gmail.com' , phoneNumber : '09129214020' , selected : false },
        { id: 3 , name : 'sarina' , email : 'sarinal83@gmail.com' , phoneNumber : '09190719570' , selected : false },
    ])

    const [modelIsOpen , setModelIsOpen] = useState(false);
    const [selectedContact , setSelectedContact] = useState({});
    const [sortOption , setSortOption] = useState('default');

    const selectedContactIsEmpty = Object.values(selectedContact).length === 0;
    const sortedContacts = [...DummyContacts].sort((a , b) => {
        switch(sortOption) {
            case 'default' : {
                return DummyContacts;
            }

            case 'asc' : {
                return a.name.localeCompare(b.name)
            }

            case 'desc' : {
                return b.name.localeCompare(a.name)
            }
        }
    })
    
    const sortContactsHandler = val => {
        setSortOption(val)
    }

    return (
        <>
            <div className = "bg-neutral-200/40 w-8/12 flex justify-between items-start content-center shadow-md rounded-4xl overflow-hidden p-5 h-[500px]">
                <SideBar/>

                <ContactsPanel DUMMYCONTACTS = {DummyContacts} onDUMMYCONTACTS = {setDummyContacts} contacts = {sortedContacts} modelIsOpen = {modelIsOpen} onModelIsOpen = { status => setModelIsOpen(status) } selectedContactIsEmpty = {selectedContactIsEmpty} selectedContact = {selectedContact} onSelectedContact = {contact => setSelectedContact(contact)} sortContactsHandler = {sortContactsHandler}/>
            </div>

            <Model onDUMMYCONTACTS = {setDummyContacts} modelIsOpen = {modelIsOpen} onModelIsOpen = { status => setModelIsOpen(status) }/>
        </>
    );
};

export default ContactApp;