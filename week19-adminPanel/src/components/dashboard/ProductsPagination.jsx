const ProductsPagination = ({ page , setPage , totalPages }) => {
    return (
        <div className = "flex items-center justify-center px-2 gap-2">
            <button onClick = {() => setPage(prev => prev - 1)} className = "flex justify-center items-center cursor-pointer p-2 disabled:text-neutral-400 disabled:cursor-default" disabled = {page === 1}>
                <i className = "ph-light ph-arrow-right text-lg"></i>
            </button>

            <div className = "flex justify-center items-center gap-1.5">
                صفحه <p className = "border border-gray-400 h-8 px-2 pt-1 rounded-lg text-lg">{!page ? 1 : page}</p> از  <button onClick = {() => setPage(totalPages)} className = "cursor-pointer text-lg h-8 px-2 pt-1 rounded-lg">{!totalPages ? 1 : totalPages}</button>
            </div>

            <button onClick = {() => setPage(prev => prev + 1)} className = "flex justify-center items-center cursor-pointer p-2 disabled:text-neutral-400 disabled:cursor-default" disabled = {page === totalPages}>
                <i className = "ph-light ph-arrow-left text-lg"></i>
            </button>
        </div>
    );
};

export default ProductsPagination;