import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import getHttpErrorMessage from "../../utils/httpErrorCodes";
import toast from "react-hot-toast";

const DeleteProductModal = ({ onClose , productId , page }) => {
    const queryClient = useQueryClient()
    const mutationFn = () => {
        return axios.delete(`http://localhost:3000/products/${productId}` , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    
    const { mutate, isPending } = useMutation({
        mutationFn,
        onSuccess : () => {
            toast.success('محصول موردنظر حذف شد')
            queryClient.setQueryData(['products' , page],oldData => {
                if(!oldData) return oldData;

                const updatedData = {
                    ...oldData ,
                    data : oldData.data.filter(product => product.id !== productId),
                    total: oldData.total - 1
                }
                return updatedData;
            })

            queryClient.invalidateQueries({
                queryKey : ['products' , page],
                refetchType : 'active'
            })
            
            onClose()            
        },
        onError : err => {
            const status = err?.status
            const message = getHttpErrorMessage(status , {
                401 : 'دسترسی غیرمجاز : لطفا دوباره وارد حساب کاربری خود شوید',
                404 : 'محصول یافت نشد',
            })
            toast.error(message)
        }
    })


    return (
        <>
            <div>
                <img src = "./closeIcon.png" alt = "delete" />
            </div>

            <div className = "w-full mt-10 text-center">
                <p>آیا از حذف این محصول مطمئنید؟</p>

                <div>
                    <button onClick = { mutate } disabled = {isPending} className = "bg-red-500 hover:bg-red-600 disabled:bg-red-400 disabled:cursor-default transition-all text-white mt-3 p-1.5 px-10 mx-1 rounded-lg cursor-pointer">حذف</button>
                    <button onClick = {onClose} className = "bg-neutral-400/65 hover:bg-neutral-400 transition-all mt-3 p-1.5 px-10 mx-1 rounded-lg cursor-pointer">لغو</button>
                </div>
            </div>
        </>
    );
};

export default DeleteProductModal;