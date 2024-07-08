import { Link, NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import Profile from "../components/Profile";


const Sidebar = () => {

    const navLink = <>
        <li>
            <NavLink
                to='addstudent'
                end
                className={({ isActive }) => `flex items-center duration-300 hover:bg-red hover:text-white gap-4 text-xl py-3 px-6 rounded-md ${isActive ? ' text-white bg-red font-bold shadow-xl'  : 'text-black/80 font-medium'}`}
            >
                <FiUsers className="text-4xl" /> Add Student
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/dashboard'
                end
                className={({ isActive }) => `flex items-center duration-300 hover:bg-red hover:text-white gap-4 text-xl py-3 px-6 rounded-md ${isActive ? ' text-white bg-red font-bold shadow-xl' : 'text-black/80 font-medium'}`}
            >
                <FiUsers className="text-4xl" /> Add Student
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/ac'
                end
                className={({ isActive }) => `flex items-center duration-300 hover:bg-red hover:text-white gap-4 text-xl py-3 px-6 rounded-md ${isActive ? ' text-white bg-red font-bold shadow-xl' : 'text-black/80 font-medium'}`}
            >
                <FiUsers className="text-4xl" /> Add Student
            </NavLink>
        </li>
    </>

    return (
        <div className="pt-2 px-4 h-full">
            <div className="w-full text-center hidden md:block">
                <Link className="text-red font-bold text-4xl">Dev Cluster</Link>
            </div>
            <div className=" md:hidden">
                <Profile/>
            </div>


            <ul className=" mt-10 md:mt-20 lg:mt-36 space-y-2">
                {
                    navLink
                }
            </ul>
        </div>
    );
};

export default Sidebar;