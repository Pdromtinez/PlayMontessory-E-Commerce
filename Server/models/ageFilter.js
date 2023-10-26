import db from "../database/db.js";
import { DataTypes } from "sequelize";
import { Product } from "./products.js";

export const AgeFilter = db.define(
    "age_filter",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        age_range: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps:true,
    },
)

AgeFilter.hasMany(Product, {
    foreignKey: "ageFilterId",
    sourceKey: "id",
})
Product.belongsTo (AgeFilter, { foreignkey: "ageFilterId", targetId: "id" });
