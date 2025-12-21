import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import InputModal from "./InputModal";
import modalFormSchema from "../../utils/modalFormSchema";
import getHttpErrorMessage from "../../utils/httpErrorCodes";

const token = localStorage.getItem('token')

const ProductModalForm = ({ onClose , action , BtnContent , product }) => {
    const queryClient = useQueryClient();
    const addProductMutation = useMutation({
        mutationFn :  data => {
            return axios.post('http://localhost:3000/products' , data , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        },
        onSuccess : () => {
            queryClient.invalidateQueries(['products'])
            toast.success('محصول جدید با موفقیت اضافه شد')
        },
        onError : () => {
            const status = err?.status
            const message = getHttpErrorMessage(status , {
                401 : 'دسترسی غیرمجاز : لطفا دوباره وارد حساب کاربری خود شوید'
            })
            toast.error(message)
        }
    })
    
    const editProductMutation = useMutation({
        mutationFn : data => {
            return axios.put(`http://localhost:3000/products/${product.id}`,data, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
        },
        onSuccess : () => {
            queryClient.invalidateQueries(['products']);
            toast.success('محصول موردنظر با موفقیت ویرایش شد')
            onClose();
        },
        onError : () => {
            const status = err?.status;
            const message = getHttpErrorMessage(status , {
                401: 'خطای دسترسی:لطفا دوباره وارد شوید',
                404 : 'محصول مورنظر یافت نشد'
            })
            toast.error(message)
        }
    })

    const isPending = addProductMutation.isPending || editProductMutation.isPending

    const formik = useFormik({
        initialValues : {
            productName : product?.name || '',
            inventory : product?.quantity || '',
            price : product?.price || '',
        },
        validationSchema : modalFormSchema,
        enableReinitialize : action === 'edit_product' ? true : false,
        onSubmit : val => {
            const data = {
                name : val.productName,
                price : val.price,
                quantity : val.inventory
            }

            switch(action){
                case 'add_product' : {
                    addProductMutation.mutate(data)
                    break;
                }

                case 'edit_product' : {
                    editProductMutation.mutate(data)
                    break;
                }
            }
        }

    })

    const inputs = [
        { type : 'text' , name : 'productName' , placeholder : 'نام کالا' },
        { type : 'number' , name : 'inventory' , placeholder : 'موجودی کالا' },
        { type : 'number' , name : 'price' , placeholder : 'قیمت کالا (به تومان)' },
    ]

    return (
        <>
            <h2 className = 'font-semibold text-lg'>{action === 'edit_product' ? 'ویرایش محصول' : 'ایجاد محصول جدید'}</h2>
            <div className = 'w-full'>
                {
                    inputs.map((input , index) => {
                        return(
                            <InputModal key = {index} formik = {formik} error = {formik.errors[input.name]} fieldHasError = {formik.errors[input.name] && formik.touched[input.name]} input = {input}/>
                        )
                    })
                }
                
                <div className = "w-full text-center">
                    <button type = "submit" onClick = {formik.handleSubmit} disabled = {isPending || (action === 'edit_product' && !formik.dirty)} className = 'bg-blue-500 hover:bg-blue-600 transition-all text-white p-2 px-10 rounded-lg ml-2 cursor-pointer disabled:cursor-not-allowed'>{ isPending ? 'صبر کنید'  : BtnContent}</button>
                    <button onClick = {onClose} className = 'bg-neutral-400/65 hover:bg-neutral-400 transition-all p-2 px-10 rounded-lg cursor-pointer'>انصراف</button>
                </div>
            </div>
        </>
    );
};

export default ProductModalForm;