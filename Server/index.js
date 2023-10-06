import {app} from "./app.js";
import db from "./database/db.js";

async function main() {
    await db.sync();
    app.listen(6000);
    console.log('🚀server up in http://localhost:6000/')
}

try{
	await db.authenticate()
		console.log('conected to database')
	}catch{
		console.log(`error:' ${error}`)
	}

main()