
import { User } from "../models/Users.js";
import { Roles } from "../models/roles.js";
import { verificarToken } from "../utils/jwtUtils.js";

export const verifyToken = async (req,res,next) => {
    try {
        let token = req.cookies.token || req.headers.authorization;

        if (!token){
            return res.status(403).json ({message:"invalid token"})
        }
        const decodedToken = verificarToken(token)
        console.log(decodedToken)

        req.userId = decodedToken;

        const user = await User.findByPk (req.userId);
        if (!user){
            return res.status(404).json ({message:"user not found"})
        }
        next();
    } catch (error) {
        return res.status(404).json ({message:error})
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        let token = req.cookies.token || req.headers.authorization;

        const decodedToken = verificarToken(token);

        console.log(decodedToken);

        req.userId = decodedToken;

        const user = await User.findByPk(req.userId);

        const roles = await Roles.findByPk(user.rolesId);
        

        if ( user.id === req.userId && roles.user_role === "admin") {
            next();
        } else {
            res.status(403).json({ error: 'Acceso denegado' });
        }
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};