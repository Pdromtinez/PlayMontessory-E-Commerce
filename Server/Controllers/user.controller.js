
import { User } from "../models/Users.js";

export const getUsers = async(_req, res) => {
    try {
      const Users = await User.findAll({
        atributes: ["id", "user_name", "user_lastname", "user_email", "user_password", "user_role"],
      });
      res.json(Users);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  export const createUser = async (req, res) => {
    const { user_name, user_lastname, user_email, user_password, user_role } = req.body;
    try {
      let newUser = await User.create(
        {
          user_name,
          user_lastname,
          user_email,
          user_password,
          user_role
        },
        {
          fields: ["user_name", "user_lastname", "user_email", "user_password", "user_role"],
        }
      );
      return res.json(newUser);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
    res.json("received");
  }
  
