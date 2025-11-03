import ContactsHeaderPanel from './ContactsHeaderPanel';
import ContactsMainPanel from './ContactsMainPanel';

const ContactsPanel = ({ DUMMYCONTACTS , onDUMMYCONTACTS }) => {
    return (
        <>
            <div className = 'w-8/12 h-full overflow-hidden transition-all duration-500'>
                <ContactsHeaderPanel/>
                <ContactsMainPanel DUMMYCONTACTS = {DUMMYCONTACTS} onDUMMYCONTACTS = {onDUMMYCONTACTS}/>
            </div>
        </>
    );
};

export default ContactsPanel;