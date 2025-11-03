import ContactsHeaderPanel from './ContactsHeaderPanel';
import ContactsMainPanel from './ContactsMainPanel';

const ContactsPanel = ({ DUMMYCONTACTS , onDUMMYCONTACTS , modelIsOpen , onModelIsOpen , selectedContact , onSelectedContact }) => {
    return (
        <>
            <div className = 'w-8/12 h-full overflow-hidden transition-all duration-500'>
                <ContactsHeaderPanel onDUMMYCONTACTS = {onDUMMYCONTACTS} modelIsOpen = {modelIsOpen} onModelIsOpen = {onModelIsOpen}/>

                <ContactsMainPanel DUMMYCONTACTS = {DUMMYCONTACTS} onDUMMYCONTACTS = {onDUMMYCONTACTS} onModelIsOpen = {onModelIsOpen} selectedContact = {selectedContact}  onSelectedContact = {onSelectedContact}/>
            </div>
        </>
    );
};

export default ContactsPanel;