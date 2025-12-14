import React from 'react';

const AddProductModal = ({ onClose }) => {
    return (
        <>
            <h2 className = 'font-semibold text-lg'>ایجاد محصول جدید</h2>
            <div className = 'w-full text-center'>
                <div className = 'text-start my-5'>
                    <label htmlFor = "productName">نام کالا</label>
                    <input type = "text" id = 'productName' name = 'productName' placeholder = 'نام کالا' className = 'w-full bg-white/20 border border-white/80 shadow-[0_5px_10px_rgba(0,0,0,0.07)] rounded-lg mt-1 p-2 px-3'/>
                </div>

                <div className = 'text-start my-5'>
                    <label htmlFor = "quantity">تعداد موجودی</label>
                    <input type = "text" id = 'quantity' name = 'quantity' placeholder = 'تعداد موجودی' className = 'w-full bg-white/20 border border-white/80 shadow-[0_5px_10px_rgba(0,0,0,0.07)] rounded-lg mt-1 p-2 px-3'/>
                </div>
                
                <div className = 'text-start my-5'>
                    <label htmlFor = "productPrice">قیمت</label>
                    <input type = "text" id = 'productPrice' name = 'productPrice' placeholder = 'قیمت' className = 'w-full bg-white/20 border border-white/80 shadow-[0_5px_10px_rgba(0,0,0,0.07)] rounded-lg mt-1 p-2 px-3'/>
                </div>
                
                <div>
                    <button className = 'bg-blue-500 hover:bg-blue-600 transition-all text-white p-1.5 px-10 rounded-lg ml-2 cursor-pointer'>ایجاد</button>
                    <button onClick = {onClose} className = 'bg-neutral-400/65 hover:bg-neutral-400 transition-all p-1.5 px-10 rounded-lg cursor-pointer'>انصراف</button>
                </div>
            </div>
        </>
    );
};

export default AddProductModal;