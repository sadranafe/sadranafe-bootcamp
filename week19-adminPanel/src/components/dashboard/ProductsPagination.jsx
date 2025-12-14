const ProductsPagination = () => {
    return (
        <div className = "flex items-center justify-center px-2 gap-2">
            <button className = "flex justify-center items-center cursor-pointer p-2">
                <i className = "ph-light ph-arrow-right text-lg"></i>
            </button>

            <div>
                صفحه <button className = "cursor-pointer border border-gray-400 h-8 px-2 pt-1 rounded-lg text-lg mx-2">1</button> از  <button className = "cursor-pointer text-lg h-8 px-2 pt-1 mr-2 rounded-lg">5</button>
            </div>

            <button className = "flex justify-center items-center cursor-pointer p-2 disabled:text-neutral-400 disabled:cursor-default" disabled>
                <i className = "ph-light ph-arrow-left text-lg"></i>
            </button>
        </div>
    );
};

export default ProductsPagination;