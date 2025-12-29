'use client';

const ProductsTableRow = ({ tableRow , page , setPage , openModal }) => {
    const { id , name , price , quantity } = tableRow;
    return (
        <>
            <div className = 'grid grid-cols-[2fr_1fr_1fr_2fr_1fr] text-center px-6 p-4 border-t border-neutral-200 hover:bg-white/50 transition'>
                <div>
                    <p>{name}</p>
                </div>

                <div>
                    <p>{quantity}</p>
                </div>
                
                <div>
                    <p>{price}تومان </p>
                </div>
                
                <div>
                    <p>{id}</p>
                </div>
                
                <div>
                    <button onClick = {() => openModal('EDIT_PRODUCT' , { product : tableRow , page })} className = 'cursor-pointer ml-4'>
                        <i className = "ph-light ph-note-pencil text-xl"></i>
                    </button>
                    
                    <button onClick = {() => openModal('DELETE_PRODUCT' , {id , page , setPage})} className = 'cursor-pointer'>
                        <i className = "ph-light ph-trash-simple text-xl text-red-500"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductsTableRow;