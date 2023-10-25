import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

import Register from "../pages/register/Register";
import Products from "../Components/Cards/Products";
<<<<<<< HEAD
<<<<<<< HEAD
import AddProductForm from "../Components/AddProductsForm/AddProductsForm.jsx";
=======
import AddProductForm from "../Components/AddProductsForm";
=======
import AddProductForm from "../Components/AddProductsForm/AddProductsForm";
>>>>>>> 871fd92d39c6df7a4891d496262d284fad1600ac
import NoAccessPage from "../Components/auth/NoAccess";
>>>>>>> a860543e39a4be84ed164df3c1c83dca3ec50242
import Login from "../pages/register/Login";


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
                element:  <AddProductForm /> 
            }
        ]
    }
])


export default router;