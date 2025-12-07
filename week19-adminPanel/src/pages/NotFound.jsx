import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className = "w-full h-screen flex flex-wrap justify-center items-center content-center gap-4">
            <div className = "text-center w-full">
                <h1 className = "deliusFont font-bold text-6xl max-sm:text-5xl">404</h1>
                <h2 className = "deliusFont text-sm mt-2">There is no fish</h2>
            </div>
            
            <img src = "/notFoundImg.png" alt = "not found" className = "w-lg"/>

            <div className = "w-full">
                <Link to = '/' className = "mx-auto w-fit deliusFont text-[15px] flex flex-wrap justify-center items-center hover:bg-blue-200 hover:border-blue-200 pr-3 border border-blue-400 p-1 rounded-lg transition-all">
                    <i className = 'bx bx-chevron-left'></i>
                    back
                </Link>
            </div>
        </div>
    );
};

export default NotFound;