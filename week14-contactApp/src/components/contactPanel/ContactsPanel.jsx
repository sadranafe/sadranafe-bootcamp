import ContactsHeaderPanel from './ContactsHeaderPanel';
import ContactsMainPanel from './ContactsMainPanel';

const ContactsPanel = ({ DUMMYCONTACTS , onDUMMYCONTACTS , contacts , modelIsOpen , onModelIsOpen , selectedContactIsEmpty , selectedContact , onSelectedContact , search , searchHandler , sortContactsHandler }) => {
    return (
        <>
            <div className = {`${selectedContactIsEmpty ? 'w-full' : 'w-8/12'} h-full overflow-hidden transition-all duration-500`}>
                <ContactsHeaderPanel onDUMMYCONTACTS = {onDUMMYCONTACTS} modelIsOpen = {modelIsOpen} onModelIsOpen = {onModelIsOpen} search = {search} searchHandler = { searchHandler } sortContactsHandler = {sortContactsHandler}/>

                <ContactsMainPanel DUMMYCONTACTS = {DUMMYCONTACTS} onDUMMYCONTACTS = {onDUMMYCONTACTS} contacts = {contacts} onModelIsOpen = {onModelIsOpen} selectedContact = {selectedContact}  onSelectedContact = {onSelectedContact}/>
            </div>
        </>
    );
};

export default ContactsPanel;