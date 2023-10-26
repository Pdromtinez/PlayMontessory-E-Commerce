import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const Product = db.define(
    "products",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        image: {
            type: DataTypes.JSON,
        },
        product_title:{
            type: DataTypes.STRING,
        },
        product_description:{
            type:DataTypes.TEXT,
        },
        product_brand:{
            type:DataTypes.STRING,
        },
        product_price:{
            type:DataTypes.INTEGER,
        },
        product_stock:{
            type:DataTypes.INTEGER,
        },
        
    },
    {
        timestamps:true,
    },
)

