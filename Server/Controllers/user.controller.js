
import { User } from "../models/Users.js";
import bcrypt from "bcrypt"
import { Product } from "../models/products.js";

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

    const passwordHash = await bcrypt.hash(user_password, 10)
    try {
      let newUser = new User(
        {
          user_name,
          user_lastname,
          user_email,
          user_password: passwordHash,
          user_role
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