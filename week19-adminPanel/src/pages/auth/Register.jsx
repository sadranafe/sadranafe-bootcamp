import { Link } from "react-router-dom";
import Form from "../../components/Form";

const Register = () => {
    return (
        <Form titleForm = 'فرم ثبت نام'>
            <div className = "w-full flex flex-col flex-wrap justify-center items-center content-center gap-3">
                <input type = "text" placeholder = "نام کاربری" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
                <input type = "password" placeholder = "رمز عبور" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
                <input type = "password" placeholder = "تکرار  رمز عبور" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
            </div>

            <div className = "w-full flex flex-wrap justify-center items-center gap-4">
                <button type = "submit" className = "text-white bg-blue-500 rounded-lg py-2 w-10/12">ثبت نام</button>
                <Link to = '/auth/login' className = "text-blue-500 text-xs transition-all border-b border-transparent hover:border-b-blue-400">حساب کاربری دارید؟</Link>
            </div>
        </Form>
    );
};

export default Register;