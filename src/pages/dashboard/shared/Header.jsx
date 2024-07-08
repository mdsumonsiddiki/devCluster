import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import PropTypes from 'prop-types';
import Profile from "../components/Profile";
import { Link } from "react-router-dom";

const Header = ({ handleNav, isOpen }) => {
    return (
        <div className="mt-6 flex items-center justify-between md:justify-end px-4 lg:mr-20">
            <div className="hidden md:block">
                <Profile />
            </div>
            <div className=" md:hidden">
                <Link className="text-red font-bold text-3xl">Dev Cluster</Link>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
        </div>
    );
};
Header.propTypes = {
    handleNav: PropTypes.func,
    isOpen: PropTypes.bool,
}
export default Header;