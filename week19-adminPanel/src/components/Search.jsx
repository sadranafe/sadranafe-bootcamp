import { useEffect, useState } from "react";
import ProductsTableRow from "./dashboard/ProductsTableRow";
import EmptyState from "./EmptyState";

const Search = ({ products , page , setPage , openModal }) => {
    const [search , setSearch] = useState('');
    const [debouncedSearch , setDebouncedSearch] = useState(search);

    const filteredProducts = products?.data.filter(product => 
        product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )


    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        } , 500)

        return () => clearTimeout(timer)
    },[search])

    const searchHandler = ev => {
        setSearch(ev.target.value)
    }

    return (
        <>
            <div className = 'relative w-10/12 flex items-center border-l border-neutral-200'>
                <i className = "ph-light ph-magnifying-glass text-2xl"></i>
                <input type = "text" value = {search} onChange = {ev => searchHandler(ev)} className = 'w-full p-2 caret-blue-500 text-blue-600 placeholder:text-neutral-400 selection:bg-black selection:text-white' placeholder = 'جستجو کالا'/>

                    {
                        debouncedSearch &&
                        <div className = "border border-white/80 bg-neutral-50 backdrop-blur-xl w-full min-h-[77px] max-h-[300px] shadow-[0_5px_10px_rgba(0,0,0,0.05)] overflow-scroll absolute top-12 z-30 rounded-lg">
                            {
                                filteredProducts?.length === 0 ? 
                                <EmptyState/> :
                                filteredProducts?.map((product , index) => {
                                    return(
                                        <ProductsTableRow key = {index} tableRow = {product} page = {page} setPage = {setPage} openModal = {openModal}/>
                                    )
                                })
                            }
                        </div>
                    }
            </div> 
        </>
    );
};

export default Search;