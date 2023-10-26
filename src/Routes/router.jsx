import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Register from "../pages/register/Register";
import Products from "../Components/Cards/Products";
import Login from "../pages/register/Login";
import AboutUs from "../pages/AboutUs/AboutUs";
import MiComponente from "../Components/auth/authComponent";


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
                path:"/",
                element: <Products/>
            },
            {
                path: "/add-products",
                element: <MiComponente/>,
            },
            {
                path: "/aboutus",
                element: <AboutUs/>,
            },
            {
                path: "/admin/products",
                element: <MiComponente/>,
            },
        ]
    }
])

export default router;
