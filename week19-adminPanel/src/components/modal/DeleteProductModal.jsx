const DeleteProductModal = ({ onClose }) => {
    return (
        <>
            <div>
                <img src = "./closeIcon.png" alt = "delete" />
            </div>

            <div className = "w-full mt-10 text-center">
                <p>آیا از حذف این محصول مطمئنید؟</p>

                <div>
                    <button className = "bg-red-500 hover:bg-red-600 transition-all text-white mt-3 p-1.5 px-10 mx-1 rounded-lg cursor-pointer">حذف</button>
                    <button onClick = {onClose} className = "bg-neutral-400/65 hover:bg-neutral-400 transition-all mt-3 p-1.5 px-10 mx-1 rounded-lg cursor-pointer">لغو</button>
                </div>
            </div>
        </>
    );
};

export default DeleteProductModal;