import ModelInput from "./modelInput";

const Model = () => {
    const inputs = [
        { type: 'text', labelName: 'name', icon: 'user' },
        { type: 'email', labelName: 'email', icon: 'envelope' },
        { type: 'number', labelName: 'phoneNumber', icon: 'phone' },
    ]
    return (
        <>
            <div className = {`transition-all duration-100 w-screen z-10 h-screen fixed top-0 left-0`}>
                <div onClick = {() => {}} className = "overlay w-full h-full bg-black/40 backdrop-blur-sm z-10"></div>
                <div className = "w-full max-w-md p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/80 bg-white/65 backdrop-blur-sm shadow-[0_5px_10px_rgba(0,0,0,0.05)]">
                    <div className = "header flex justify-between items-start mb-4">
                        <div>
                            <h2 className = "capitalize text-xl font-semibold text-gray-800">create new contact</h2>
                            <p className = "text-gray-500 mt-1">enter the contact's details</p>
                        </div>
                        <button className = "text-gray-500 cursor-pointer hover:bg-red-500 hover:text-white transition rounded-lg w-7 h-7 flex justify-center items-center">
                            <i className = "bx bx-x"></i>
                        </button>
                    </div>
                    
                    <div className = "space-y-3 my-7">
                        {
                            inputs.map((input , index) => {
                                return (
                                    <ModelInput key = {index} labelName = {input.labelName} labelIcon = {input.icon} inputType = {input.type}/>
                                )
                            })
                        }
                    </div>
                    
                    <div className = "flex justify-evenly items-center">
                        <button className = "capitalize px-4 p-2 rounded-lg cursor-pointer border border-transparent hover:border-red-400 hover:text-red-500 transition">cancel</button>
                        <button className = "disabled:bg-sky-400/70 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer capitalize px-4 p-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 shadow-md transition">create contact</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Model;