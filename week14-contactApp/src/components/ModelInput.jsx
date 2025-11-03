const ModelInput = ({ value , onChange , inputType , labelName , labelIcon }) => {
    return (
        <>
            <div className = {`border-white/50 bg-white/20 border shadow-[0_5px_10px_rgba(0,0,0,0.05)] rounded-lg px-3 gap-3 flex justify-start items-center`}>
                <label htmlFor = {labelName} className = "flex justify-start items-center gap-2 min-w-fit">
                    <i className = {`bx bx-${labelIcon} text-xl`}></i>
                    <p className = "capitalize font-medium text-gray-800">{labelName}</p>
                </label>

                <input type = { inputType } name = {labelName} id = {labelName} placeholder = {labelName} value = {value[labelName]} onChange = {onChange}  className = 'w-full py-3 text-cyan-700 placeholder:text-gray-500'/>
            </div>
        </>
    );
};

export default ModelInput;