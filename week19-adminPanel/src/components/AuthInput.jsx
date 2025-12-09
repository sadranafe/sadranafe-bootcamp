import ErrorMessage from "./ErrorMessage";


const AuthInput = ({ formik , inputType , labelName , placeholder , icon , error , fieldHasError }) => {
    return (
        <>
            <div className = {`${fieldHasError ? 'border-red-300' : 'border-white'} bg-white/25 w-10/12 border shadow-[0_5px_10px_rgba(0,0,0,0.07)] rounded-lg px-3 gap-3 flex justify-start items-center`}>
                <label htmlFor = {labelName} className = 'flex justify-start items-center gap-2 min-w-fit'>
                    <i className = {`bx bx-${icon} text-lg`}></i>
                </label>

                <input type = {inputType} value = {formik.values[labelName]} onBlur = {formik.handleBlur} onChange = {formik.handleChange} id = {labelName} name = {labelName} placeholder = {placeholder} className = 'w-full py-2.5 text-blue-800 outline-none placeholder:text-gray-500'/>
                <ErrorMessage errorMsg = {error} fieldHasError = {fieldHasError}/>
            </div>
        </>
    );
};

export default AuthInput;