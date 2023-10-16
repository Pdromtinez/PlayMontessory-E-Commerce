import {Sequelize} from "sequelize";



const db = new Sequelize('db_montessori', 'root','1@Bordi86', {
    host:'localhost',
    dialect: 'mysql'
})

export default db;