'use client';

import { NotePencilIcon, TrashSimpleIcon } from "@phosphor-icons/react";

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
                        <NotePencilIcon size = {20} weight = "thin"/>
                    </button>
                    
                    <button onClick = {() => openModal('DELETE_PRODUCT' , {id , page , setPage})} className = 'cursor-pointer'>
                        <TrashSimpleIcon weight = "thin" size = {20} className = "text-red-500"/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductsTableRow;