import { useEffect, useState } from "react";

const Theme = () => {
    const [theme , setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('theme' , theme)
    },[theme])

    return (
        <>
            <button onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')} className = "fixed top-4 right-4 w-11 h-11 text-lg flex justify-center items-center bg-gray-200 dark:bg-neutral-900 dark:text-neutral-200 border dark:border-neutral-700 border-neutral-100 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                {
                    theme === 'dark' ? '🌙' : '☀️'
                }
            </button>
        </>
    );
};

export default Theme;