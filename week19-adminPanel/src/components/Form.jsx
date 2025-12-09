const Form = ({ children , titleForm }) => {
    return (
        <>
            <div className = 'relative w-full h-screen flex flex-wrap justify-center items-center'>
                <h1 className = 'absolute top-3 left-1/2 -translate-x-1/2 font-medium text-3xl'>Teccctt</h1>

                <div className = 'w-3/12 flex flex-wrap gap-7 py-5 px-3 justify-center items-center bg-neutral-200/5 border border-white/90 shadow-[0_5px_15px_rgba(0,0,0,0.055)] backdrop-blur-xl rounded-4xl'>
                    <div className = 'text-center mb-5'>
                        <img src = "/logoBrandTrans.png" alt = "teccctt - exclusive brand of sadra nafe" width = '170px'/>
                        <h2 className = 'text-lg font-medium mt-2'>{ titleForm }</h2>
                    </div>

                    {children}
                </div>
            </div>
        </>
    );
};

export default Form;