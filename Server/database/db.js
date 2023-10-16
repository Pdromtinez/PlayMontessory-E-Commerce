import {Sequelize} from "sequelize";



const db = new Sequelize('db_montessori', 'root','Qwerty1987', {
    host:'localhost',
    dialect: 'mysql'
})

export default db;