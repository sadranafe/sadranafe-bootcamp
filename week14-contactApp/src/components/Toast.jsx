import { useContext, useEffect } from "react";
import { ContactAppContext } from "./context/ContactAppContext";

const Toast = () => {
    const { state , dispatch } = useContext(ContactAppContext);
    const { isFired , type , content } = state.toast
    useEffect(() => {
        if(isFired) {
            const timer = setTimeout(() => {
                dispatch({ type : 'TOAST' , payLoad : {isFired : false , type , content} })
            },3000)

            return () => clearTimeout(timer);
        }
    },[isFired])

    const typeStyles = {
        success : 'bg-emerald-400',
        error : 'bg-rose-400',
        info : 'text-sky-400',
    }
    return (
        <>
            <div className = {`${isFired ? 'opacity-100 block visible' : 'hidden opacity-0 invisible'} z-30 shadow-md absolute flex top-1 right-2 min-w-[150px] h-10 justify-start items-center gap-2.5 p-1.5 px-2.5 border-dashed border border-gray-300 rounded-2xl transition-all`}>
                <p className = {`font-medium text-lg w-[25px] h-[25px] rounded-full flex justify-center items-center ${typeStyles[type]}`}>
                    {type === 'success' && <i className = "bx bx-check text-white"></i>}
                    {type === 'error' && <i className = "bx bx-x text-white"></i>}
                    {type === 'info' && <i className = "bx bx-alert-circle text-xl"></i>}
                </p>

                <p className = "capitalize text-xs">{content}</p>
            </div>
        </>
    );
};

export default Toast;