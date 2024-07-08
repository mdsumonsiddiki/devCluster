import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/shared/Sidebar";
import Header from "../pages/dashboard/shared/Header";


const Dashboard = () => {
    return (
        <div className="font-IBM flex gap-7 bg-bgPrimary min-h-screen">
            <div>
                <Sidebar/>
            </div>
            <div className="">
                <Header/>
                <div>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;