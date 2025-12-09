import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from 'yup';
import Form from "../../components/Form";
import { authFormSchema } from "../../utils/authFormSchema";
import getHttpErrorMessage from "../../utils/httpErrorCodes";

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            userName : '',
            password : '',
            repeatedPassword : '',
        },
        validationSchema: authFormSchema(true),
        onSubmit : val => {
            axios.post('http://localhost:3000/auth/register' , {
                username : JSON.stringify(val.userName),
                password : JSON.stringify(val.password),
            })
            .then((res) => {
                console.log(res)
                if(res.statusText === "Created" && res.status === 201){
                    navigate('/auth/login' , { replace : true })
                }
            })
            .catch(err => {
                const status = err?.response?.status;
                const message = getHttpErrorMessage(status , {
                    400 : 'user already exists.'
                })
                alert(message);
            })
        }
    })
    return (
        <Form titleForm = 'فرم ثبت نام'>
            <div className = "w-full flex flex-col flex-wrap justify-center items-center content-center gap-3">
                <input type = "text" id = "userName" name = "userName" {...formik.getFieldProps('userName')} placeholder = "نام کاربری" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
                <input type = "password" id = "password" name = "password" {...formik.getFieldProps('password')} placeholder = "رمز عبور" autoComplete = "new-password" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
                <input type = "password" id = "repeatedPassword" name = "repeatedPassword" {...formik.getFieldProps('repeatedPassword')} placeholder = "تکرار  رمز عبور" className = "border border-white bg-neutral-100/60 backdrop-blur-xl rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.05)] outline-none p-2 px-3 w-10/12"/>
            </div>

            <div className = "w-full flex flex-wrap justify-center items-center gap-4">
                <button type = "submit" onClick = {formik.handleSubmit} className = "text-white bg-blue-500 rounded-lg py-2 w-10/12">ثبت نام</button>
                <Link to = '/auth/login' className = "text-blue-500 text-xs transition-all border-b border-transparent hover:border-b-blue-400">حساب کاربری دارید؟</Link>
            </div>
        </Form>
    );
};

export default Register;