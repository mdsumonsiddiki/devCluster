import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-IBM">
            <Outlet/>
        </div>
    );
};

export default Root;