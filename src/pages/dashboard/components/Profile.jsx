import { FiUser } from "react-icons/fi";


const Profile = () => {
    return (
        <div className="flex items-center text-xl gap-4 px-2 py-3 lg:px-12 rounded-md border-2 border-black/5">
        <FiUser className="text-4xl" />
        <h4>username</h4>
    </div>
    );
};

export default Profile;