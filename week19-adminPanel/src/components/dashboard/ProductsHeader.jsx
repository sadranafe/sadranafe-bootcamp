const ProductsHeader = () => {
    return (
        <>
            <div className = "flex justify-between items-center">
                <div className = "flex items-center gap-2">
                    <i className = "ph-light ph-sliders-horizontal inline-block rotate-90 p-0.5 border rounded-md text-xl"></i>
                    <p className = "text-2xl">مدیریت کالا</p>
                </div>

                <div>
                    <button className = "bg-sky-500 rounded-lg p-1.5 px-3 text-white cursor-pointer hover:bg-sky-900 transition-all">افزودن محصول</button>
                </div>
            </div>
        </>
    );
};

export default ProductsHeader;