import { useFormik } from "formik";
import InputModal from "./InputModal";
import modalFormSchema from "../../utils/modalFormSchema";

const ProductModalForm = ({ onClose , BtnOnClick , BtnContent }) => {
    const formik = useFormik({
        initialValues : {
            productName : '',
            inventory : '',
            price : '',
        },
        validationSchema : modalFormSchema,

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
                    <button onClick = {BtnOnClick} className = 'bg-blue-500 hover:bg-blue-600 transition-all text-white p-2 px-10 rounded-lg ml-2 cursor-pointer'>{BtnContent}</button>
                    <button onClick = {onClose} className = 'bg-neutral-400/65 hover:bg-neutral-400 transition-all p-2 px-10 rounded-lg cursor-pointer'>انصراف</button>
                </div>
            </div>
        </>
    );
};

export default ProductModalForm;