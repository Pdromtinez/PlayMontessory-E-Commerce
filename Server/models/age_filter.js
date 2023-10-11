import db from "../database/db.js";
import { DataTypes } from "sequelize";
import { Products } from "./products.js";

export const AgeFilter = db.define(
    "age_filter",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        age_range: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps:true,
    },
)

AgeFilter.hasMany(Products, {
    foreignKey: "ageFilterId",
    sourceKey: "id",
})
Products.belongsTo (AgeFilter, { foreignkey: "ageFilterId", targetId: "id" });