import { useEffect, useState } from "react";
import ModelInput from "./modelInput";
import { ValidateForm } from "../utils/helper";

const Model = ({ DUMMYCONTACTS , onDUMMYCONTACTS , modelIsOpen , onModelIsOpen }) => {
    const inputs = [
        { type: 'text', labelName: 'name', icon: 'user' },
        { type: 'email', labelName: 'email', icon: 'envelope' },
        { type: 'number', labelName: 'phoneNumber', icon: 'phone' },
    ]

    const [modelForm , setModelForm] = useState({ name: '', email: '', phoneNumber: '' });
    const [errors , setErrors] = useState({});
    const formIsEmpty = !modelForm.name || !modelForm.email || !modelForm.phoneNumber;

    useEffect(() => {
        const ESCHandler = ev => {
            if(ev.key === 'Escape') onModelIsOpen(false)
        }

        window.addEventListener('keydown' , ESCHandler)
        return () => window.removeEventListener('keydown' , ESCHandler)
    },[modelIsOpen])


    const formHandler = ev => {
        const {name , value} = ev.target;
        setModelForm(prev => ({ ...prev , [name] : value.trimStart() }));
        if(errors[name]) setErrors(prev => ({ ...prev , [name] : '' }));
    }

    const submitFormHandler = () => {
        const newContact = {
            id : Date.now(),
            name : modelForm.name,
            email : modelForm.email,
            phoneNumber : modelForm.phoneNumber,
            selected : false,
        }

        if(!ValidateForm(modelForm , setErrors)) return;
        onDUMMYCONTACTS(prevContacts => ([...prevContacts , newContact]));
        setModelForm({ name: '', email: '', phoneNumber: '' });
        setErrors({});
    }

    const closeModelHandler = () => {
        onModelIsOpen(false);
        setErrors({});
    }

    return (
        <>
            <div className = {`${modelIsOpen ? 'opacity-100 visible' : ' invisible opacity-0'} transition-all duration-100 w-screen z-10 h-screen fixed top-0 left-0`}>
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
                                    <ModelInput key = {index} value = {modelForm} onChange = {formHandler} error = {errors[input.labelName]} fieldHasError = {errors[input.labelName] !== '' && errors[input.labelName] !== undefined} labelName = {input.labelName} labelIcon = {input.icon} inputType = {input.type}/>
                                )
                            })
                        }
                    </div>
                    
                    <div className = "flex justify-evenly items-center">
                        <button onClick = {closeModelHandler} className = "capitalize px-4 p-2 rounded-lg cursor-pointer border border-transparent hover:border-red-400 hover:text-red-500 transition">cancel</button>
                        <button onClick = {submitFormHandler} className = "disabled:bg-sky-400/70 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer capitalize px-4 p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 shadow-md transition">create contact</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Model;