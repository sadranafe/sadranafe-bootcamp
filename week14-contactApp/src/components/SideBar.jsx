import { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import ContactAvatar from './contact/ContactAvatar';
import ErrorMessage from './ErrorMessage';
import { ContactAppContext } from './context/ContactAppContext';
import { contactEditSchema } from '../utils/ContactAppEditSchema';

const SideBar = () => {
    const {state , dispatch} = useContext(ContactAppContext);
    const { isEditing , selectedContact } = state;

    const selectedContactIsEmpty = Object.values(selectedContact).length === 0;

    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            name: selectedContact?.name || "",
            email: selectedContact?.email || "",
            phoneNumber: selectedContact?.phoneNumber || "",
        },
        validationSchema : contactEditSchema,
        onSubmit : val => {
            dispatch({ type : 'UPDATE_CONTACT',
                payLoad : { ...selectedContact , ...val }
            })

            dispatch({ type : 'EDITING_STATUS' , payLoad : false })
        }
    })

    useEffect(() => {
        dispatch({ type : 'SET_EDITING' , payLoad : false })

        const ESCHandler = ev => {
            if(ev.key === 'Escape') dispatch({ type : "SET_SELECTED_CONTACT" , payLoad : {} });
        }

        window.addEventListener('keydown' , ESCHandler)
        return () => window.removeEventListener('keydown' , ESCHandler)
    } , [selectedContact])

    const toggleEdit = () => {
        if(!isEditing) {
            dispatch({ type : 'EDITING_STATUS' , payLoad : true })
            return;
        }

        formik.handleSubmit();
    }

    const cancelOrDeleteHandler = () => {
        if(isEditing) {
            formik.resetForm();
        } else {
            dispatch({ type : 'DELETE_CONTACT', payLoad : selectedContact.id })
        }
    }

    return (
        <>
            <div className = {`${selectedContactIsEmpty ? 'invisible w-0 opacity-0' : 'visible w-[30%] opacity-100'} transition-all delay-300 duration-500 h-full border-r border-dashed border-r-gray-300`}>
                <h1 className = 'capitalize text-xl font-semibold text-center'>contact's info</h1>

                <div className = 'flex flex-wrap items-center justify-center w-full h-full'>
                    <div className = 'capitalize flex flex-wrap justify-center items-center gap-2'>
                        <ContactAvatar customClasses = 'w-20 h-20' name = {formik.values.name} textSize = 'text-5xl'/>

                        <div className = 'w-full relative z-1 text-center flex justify-center items-center'>
                            <input type = "text" name = 'name' id = 'name' {...formik.getFieldProps("name")} disabled = {!isEditing} className = 'w-[62%] capitalize text-center text-lg font-medium border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent caret-sky-500'/>
                            <div className = 'absolute right-6'>
                                <ErrorMessage fieldHasError = {formik.touched.name && formik.errors.name} errorMsg = {formik.errors.name}/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className = 'px-2 w-full capitalize flex gap-2.5 justify-center items-center mb-5'>
                            <div>
                                <i className = 'bx bx-envelope text-3xl text-sky-400'></i>
                            </div>

                            <div className = 'flex flex-wrap justify-start items-center'>
                                <h3 className = "capitalize font-medium w-full mb-1">email</h3>
                                <input type = "email" name = "email" id = 'email' {...formik.getFieldProps("email")} disabled = {!isEditing} className = "border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent py-1 text-center disabled:text-start text-gray-500 caret-sky-500"/>
                                <ErrorMessage fieldHasError = {formik.touched.email && formik.errors.email} errorMsg = {formik.errors.email}/>
                            </div>
                        </div>
                        
                        <div className = 'px-2 w-full capitalize flex gap-2.5 justify-center items-center'>
                            <div>
                                <i className = 'bx bx-phone text-3xl text-sky-400'></i>
                            </div>

                            <div className = 'flex flex-wrap justify-start items-center'>
                                <h3 className = "capitalize font-medium w-full mb-1">phone</h3>
                                <input type = "phone" name = "phoneNumber" id = 'phone' {...formik.getFieldProps("phoneNumber")} disabled = {!isEditing} className = "border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent py-1 text-center disabled:text-start text-gray-500 caret-sky-500"/>
                                <ErrorMessage fieldHasError = {formik.touched.phoneNumber && formik.errors.phoneNumber} errorMsg = {formik.errors.phoneNumber}/>
                            </div>
                        </div>
                    </div>

                    
                    <div className = 'flex justify-between items-center'>
                        <button type = 'button' onClick = {toggleEdit} className = "text-xs cursor-pointer p-2 px-3 m-2 mt-4 rounded-lg flex justify-center items-center border border-sky-500 text-sky-600 gap-2 transition-all hover:bg-sky-500 hover:text-white">
                            <i className = {`bx ${isEditing ? 'bx-check' : 'bx-pencil'}`}></i>
                            {isEditing ? 'save' : 'edit'}
                        </button>

                        <button onClick = {cancelOrDeleteHandler} className = "text-xs cursor-pointer flex items-center justify-center gap-2 p-2 px-3 m-2 mt-4 rounded-lg text-red-500 font-medium border border-transparent transition-all hover:border-red-500">
                            <i className = {`bx ${isEditing ? 'bx-x' : 'bx-trash'}`}></i>
                            {isEditing ? 'cancel' : 'delete'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;