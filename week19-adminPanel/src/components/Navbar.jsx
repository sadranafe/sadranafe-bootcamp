import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className = "bg-neutral-200/30 py-2 flex flex-row-reverse justify-around items-center">
                <div>
                    <Link to = '/'>
                        <img src = "logoBrandTrans.png" width = '150px' alt = "teccctt | exclusive brand of sadra nafe" />
                    </Link>
                </div>

                <div className = "flex gap-5">
                    <Link to = "/" className = "p-2 px-3 border-b border-transparent hover:border-blue-500 transition-all">خانه</Link>
                    <Link to = "/products" className = "p-2 px-3 border-b border-transparent hover:border-blue-500 transition-all">محصولات</Link>
                    <Link to = "/about-us" className = "p-2 px-3 border-b border-transparent hover:border-blue-500 transition-all">درباره ما</Link>
                </div>
                
                <div className = "flex flex-row-reverse gap-3 items-center">
                    <Link to = '/auth/register' className = "px-3 p-1.5 backdrop-blur-md bg-white/30 hover:bg-white/60 border border-white/65 rounded-lg">ثبت نام</Link>
                    <Link to = '/auth/login' className = "bg-blue-400 px-4 p-1.5 rounded-md text-white hover:bg-blue-500 transition-all">ورود</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;