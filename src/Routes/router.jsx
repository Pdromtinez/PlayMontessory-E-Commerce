import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Register from "../pages/register/Register";

const router = createBrowserRouter ([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path:"/register",
                element: <Register/>
            }
        ]
    }
])

export default router;