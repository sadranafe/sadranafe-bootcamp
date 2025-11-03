import { useEffect, useState } from 'react';
import ContactAvatar from './contact/ContactAvatar';
import ErrorMessage from './ErrorMessage';
import { FormatPhoneNumber, ValidateForm } from '../utils/helper';

const SideBar = ({ DUMMYCONTACTS , dummycontactsHandler , onUpdate , onSelectedContact , setToast , onToastIsFired , selectedContact , selectedContactIsEmpty , isEditing , onIsEditing }) => {
    const [editData , setEditData] = useState(selectedContact || {});
    const [errors , setErrors] = useState({});
    const { name } = selectedContact;

    useEffect(() => {
        setEditData(selectedContact || {});
        setErrors({})

        const ESCHandler = ev => {
            if(ev.key === 'Escape') onSelectedContact({});
        }

        window.addEventListener('keydown' , ESCHandler)
        return () => window.removeEventListener('keydown' , ESCHandler)
    } , [selectedContact])

    const editHandler = ev => {
        const { name , value } = ev.target;
        const rawValue = name === 'phoneNumber' ?  value.replace(/\D/g , "") : value;
        setEditData(prev => {
            return ({...prev , [name] : rawValue})
        })
        if(errors[name]){
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    }

    const editContactHandler = () => {
        if(!ValidateForm(editData , setErrors)){
            onToastIsFired(true);
            setToast({type : 'error' , content : 'fields has error'});
            return;
        };
        if(isEditing) onUpdate(editData);
        onIsEditing(!isEditing);
        setErrors({});
    }
    const cancelOrDeleteHandler = () => {
        if(isEditing) {
            onIsEditing(false);
            setEditData(selectedContact)
        } else {
            dummycontactsHandler(prevContact => {
                const index = prevContact.findIndex(contact => contact.id === selectedContact.id);
                const updated = prevContact.filter(contact => contact.id !== selectedContact.id);

                if(updated.length > 0) {
                    const nextIndex = index >= updated.length ? updated.length - 1 : index;
                    onSelectedContact(updated[nextIndex])
                } else {
                    onSelectedContact({})
                }
                onToastIsFired(true)
                setToast({type : 'info' , content : 'user deleted'})
                return updated;
            })
        }
    }
    return (
        <>
            <div className = {`${selectedContactIsEmpty ? 'invisible w-0 opacity-0' : 'visible w-[30%] opacity-100'} transition-all delay-300 duration-500 h-full border-r border-dashed border-r-gray-300`}>
                <h1 className = 'capitalize text-xl font-semibold text-center'>contacts's info</h1>

                <div className = 'flex flex-wrap flex-col items-center justify-center gap-4 w-full h-full'>
                    <div className = 'capitalize flex flex-wrap justify-center items-center gap-2'>
                        <ContactAvatar customClasses = 'w-20 h-20' name = {name} textSize = 'text-5xl'/>

                        <div className = 'w-full relative z-1 text-center flex justify-center items-center'>
                            <input type = "text" name = 'name' id = 'name' value = {editData.name || ''} onChange = {editHandler} disabled = {!isEditing} className = 'w-[62%] capitalize text-center text-lg font-medium border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent caret-sky-500'/>
                            <div>
                                <ErrorMessage fieldHasError = {errors.name !== '' && errors.name !== undefined} errorMsg = {errors.name}/>
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
                                <input type = "email" name = "email" id = 'email' value = {editData.email || ''} onChange = {editHandler} disabled = {!isEditing} className = "border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent py-1 text-center disabled:text-start text-gray-500 caret-sky-500"/>
                                <ErrorMessage fieldHasError = {errors.email !== '' && errors.email !== undefined} errorMsg = {errors.email}/>
                            </div>
                        </div>
                        
                        <div className = 'px-2 w-full capitalize flex gap-2.5 justify-center items-center'>
                            <div>
                                <i className = 'bx bx-phone text-3xl text-sky-400'></i>
                            </div>

                            <div className = 'flex flex-wrap justify-start items-center'>
                                <h3 className = "capitalize font-medium w-full mb-1">phone</h3>
                                <input type = "phone" name = "phoneNumber" id = 'phone' value = {FormatPhoneNumber(editData.phoneNumber) || ''} onChange = {editHandler} disabled = {!isEditing} className = "border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent py-1 text-center disabled:text-start text-gray-500 caret-sky-500"/>
                                <ErrorMessage fieldHasError = {errors.phoneNumber !== '' && errors.phoneNumber !== undefined} errorMsg = {errors.phoneNumber}/>
                            </div>
                        </div>
                    </div>

                    
                    <div className = 'flex justify-between items-center'>
                        <button onClick = {editContactHandler} className = "text-xs cursor-pointer p-2 px-3 m-2 mt-4 rounded-lg flex justify-center items-center border border-sky-500 text-sky-600 gap-2 transition-all hover:bg-sky-500 hover:text-white">
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