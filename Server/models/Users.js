import db from "../database/db.js";
import { DataTypes } from "sequelize";
import { Product } from "./products.js";

export const User = db.define(
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

User.hasMany(Product, {
    foreignKey: "userId",
    sourceKey: "id",
})
Product.belongsTo (User, { foreignkey: "userId", targetId: "id" });