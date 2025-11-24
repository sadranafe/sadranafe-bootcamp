import { memo, useContext, useEffect, useState } from "react";
import { ContactAppContext } from "./context/ContactAppContext";

const SearchBar = () => {
    const { state , dispatch } = useContext(ContactAppContext)
    const [searchInput , setSearchInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({ type : 'SET_DEBOUNCED_SEARCH' , payLoad : searchInput })
        } , 500)
        return () => clearTimeout(timer);
    },[searchInput])

    return (
        <>
            <div className = 'w-10/12 bg-white/25 border border-white/60 shadow-[0_5px_10px_rgba(0,0,0,0.03)] relative rounded-xl overflow-hidden'>
                <input type = "text" placeholder = 'search ...' value = {searchInput} onChange = {ev => setSearchInput(ev.target.value)} className = 'w-[93%] p-2.5 px-3 caret-blue-400 text-black/60 placeholder:text-neutral-400'/>
                {
                    searchInput !== '' &&
                    <button onClick = {() => setSearchInput('')} className = "absolute top-1/2 -translate-1/2 -right-4 text-sm text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer w-[7%] h-full flex justify-center items-center">
                        <i className = "bx bx-x"></i>
                    </button>
                }
            </div>
        </>
    );
};

export default memo(SearchBar);