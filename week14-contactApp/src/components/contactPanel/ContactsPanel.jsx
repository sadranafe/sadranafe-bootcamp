import { useContext } from 'react';
import { ContactAppContext } from '../context/ContactAppContext';
import ContactsHeaderPanel from './ContactsHeaderPanel';
import ContactsMainPanel from './ContactsMainPanel';

const ContactsPanel = () => {
    const { state } = useContext(ContactAppContext)
    const selectedContactIsEmpty = Object.values(state.selectedContact).length === 0;
    return (
        <>
            <div className = {`${selectedContactIsEmpty ? 'w-full' : 'w-8/12'} h-full overflow-hidden transition-all duration-500`}>
                <ContactsHeaderPanel/>

                <ContactsMainPanel/>
            </div>
        </>
    );
};

export default ContactsPanel;