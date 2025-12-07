
const NotFound = () => {
    return (
        <div className = "w-full h-screen flex flex-wrap flex-col justify-center items-center">
            <div className = "text-center">
                <h1 className = "font-bold text-6xl max-sm:text-5xl">404</h1>
                <h2 className = "text-sm mt-2">There is no fish</h2>
            </div>
            
            <img src = "/notFoundImg.png" alt = "not found" className = "w-lg"/>
        </div>
    );
};

export default NotFound;