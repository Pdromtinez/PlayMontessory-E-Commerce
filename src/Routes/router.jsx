import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Register from "../pages/register/Register";
import Products from "../Components/Cards/Products";
import AddProductForm from "../Components/AddProductsForm/AddProductsForm";
import Login from "../pages/register/Login";
import isUserAdmin  from "../Components/auth/userAccess.js";
import NoAccessPage from "../Components/auth/NoAccess";
import MiComponente from "../Components/auth/newComponent";

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
                element: <MiComponente/>
            },
            {
                path: "/add-products",
                element:  <AddProductForm/>,
              },
        ]
    }
])//Pedrom23@gmail.com
    //hola234

export default router;
