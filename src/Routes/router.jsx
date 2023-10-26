import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Register from "../pages/register/Register";
import Products from "../Components/Cards/Products";
import AddProductForm from "../Components/AddProductsForm/AddProductsForm";
import Login from "../pages/register/Login";
import AboutUs from "../pages/AboutUs/AboutUs";
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
                element: <AddProductForm/>,
            },
            {
                path: "/aboutus",
                element: <AboutUs/>,
            },
        ]
    }
])

export default router;
