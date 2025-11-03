import React from 'react';

const SearchBar = () => {
    return (
        <>
            <div className = 'w-10/12 bg-white/25 border border-white/60 shadow-[0_5px_10px_rgba(0,0,0,0.03)] relative rounded-xl overflow-hidden'>
                <input type = "text" placeholder = 'search ...' className = 'w-[93%] p-2.5 px-3 caret-blue-400 text-black/60 placeholder:text-neutral-400'/>
            </div>
        </>
    );
};

export default SearchBar;