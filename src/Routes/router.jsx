import { createBrowserRouter } from "react-router-dom";
import Root from "./root";


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