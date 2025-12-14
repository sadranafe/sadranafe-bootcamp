import Navbar from "../components/dashboard/navbar";
import Layout from "../components/dashboard/Layout";
import ProductsPagination from "../components/dashboard/ProductsPagination";

const Dashboard = () => {
    return (
        <>
            <div className = "w-9/12 mx-auto my-5 bg-red-50">
                <Navbar/>

                <Layout/>
                <ProductsPagination />
            </div>
        </>
    );
};

export default Dashboard;