import {app} from "./app.js";
import db from "./database/db.js";
import "./models/roles.js"

async function main() {
    await db.sync({/*force:true+*/})
    app.listen(6700);
    console.log('🚀server up in http://localhost:6700/')
}

try{
	await db.authenticate()
		console.log('conected to database')
	}catch(error){
        console.log('error: ${error}')
	}

main();

//ESTRUCTURA DE USUARIOS Y PRODUCTOS
/*{
  "user_name": "",
  "user_lastname": "",
  "user_email": "",
  "user_password": "",
  "rolesId": ""
} 

{
  "product_image": "",
  "product_title": "",
  "product_description": "",
  "product_brand": "",
  "product_price": "",
  "product_stock": ""
}

*/