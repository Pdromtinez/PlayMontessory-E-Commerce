import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";

export const generarToken = (userId) => {
    return jwt.sign( userId , tokenSecret);
  };
  
  export const verificarToken = (token) => {
    try {
      return jwt.verify(token, tokenSecret);
    } catch (error) {
      return null;
    }
  };