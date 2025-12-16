import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import toast , { Toaster } from "react-hot-toast";
import InputModal from "./InputModal";
import modalFormSchema from "../../utils/modalFormSchema";
import getHttpErrorMessage from "../../utils/httpErrorCodes";

const token = localStorage.getItem('token')
const mutationFn = data => {
    return axios.post('http://localhost:3000/products' , data , {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
}

const ProductModalForm = ({ onClose , action , BtnContent }) => {
    const { mutate , isPending , isError , error } = useMutation({ mutationFn });

    const formik = useFormik({
        initialValues : {
            productName : '',
            inventory : '',
            price : '',
        },
        validationSchema : modalFormSchema,
        onSubmit : val => {
            const data = {
                name : val.productName,
                price : val.price,
                quantity : val.inventory
            }

            switch(action){
                case 'add_product' : {
                    mutate(data , {
                        onSuccess : res => {
                            console.log(res.data)
                            toast.success('محصول جدید با موفقیت اضافه شد')
                        },
                        onError : err => {
                            const status = err?.status
                            const message = getHttpErrorMessage(status , {
                                401 : 'دسترسی غیرمجاز : لطفا دوباره وارد حساب کاربری خود شوید'
                            })
                            toast.error(message)
                        }
                    })
                }

                case 'edit_product' : {

                }
            }
        }

    })

    const inputs = [
        { type : 'text' , name : 'productName' , placeholder : 'نام کالا' },
        { type : 'number' , name : 'inventory' , placeholder : 'موجودی کالا' },
        { type : 'number' , name : 'price' , placeholder : 'قیمت کالا' },
    ]

    return (
        <>
            <h2 className = 'font-semibold text-lg'>ایجاد محصول جدید</h2>
            <div className = 'w-full'>
                {
                    inputs.map((input , index) => {
                        return(
                            <InputModal key = {index} formik = {formik} error = {formik.errors[input.name]} fieldHasError = {formik.errors[input.name] && formik.touched[input.name]} input = {input}/>
                        )
                    })
                }
                
                <div className = "w-full text-center">
                    <button type = "submit" onClick = {formik.handleSubmit} className = 'bg-blue-500 hover:bg-blue-600 transition-all text-white p-2 px-10 rounded-lg ml-2 cursor-pointer'>{BtnContent}</button>
                    <button onClick = {onClose} className = 'bg-neutral-400/65 hover:bg-neutral-400 transition-all p-2 px-10 rounded-lg cursor-pointer'>انصراف</button>
                </div>
            </div>
        </>
    );
};

export default ProductModalForm;