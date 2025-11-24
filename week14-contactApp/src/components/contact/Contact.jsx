import { useContext } from 'react';
import ContactAvatar from './ContactAvatar';
import { ContactAppContext } from '../context/ContactAppContext';

const Contact = ({ currentContact , isActive , onActiveContact , onToggleContactSelection , selectedStatus }) => {
    const { state , dispatch } = useContext(ContactAppContext);
    const { isSelecting } = state;
    const {name , email , id} = currentContact;

    const contactHandler = () => {
        dispatch({ type : 'SET_SELECTED_CONTACT' , payLoad : currentContact })
        onActiveContact();
    }

    return (
        <>
            <div className = {`${isActive ? 'bg-white/25 border-white/80 shadow-[0_5px_10px_rgba(0,0,0,0.05)] ' : 'bg-white/5 hover:bg-white/30 border-transparent'} transition-all duration-100 border backdrop-blur-xl flex flex-wrap justify-between items-center w-full bg-neutral-50 rounded-xl overflow-hidden px-3`}>
                <button onClick = {contactHandler} className = 'w-11/12 cursor-pointer p-1.5 h-full flex items-center'>
                    <div className = 'w-3/12 flex justify-start items-center gap-3'>
                        <ContactAvatar name = {name} customClasses = 'w-9 h-9'/>

                        <div>
                            <p className = 'capitalize'>{name}</p>
                        </div>
                    </div>

                    <div className = 'w-1/2 text-center'>
                        <p>{email}</p>
                    </div>
                </button>

                <div className = 'w-1/12 flex justify-center items-center'>
                    <input type = "checkbox" name = 'checkbox' checked = {selectedStatus} onChange = {() => onToggleContactSelection(id)} className = {`${isSelecting ? 'opacity-100 visible' : 'opacity-0 invisible'} w-4 h-4 transition-all`}/>
                </div>
            </div>
        </>
    );
};

export default Contact;