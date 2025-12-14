import React from 'react';

const ProductsTableRow = () => {
    return (
        <>
            <div className = 'grid grid-cols-[2fr_1fr_1fr_2fr_1fr] text-center px-6 p-4 border-t border-neutral-200 hover:bg-white/50 transition'>
                <div>
                    <p>تیشرت طرح انگولار</p>
                </div>

                <div>
                    <p>293</p>
                </div>
                
                <div>
                    <p>90 هزار تومان</p>
                </div>
                
                <div>
                    <p>90uf9g9h7895467g974</p>
                </div>
                
                <div>
                    <button className = 'cursor-pointer bg-r ed-100 ml-4'>
                        <i className = "ph-light ph-note-pencil text-xl"></i>
                    </button>
                    
                    <button className = 'cursor-pointer bg-bl ue-100'>
                        <i className = "ph-light ph-trash-simple text-xl text-red-500"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductsTableRow;