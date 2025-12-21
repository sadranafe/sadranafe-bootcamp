import ErrorMessage from '../ErrorMessage';

const InputModal = ({ input , formik , error , fieldHasError }) => {
    const { type , name , placeholder } = input;

    return (
        <>
            <div className = 'my-5'>
                <label htmlFor = {name}>{placeholder}</label>
                <div className = 'my-1 border-white/80 bg-white/25 border shadow-[0_5px_10px_rgba(0,0,0,0.05)] rounded-lg px-3 gap-3 flex justify-start items-center'>
                    <input type = {type} name = {name} id = {name} placeholder = {placeholder} value = {formik.values[name]} { ...formik.getFieldProps(name) } className = 'w-full py-2.5 text-blue-800 outline-none placeholder:text-gray-500'/>
                    <ErrorMessage errorMsg = {error} fieldHasError = {fieldHasError}/>
                </div>
            </div>
        </>
    );
};

export default InputModal;