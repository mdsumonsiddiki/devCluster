import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SingIn from "../pages/SingIn";
import Dashboard from "../layouts/Dashboard";
import AddStudent from "../pages/dashboard/pages/AddStudent";
import ManageStudents from "../pages/dashboard/pages/ManageStudents";


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
                element: <ManageStudents/>,
            },
            {
                path: 'addstudent',
                element: <AddStudent/>,
            },
        ]
        
    },
    
]);

export default router;