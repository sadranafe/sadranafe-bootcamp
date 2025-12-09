import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from 'yup';
import Form from "../../components/Form";

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            userName : '',
            password : '',
            repeatedPassword : '',
        },
        validationSchema: yup.object({
            userName : yup.string()
            .min(3 , 'Must be at least 3 characters or more')
            .max(15 , 'Must be 15 characters or less')
            .required('userName is required'),
            password : yup.string()
            .min(8 , 'Password must be at least 8 characters')
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[a-zA-Z]/, "Password must contain at least one letter")
            .required('password is required'),
            repeatedPassword : yup.string()
            .oneOf([yup.ref('password')] , 'Passwords do not match')
            .required('confirm password is required')
        }),
        onSubmit : val => {
            axios.post('http://localhost:3000/auth/register' , {
                'username' : JSON.stringify(val.userName),
                'password' : JSON.stringify(val.password),
            })
            .then(navigate('/auth/login' , { replace : true }))
            .catch(err => {
                if(!err.response) {
                    console.error('Network error')
                    return;
                }
                const status = err.response.status;

                switch(status){
                    case 400 : {
                        console.error('user already exists');
                        break;
                    };
                    case 401 : {
                        console.error('Unauthorized: invalid credentials');
                        break;
                    };
                    case 404 : {
                        console.error('Not found.')
                    };
                    case 500 : {
                        console.error('server errors');
                    }
                }
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