import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SingIn from "../pages/SingIn";
import Dashboard from "../layouts/Dashboard";
import AddStudent from "../pages/dashboard/pages/AddStudent";
import ManageSutedents from "../pages/dashboard/pages/ManageSutedents";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <SingIn/>,
            },
        ]
        
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <ManageSutedents/>,
            },
            {
                path: 'addstudent',
                element: <AddStudent/>,
            },
        ]
        
    },
    
]);

export default router;