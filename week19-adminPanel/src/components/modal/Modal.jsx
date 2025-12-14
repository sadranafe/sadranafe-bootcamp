const Modal = ({ children , isOpen , onClose }) => {
    return (
        <div className = {`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed top-0 left-0 w-screen z-50 h-screen transition-all duration-100`}>
            <div onClick = {onClose} className = 'overlay w-full h-full bg-black/40 backdrop-blur-sm z-40'></div>

            <div className = 'w-full flex flex-wrap items-center justify-center max-w-md p-6 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_5px_10px_rgba(0,0,0,0.05)]'>
                {children}
            </div>
        </div>
    );
};

export default Modal;