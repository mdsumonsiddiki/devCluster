import { Link, NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";


const Sidebar = () => {

    const navLink = <>
        <li>
            <NavLink
                to='/dashboard'
                className={({ isActive }) => `flex items-center duration-300 hover:bg-red hover:text-white gap-4 text-xl py-3 px-6 rounded-md ${isActive ? ' text-white bg-red font-bold' : 'text-black/80 font-medium'}`}
            >
                <FiUsers className="text-4xl" /> Add Student
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => `flex items-center duration-300 hover:bg-red hover:text-white gap-4 text-xl py-3 px-6 rounded-md ${isActive ? ' text-white bg-red font-bold' : 'text-black/80 font-medium'}`}
            >
                <FiUsers className="text-4xl" /> Add Student
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/ac'
                className={({ isActive }) => `flex items-center duration-300 hover:bg-red hover:text-white gap-4 text-xl py-3 px-6 rounded-md ${isActive ? ' text-white bg-red font-bold' : 'text-black/80 font-medium'}`}
            >
                <FiUsers className="text-4xl" /> Add Student
            </NavLink>
        </li>
    </>

    return (
        <div className="pt-2 w-30 md:w-60 lg:w-72 px-4">
            <div className="w-full text-center">
                <Link className="text-red font-bold text-4xl">Dev Cluster</Link>
            </div>

            <ul className="mt-32 space-y-2">
                {
                    navLink
                }
            </ul>
        </div>
    );
};

export default Sidebar;