import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config()
const { DB_DATABASE, DB_DATABASE_TEST, NODE_ENV } = process.env;
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT
}= process.env
const db = new Sequelize(NODE_ENV === "test" ? DB_DATABASE_TEST : DB_DATABASE, DB_USER,DB_PASSWORD, {
    host:DB_HOST,
    dialect: DB_DIALECT,
})

export default db;
