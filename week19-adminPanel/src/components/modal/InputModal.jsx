import React from 'react';
import ErrorMessage from '../ErrorMessage';

const InputModal = ({ input , formik , error , fieldHasError }) => {
    const { type , name , placeholder } = input;

    return (
        <>
            {/* <div className = 'text-start my-0 bg-re d-100'>
                <label htmlFor = {name}>{placeholder}</label>
                <input type = {type} id = {name} name = {name} value = {formik.values[name]} { ...formik.getFieldProps(name) } placeholder = {placeholder} className = 'w-11/12 bg-white/20 border border-white/80 shadow-[0_5px_10px_rgba(0,0,0,0.07)] rounded-lg mt-1 p-2 px-3'/>
                <ErrorMessage errorMsg = {error} fieldHasError = {fieldHasError}/>
            </div> */}

            <div className = 'my-5'>
                <label htmlFor = {name}>{placeholder}</label>
                <div className = 'my-1 border-white/50 bg-white/20 border shadow-[0_5px_10px_rgba(0,0,0,0.05)] rounded-lg px-3 gap-3 flex justify-start items-center'>
                    <input type = {type} name = {name} id = {name} placeholder = {placeholder} value = {formik.values[name]} { ...formik.getFieldProps(name) } className = 'w-full py-2.5 text-blue-800 outline-none placeholder:text-gray-500'/>
                    <ErrorMessage errorMsg = {error} fieldHasError = {fieldHasError}/>
                </div>
            </div>
        </>
    );
};

export default InputModal;