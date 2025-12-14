import ProductsTableRow from './ProductsTableRow';

const ProductsTable = () => {
    const productsArr = Array.from({ length : 6 });
    return (
        <div className = 'w-full overflow-hidden rounded-xl mt-5 border border-white bg-white/25 shadow-[0_3px_10px_rgba(0,0,0,0.05)] backdrop-blur-xl'>
            <div className = 'grid grid-cols-[2fr_1fr_1fr_2fr_1fr] bg-gray-200/30 text-center px-6 p-4 font-medium text-gray-600'>
                <div className = 'bg-b lue-200'>نام کالا</div>
                <div className = 'bg-t eal-400'>موجودی</div>
                <div className = 'bg-y ellow-200'>قیمت</div>
                <div className = 'bg-i ndigo-400'>شناسه کالا</div>
                <div className = 'bg-b lue-200'>عملیات</div>
            </div>

            {
                productsArr.map((tableRow , index) => {
                    return(
                        <ProductsTableRow key = {index}/>
                    )
                })
            }
        </div>
    );
};

export default ProductsTable;