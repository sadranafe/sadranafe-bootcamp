const Navbar = () => {
    const userName = localStorage.getItem('userName')
    
    return (
        <>
            <nav className = 'w-full flex flex-wrap justify-between items-center bg-white/25 border border-white shadow-[0_3px_10px_rgba(0,0,0,0.05)] backdrop-blur-xl rounded-xl px-3 p-1'>
                <div className = 'w-10/12 flex items-center bg-re d-200 border-l border-neutral-200'>
                    <i className = "ph-light ph-magnifying-glass text-2xl"></i>
                    <input type = "text" className = 'w-full p-2 caret-blue-500 text-blue-600 placeholder:text-neutral-400 selection:bg-black selection:text-white' placeholder = 'جستجو کالا'/>
                </div>

                <div className = 'w-2/12 flex flex-wrap justify-center items-center gap-2'>
                    <div className = 'flex flex-wrap justify-center items-center text-gray-500 rounded-full h-9 w-9 overflow-hidden'>
                        <i className = "ph-light ph-user text-2xl"></i>
                    </div>

                    <div>
                        <p className = 'font-semibold'>{userName ? userName : 'guest'}</p>
                        <p className = 'text-neutral-500'>مدیر</p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;