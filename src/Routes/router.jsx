import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

import Register from "../pages/register/Register";
import Products from "../Components/Cards/Products";
<<<<<<< HEAD
import AddProductForm from "../Components/AddProductsForm/AddProductsForm.jsx";
=======
import AddProductForm from "../Components/AddProductsForm";
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
                element: isUserAdmin() ? <AddProductForm /> : <NoAccessPage />,
              },
        ]
    }
])

function isUserAdmin() {
  const token = localStorage.getItem("authToken"); // Obtén el token de almacenamiento local
  if (token) {
    const decodedToken = decodeToken(token); // Decodifica el token (puedes usar una librería para esto)
    return decodedToken.role === "isAdmin"; // Verifica el rol en el token
  }
  return false;
}

function decodeToken(token) {
  // Puedes usar una librería como jsonwebtoken para decodificar el token
 return jwt.decode(token);
  // Asegúrate de manejar errores si el token es inválido o expiró.
}

export default router;