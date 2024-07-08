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
            <div className={`${isOpen ? 'block' : 'hidden'
                } md:block bg-white md:bg-bgPrimary w-64 md:w-3/12 space-y-6 z-50  absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0 duration-300' : '-translate-x-full duration-300'
                } md:relative md:translate-x-0 transition duration-300 ease-in-out`}>
                <Sidebar />
            </div>
            <div className="w-full md:w-9/12">
                <Header handleNav={handleNav} isOpen={isOpen} />
                <div className="mt-12">
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;