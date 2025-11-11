import { useEffect, useState } from "react";

const Input = ({ DUMMYCities }) => {
    const [enteredValue , setEnteredValue] = useState('');
    const [debouncedValue , setDebouncedValue] = useState(enteredValue);
    const [DUMMYFilteredCities , setDUMMYFilteredCities] = useState([]);

    useEffect(() => {
        const debounceMS = 200
        const timer = setTimeout(() => setDebouncedValue(enteredValue) , debounceMS)
        return () => clearTimeout(timer)
    },[enteredValue])

    useEffect(() => {
        if(!debouncedValue) {
            setDUMMYFilteredCities([])
            return;
        }

        const filteredCities = DUMMYCities.filter(city => city.startsWith(debouncedValue , 0))
        if(filteredCities.length > 0) {
            setDUMMYFilteredCities(filteredCities)
        } else {
            setDUMMYFilteredCities([])
        }
    }, [DUMMYCities , debouncedValue])

    useEffect(() => {
        window.addEventListener('click' , () => setDUMMYFilteredCities([]))
        return () => window.removeEventListener('click' , () => setDUMMYFilteredCities([]))
    },[])

    const selectHandler = city => {
        setEnteredValue(city);
        setDUMMYFilteredCities([]);
    }
    
    const keyDownHandler = ev => {
        if(ev.key === 'Tab' && DUMMYFilteredCities) {
            ev.preventDefault();
            setEnteredValue(DUMMYFilteredCities[0]);
        }
    }

    return (
        <>
            <div className = "relative w-fit m-5">
                <label htmlFor = "input" className = "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 z-[-1] pointer-events-none">{DUMMYFilteredCities[0]}</label>
                <input type = "text" id = 'input' value = {enteredValue} onChange = { ev => setEnteredValue(ev.target.value) } onKeyDown = {keyDownHandler} placeholder = "search your city..." className = 'bg-transparent border border-emerald-600 outline-0 rounded-lg p-2 px-3'/>
                
                {
                    DUMMYFilteredCities.length !== 0 &&
                    // i use stopPropagation to prevent the eventListener from being triggered in the windows.
                    <ul onClick = {ev => ev.stopPropagation()} className = "max-h-[146px] absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-scroll">
                        {
                            DUMMYFilteredCities.map((city , index) => {
                                return (
                                    <li key = {index} onClick = {() => selectHandler(city)} className = "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors">{city}</li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </>
    );
};

export default Input;