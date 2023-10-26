import { useEffect, useState } from "react";
import NoAccessPage from "./NoAccess";
import isUserAdmin from "./userAccess";
import Products from "../Cards/Products";


const ComponenteCondicional = ({ condicion }) => condicion ? <Products /> : <NoAccessPage />;

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