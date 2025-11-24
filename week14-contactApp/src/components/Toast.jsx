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
        success : 'bg-emerald-300/80',
        error : 'bg-rose-300/80',
        info : 'bg-transparent text-black/75',
    }
    return (
        <>
            <div className = {`${isFired ? 'opacity-100 block visible' : 'hidden opacity-0 invisible'} z-30 shadow-lg absolute flex top-3.5 min-w-40 backdrop-blur-xl bg-linear-to-r from-[#cacacab8] to-neutral-100 h-10 justify-start items-center gap-2.5 p-5 px-3 border border-white/50 rounded-2xl transition-all`}>
                <p className = {`font-medium text-lg w-[25px] h-[25px] rounded-md flex justify-center items-center ${typeStyles[type]}`}>
                    {type === 'success' && <i className = "bx bx-check"></i>}
                    {type === 'error' && <i className = "bx bx-x"></i>}
                    {type === 'info' && <i className = "bx bx-alert-triangle text-xl"></i>}
                </p>

                <p className = "capitalize text-xs">{content}</p>
            </div>
        </>
    );
};

export default Toast;