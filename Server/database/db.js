import {Sequelize} from "sequelize";



const db = new Sequelize('db_montessori', 'root','', {
    host:'localhost',
    dialect: 'mysql'
})

export default db;