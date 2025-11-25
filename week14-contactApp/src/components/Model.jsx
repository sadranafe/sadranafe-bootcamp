import { useContext, useEffect } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';

import ModelInput from "./modelInput";
import { ContactAppContext } from "./context/ContactAppContext";

const Model = () => {
    const {state , dispatch} = useContext(ContactAppContext);
    const { modalIsOpen } = state;

    const nameRegex = /^[A-Za-z\s]{2,30}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    const phoneNumberPattern = /^[0-9]{10,15}$/;
    const xssPattern = /<script|<\/script|onerror|onload|javascript:/i;

    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            phoneNumber : ''
        },
        validationSchema : yup.object({
            name : yup.string()
            .min(2 , 'must be 2 characters or more')
            .max(30 , 'must be 30 character or less')
            .test('name-valid' , 'Name must contain only letters and spaces (2 - 30 characters).' , value => {
                if(!value) return false;
                return nameRegex.test(value) || xssPattern.test(value)
            })
            .required('name is Required'),
            email : yup.string().email('Please enter a valid email')
            .matches(emailPattern , 'wrong email format')
            .required('email is Required'),
            phoneNumber : yup.string()
            .matches(phoneNumberPattern , 'Please enter a valid phoneNumber')
            .required('phoneNumber is required !')
        }),
        onSubmit : value => {
            const newContact = {
                id : Date.now(),
                name : value.name,
                email : value.email,
                phoneNumber : value.phoneNumber,
                selected : false,
            }
            dispatch({ type : "ADD_CONTACT" , payLoad : newContact })
        }
    })
    
    const inputs = [
        { type: 'text', labelName: 'name', icon: 'user' },
        { type: 'email', labelName: 'email', icon: 'envelope' },
        { type: 'number', labelName: 'phoneNumber', icon: 'phone' },
    ]

    useEffect(() => {
        const ESCHandler = ev => {
            if(ev.key === 'Escape') {
                dispatch({ type : 'MODAL_STATUS' , payLoad : false })
            }
        }

        window.addEventListener('keydown' , ESCHandler)
        return () => window.removeEventListener('keydown' , ESCHandler)
    },[modalIsOpen])

    const closeModelHandler = () => {
        dispatch({ type : 'MODAL_STATUS' , payLoad : false })
    }

    return (
        <>
            <div className = {`${modalIsOpen ? 'opacity-100 visible' : ' invisible opacity-0'} transition-all duration-100 w-screen z-10 h-screen fixed top-0 left-0`}>
                <div onClick = {closeModelHandler} className = "overlay w-full h-full bg-black/40 backdrop-blur-sm z-10"></div>
                <div className = "w-full max-w-md p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/80 bg-white/65 backdrop-blur-sm shadow-[0_5px_10px_rgba(0,0,0,0.05)]">
                    <div className = "header flex justify-between items-start mb-4">
                        <div>
                            <h2 className = "capitalize text-xl font-semibold text-gray-800">create new contact</h2>
                            <p className = "text-gray-500 mt-1">enter the contact's details</p>
                        </div>
                        <button onClick = {closeModelHandler} className = "text-gray-500 cursor-pointer hover:bg-red-500 hover:text-white transition rounded-lg w-7 h-7 flex justify-center items-center">
                            <i className = "bx bx-x"></i>
                        </button>
                    </div>
                    
                    <div className = "space-y-3 my-7">
                        {
                            inputs.map((input , index) => {
                                return (
                                    <ModelInput key = {index} formik = {formik} error = {formik.errors[input.labelName]} fieldHasError = {formik.errors[input.labelName] && formik.touched[input.labelName]} labelName = {input.labelName} labelIcon = {input.icon} inputType = {input.type}/>
                                )
                            })
                        }
                    </div>
                    
                    <div className = "flex justify-evenly items-center">
                        <button onClick = {closeModelHandler} className = "capitalize px-4 p-2 rounded-lg cursor-pointer border border-transparent hover:border-red-400 hover:text-red-500 transition">cancel</button>
                        <button type = "submit" onClick = {formik.handleSubmit} className = "disabled:bg-sky-400/70 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer capitalize px-4 p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 shadow-md transition">create contact</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Model;