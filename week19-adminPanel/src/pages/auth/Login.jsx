import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { useFormik } from "formik";
import { authFormSchema } from "../../utils/authFormSchema";
import axios from "axios";
import getHttpErrorMessage from "../../utils/httpErrorCodes";

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            userName : '',
            password : '',
        },
        validationSchema : authFormSchema(false),
        onSubmit : val => {
            axios.post('http://localhost:3000/auth/login' , {
                'username' : JSON.stringify(val.userName),
                'password' : JSON.stringify(val.password)
            })
            .then(res => {
                console.log(res)
                localStorage.setItem('token' , res.data.token)
                navigate('/dashboard')
            })
            .catch(err => {
                const status = err?.response?.status;
                const message = getHttpErrorMessage(status,{
                    400 : 'invalid credentials',
                    401 : 'wrong username or password'
                })

                alert(message);
            })
        }
    })

    return (
        <Form titleForm = 'فرم ورود'>
            <div className = "w-full flex flex-col flex-wrap justify-center items-center content-center gap-3">
                <input type = "text" id = "userName" name = "userName" {...formik.getFieldProps('userName')} placeholder = "نام کاربری" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
                <input type = "password" id = "password" name = "password" {...formik.getFieldProps('password')} placeholder = "رمز عبور" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
            </div>

            <div className = "w-full flex flex-wrap justify-center items-center gap-4">
                <button type = "submit" onClick = { formik.handleSubmit } className = "text-white bg-blue-500 rounded-lg py-2 w-10/12">ورود</button>
                <Link to = '/auth/register' className = "text-blue-500 text-xs transition-all border-b border-transparent hover:border-b-blue-400">ایجاد حساب کاربری !</Link>
            </div>
        </Form>
    );
};

export default Login;