import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SingIn from "../pages/SingIn";
import Dashboard from "../layouts/Dashboard";


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
                element: <SingIn/>,
            },
        ]
        
    },
    
]);

export default router;