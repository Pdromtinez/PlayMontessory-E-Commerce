import db from "../database/db.js";
import { DataTypes } from "sequelize";
import { Products } from "./products.js";

export const Users = db.define(
    "users",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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

Users.hasMany(Products, {
    foreignKey: "userId",
    sourceKey: "id",
})
Products.belongsTo (Users, { foreignkey: "userId", targetId: "id" });