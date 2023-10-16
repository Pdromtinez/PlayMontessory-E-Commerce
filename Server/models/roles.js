import db from "../database/db.js";
import { DataTypes } from "sequelize";
import { User } from "./Users.js";

export const Roles = db.define(
    "roles",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_role: {
            type: DataTypes.STRING,
        }    
    },
     {
        timestamps:true,
    },
)

Roles.hasMany(User, {
    foreignKey: "rolesId",
    sourceKey: "id"
})
User.belongsTo(Roles, { foreignKey: "rolesId", targetId: "id"})