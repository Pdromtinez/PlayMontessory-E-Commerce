
import { User } from "../models/Users.js";
import bcrypt from "bcrypt"
import { Product } from "../models/products.js";
import { Roles } from "../models/roles.js";
import { verificarToken } from "../utils/jwtUtils.js";


export const getUsers = async (req, res) => {
  try {
    let userRole = null; // Inicializar userRole en null

    if (req.headers.authorization){
      const token = req.headers.authorization;

      const decodedToken = verificarToken(token);
      const userId = decodedToken;
      console.log(decodedToken)
      const user = await User.findOne({
        attributes: ["id", "user_name", "user_lastname", "user_email", "user_password",  "rolesId"],
        where: { id: userId },
        include: [{ model: Roles, attributes: ['user_role'], as: "role" }]
      });

      
        userRole = user.role.user_role;
    }
    
    const users = await User.findAll({
      attributes: ["id", "user_name", "user_lastname", "user_email", "user_password", "rolesId"],
    });

    res.json({ users, userRole });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createUser = async (req, res) => {
    const { user_name, user_lastname, user_email, user_password, userId } = req.body;

    const passwordHash = await bcrypt.hash(user_password, 10)
    try {
      let newUser = new User(
        {
          user_name,
          user_lastname,
          user_email,
          user_password: passwordHash,
          userId
        });

      

      const userSaved = await newUser.save();
      return res.json(userSaved);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
  
  
  export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
        where: {
          id,
        },
      });
      if (!user) return res.status(404).json({message: "user does not exist"})
      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export const updateUser = async (req, res) => {
    const { id } = req.params; 
    try {
        const updated = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            res.json({ message: 'User updated successfully', user: updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try { 
    await User.destroy({
      where: {
        id,
      },
    });
    await Product.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  
  }
}