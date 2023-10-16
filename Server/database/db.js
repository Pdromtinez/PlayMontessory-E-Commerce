import {Sequelize} from "sequelize";



const db = new Sequelize('db_montessori', 'root','Emily£2023', {
    host:'localhost',
    dialect: 'mysql'
})

export default db;