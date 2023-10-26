import React, { useState, useEffect } from 'react';
import NoAccessPage from '../Components/auth/NoAccess';
import AddProductForm from '../Components/AddProductsForm/AddProductsForm';
import isUserAdmin from '../Components/auth/userAccess.js';

const YourComponent = () => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const adminStatus = await isUserAdmin();
        setIsAdmin(adminStatus);
      } catch (error) {
        console.error(error);
        setIsAdmin(false);
      }
    };

   

    checkAdminStatus();
  }, []);

  let componentToRender;

  if (isAdmin === null) {
    componentToRender = <div>Cargando...</div>;
  } else if (isAdmin) {
    componentToRender = <AddProductForm />;
  }



  return <AddProductForm/>;
};

export default YourComponent;