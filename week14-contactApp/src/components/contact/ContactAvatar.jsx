import React from 'react';

const ContactAvatar = ({ name , customClasses , textSize = "text-lg" }) => {
    return (
        <>
            <div className = {`${customClasses} bg-sky-500 text-white rounded-full text-center flex justify-center items-center content-center`}>
                <p className = {`${textSize} font-medium capitalize w-full`}>{name?.split('')[0]}</p>
            </div>
        </>
    );
};

export default ContactAvatar;