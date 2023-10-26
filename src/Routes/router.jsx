import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Register from "../pages/register/Register";
import Products from "../Components/Cards/Products";

import Login from "../pages/register/Login";

import Dios from "../Components/auth/suPutaMadre";

const router = createBrowserRouter ([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path:"/register",
                element: <Register/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/products",
                element: <Products/>
            },
            {
                path: "/add-products",
                element: Dios
              },
        ]
    }
])//Pedrom23@gmail.com
    //hola234

export default router;
