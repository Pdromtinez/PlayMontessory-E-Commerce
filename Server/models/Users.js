import db from "../database/db.js";
import { DataType, DataTypes } from "sequelize";

export const Users = db.define(
    "users",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primarykey: true,
        },
        user_name: {
            type: DataTypes.STRING,
        },
        user_lastname:{
            type: DataTypes.STRING,
        },
        user_email:{
            type:DataTypes.STRING,
        },
        user_password:{
            type:DataTypes.STRING,
        },
        user_role:{
            type:DataTypes.STRING,
        },
    },
    {
        timestamps:true,
    },
)