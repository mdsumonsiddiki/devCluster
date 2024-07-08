import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/shared/Sidebar";


const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;