import React from 'react';

const Tab = ({ label , isActive , onActive }) => {
    return (
        <>
            <button onClick = {onActive} className = {`cursor-pointer border-b p-2 px-4 transition-all duration-200 ${isActive ? 'border-b-black dark:border-b-neutral-600' : 'border-b-transparent'}`}>{label}</button>
        </>
    );
};

export default Tab;