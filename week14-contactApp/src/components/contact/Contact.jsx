import React from 'react';
import ContactAvatar from './ContactAvatar';

const Contact = ({ currentContact }) => {
    const {name , email , id} = currentContact;

    return (
        <>
            <div className = 'hover:bg-white/30 border-transparent transition-all duration-100 border backdrop-blur-xl flex flex-wrap justify-between items-center w-full bg-neutral-50 rounded-xl overflow-hidden px-3'>
                <button className = 'w-11/12 cursor-pointer p-1.5 h-full flex items-center'>
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
                    <input type = "checkbox" name = 'checkbox' className = 'w-4 h-4 transition-all'/>
                </div>
            </div>
        </>
    );
};

export default Contact;