import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast , { Toaster } from "react-hot-toast";
import Form from "../../components/Form";
import { authFormSchema } from "../../utils/authFormSchema";
import getHttpErrorMessage from "../../utils/httpErrorCodes";
import AuthInput from "../../components/AuthInput";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const { login } = useAuth();
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
                login(res.data.token)
                navigate('/dashboard')
            })
            .finally(console.log(token))
            .catch(err => {
                const status = err?.response?.status;
                const message = getHttpErrorMessage(status,{
                    400 : 'کاربری یافت نشد',
                    401 : 'نام کاربری یا رمز عبور صحیح نمیباشد'
                })
                toast.error(message)
            })
        }
    })

    const inputs = [
        { type : 'text' , labelName : 'userName' , icon : 'user'  , placeholder : 'نام کاربری'},
        { type : 'password' , labelName : 'password' , icon : 'key' , placeholder : 'رمز عبور' }
    ]

    return (
        <>
            <Form titleForm = 'فرم ورود'>
                <div className = "w-full flex flex-col flex-wrap justify-center items-center content-center gap-3">
                    {
                        inputs.map((input , index) => {
                            return(
                                <AuthInput key = {index} formik = {formik} error = {formik.errors[input.labelName]} fieldHasError = {formik.errors[input.labelName] && formik.touched[input.labelName]} labelName = {input.labelName} icon = {input.icon} inputType = {input.type} placeholder = {input.placeholder}/>
                            )
                        })
                    }
                </div>

                <div className = "w-full flex flex-wrap justify-center items-center gap-4">
                    <button type = "submit" onClick = { formik.handleSubmit } className = "cursor-pointer text-white bg-cyan-500 hover:bg-blue-900 transition-all rounded-lg py-2.5 w-10/12">ورود</button>
                    <Link to = '/auth/register' className = "text-blue-500 text-xs transition-all border-b border-transparent hover:border-b-blue-400">ایجاد حساب کاربری !</Link>
                </div>
            </Form>

            <Toaster position = "top-left"/>
        </>
    );
};

export default Login;