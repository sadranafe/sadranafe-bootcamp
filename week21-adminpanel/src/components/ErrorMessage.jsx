'use client';

import { InfoIcon } from "@phosphor-icons/react";

const ErrorMessage = ({ fieldHasError , errorMsg }) => {
    return (
        <>
            <div className = {`group cursor-pointer flex flex-wrap justify-center items-center p-1 text-red-500 relative min-w-fit ml-1 text-center transition ${fieldHasError ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <InfoIcon weight = "light" size = {16}/>
                <p className = 'absolute z-10 bg-red-100/90 p-2 px-4 rounded-lg text-start min-w-max -right-6 top-6 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition'>{errorMsg}</p>
            </div>
        </>
    );
};

export default ErrorMessage;