import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";

const Layout = () => {
    return (
        <div className = "my-7">
            <ProductsHeader/>
            <ProductsTable/>
        </div>
    );
};

export default Layout;