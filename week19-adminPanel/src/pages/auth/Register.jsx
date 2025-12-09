import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from 'yup';
import Form from "../../components/Form";
import { authFormSchema } from "../../utils/authFormSchema";
import getHttpErrorMessage from "../../utils/httpErrorCodes";
import AuthInput from "../../components/AuthInput";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
                    400 : 'این نام کاربری قبلا ساخته شده'
                })
                toast.error(message)
            })
        }
    })

    const inputs = [
        { type : 'text' , labelName : 'userName' , icon : 'user'  , placeholder : 'نام کاربری'},
        { type : 'password' , labelName : 'password' , icon : 'lock' , placeholder : 'رمز عبور' },
        { type : 'password' , labelName : 'repeatedPassword' , icon : 'lock' , placeholder : 'تکرار رمز عبور' }
    ]

    return (
        <>
            <Form titleForm = 'فرم ثبت نام'>
                <div className = "w-full flex flex-col flex-wrap justify-center items-center content-center gap-3">
                    {
                        inputs.map((input , index) => {
                            return(
                                <AuthInput key = {index} formik = {formik} labelName = {input.labelName} error = {formik.errors[input.labelName]} fieldHasError = {formik.errors[input.labelName] && formik.touched[input.labelName]} icon = {input.icon} inputType = {input.type} placeholder = {input.placeholder}/>
                            )
                        })
                    }
                </div>

                <div className = "w-full flex flex-wrap justify-center items-center gap-4">
                    <button type = "submit" onClick = {formik.handleSubmit} className = "cursor-pointer text-white bg-blue-500 rounded-lg py-2 w-10/12">ثبت نام</button>
                    <Link to = '/auth/login' className = "text-blue-500 text-xs transition-all border-b border-transparent hover:border-b-blue-400">حساب کاربری دارید؟</Link>
                </div>
            </Form>

            <Toaster position = "top-left"/>
        </>
    );
};

export default Register;