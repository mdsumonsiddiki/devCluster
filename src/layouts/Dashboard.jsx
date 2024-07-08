import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/shared/Sidebar";
import Header from "../pages/dashboard/shared/Header";
import { useState } from "react";


const Dashboard = () => {
    const [isOpen, setOpen] = useState(true);

    const handleNav = () => {
        setOpen(!isOpen);
    };
    return (
        <div className="font-IBM flex bg-bgPrimary min-h-screen">
            <div className="w-3/12">
                <Sidebar />
            </div>
            <div className="w-9/12">
                <Header handleNav={handleNav} isOpen={isOpen} />
                <div className="mt-12">
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;