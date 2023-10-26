import { useEffect, useState } from "react";
import NoAccessPage from "./NoAccess";
import isUserAdmin from "./userAccess";
import DashboardAdmin from "../../pages/AdminProductManagement/DashboardAdmin";
import AddProductForm from "../AddProductsForm/AddProductsForm";

const ComponenteCondicional = ({ condicion }) => condicion ? (<><DashboardAdmin/><AddProductForm/></>) : <NoAccessPage />;

function MiComponente() {
    const [condicion, setCondicion] = useState(false);



    useEffect(() => {
    isUserAdmin().then(result => setCondicion(result));
;
}, []);

  return (
    <div>
        <ComponenteCondicional condicion={condicion} />
    </div>
);
}

export default MiComponente;