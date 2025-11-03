import ContactAvatar from './contact/ContactAvatar';

const SideBar = () => {
    return (
        <>
            <div className = 'visible w-[30%] opacity-100 transition-all delay-300 duration-500 h-full border-r border-dashed border-r-gray-300'>
                <h1 className = 'capitalize text-xl font-semibold text-center'>contacts's info</h1>

                <div className = 'flex flex-wrap flex-col items-center justify-center gap-4 w-full h-full'>
                    <div className = 'capitalize flex flex-wrap justify-center items-center gap-2'>
                        <ContactAvatar customClasses = 'w-20 h-20' name = 'sadra' textSize = 'text-5xl'/>

                        <div className = 'w-full relative z-1 text-center flex justify-center items-center'>
                            <input type = "text" name = 'name' id = 'name' disabled className = 'w-[62%] capitalize text-center text-lg font-medium border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent caret-sky-500'/>
                        </div>
                    </div>

                    <div>
                        <div className = 'px-2 w-full capitalize flex gap-2.5 justify-center items-center mb-5'>
                            <div>
                                <i className = 'bx bx-envelope text-3xl text-sky-400'></i>
                            </div>

                            <div className = 'flex flex-wrap justify-start items-center'>
                                <h3 className = "capitalize font-medium w-full mb-1">email</h3>
                                <input type = "email" name = "email" id = 'email' disabled className = "border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent py-1 text-center disabled:text-start text-gray-500 caret-sky-500"/>
                            </div>
                        </div>
                        
                        <div className = 'px-2 w-full capitalize flex gap-2.5 justify-center items-center'>
                            <div>
                                <i className = 'bx bx-phone text-3xl text-sky-400'></i>
                            </div>

                            <div className = 'flex flex-wrap justify-start items-center'>
                                <h3 className = "capitalize font-medium w-full mb-1">phone</h3>
                                <input type = "phone" name = "phoneNumber" id = 'phone' disabled className = "border border-white/90 bg-white/20 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.03)] disabled:shadow-none disabled:bg-transparent disabled:border-transparent py-1 text-center disabled:text-start text-gray-500 caret-sky-500"/>
                            </div>
                        </div>
                    </div>

                    
                    <div className = 'flex justify-between items-center'>
                        <button className = "text-xs cursor-pointer p-2 px-3 m-2 mt-4 rounded-lg flex justify-center items-center border border-sky-500 text-sky-600 gap-2 transition-all hover:bg-sky-500 hover:text-white">
                            <i className = 'bx bx-pencil'></i>
                            edit
                        </button>

                        <button className = "text-xs cursor-pointer flex items-center justify-center gap-2 p-2 px-3 m-2 mt-4 rounded-lg text-red-500 font-medium border border-transparent transition-all hover:border-red-500">
                            <i className = 'bx bx-trash'></i>
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;