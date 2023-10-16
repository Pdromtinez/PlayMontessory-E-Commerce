import { tokenSecret } from "../config.js";
import { User } from "../models/Users.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req,res,next) => {
    try {
        const token = req.headers ["x-access-token"]
        if (!token){
            return res.status(403).json ({message:"invalid token"})
        }
        const decodedToken = jwt.verify (token, tokenSecret);
        console.log(decodedToken)
        req.userId = decodedToken.id;
        const user = await User.findbyId (req.userId, {password:0});
        if (!user){
            return res.status(404).json ({message:"user not found"})
        }
        next();
    } catch (error) {
        return res.status(404).json ({message:error})
    }
}