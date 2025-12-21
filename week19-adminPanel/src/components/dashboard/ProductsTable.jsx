import ProductsTableRow from './ProductsTableRow';
import Loader from '../Loader';
import EmptyState from '../EmptyState';

const ProductsTable = ({ productsData , productIsPending , openModal , page , setPage }) => {
   
    return (
        <div className = 'w-full min-h-[415px] overflow-hidden rounded-xl mt-5 border border-white bg-white/25 shadow-[0_3px_10px_rgba(0,0,0,0.05)]'>
            <div className = 'grid grid-cols-[2fr_1fr_1fr_2fr_1fr] bg-gray-200/30 text-center px-6 p-4 font-medium text-gray-600'>
                <div>نام کالا</div>
                <div>موجودی</div>
                <div>قیمت</div>
                <div>شناسه کالا</div>
                <div>عملیات</div>
            </div>

            {
                productsData === undefined || !productsData || productsData.data.length === 0 ? 
                <EmptyState/> :
                productIsPending ?
                <Loader/> :
                productsData?.data.map((tableRow , index) => {
                    return(
                        <ProductsTableRow key = {index} tableRow = {tableRow} page = {page} setPage = {setPage} openModal = {openModal}/>
                    )
                })
            }
        </div>
    );
};

export default ProductsTable;