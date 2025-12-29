import DashboardClient from "./DashboardClient";

export const metadata = {
    title : 'Dashboard',
};

const Dashboard = () => {
    return (
        <>
            <div className = "w-9/12 mx-auto my-5">
                <DashboardClient/>
            </div>
        </>
    );
};

export default Dashboard;