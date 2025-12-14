import Navbar from "../components/dashboard/navbar";
import Layout from "../components/dashboard/Layout";

const Dashboard = () => {
    return (
        <>
            <div className = "w-9/12 mx-auto my-5">
                <Navbar/>

                <Layout/>
            </div>
        </>
    );
};

export default Dashboard;