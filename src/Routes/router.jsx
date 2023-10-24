import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

import Register from "../pages/register/Register";
import Products from "../Components/Cards/Products";
import AddProductForm from "../Components/AddProductsForm";




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
                path:"/products",
                element: <Products/>
            },
            {
                path:"/add-products",
                element: <AddProductForm/>
            }
        ]
    }
])

export default router;