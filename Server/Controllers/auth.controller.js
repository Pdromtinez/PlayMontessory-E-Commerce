import bcrypt from "bcrypt"
import { User } from "../models/Users.js"
import { Roles } from "../models/roles.js";
import { generarToken } from "../utils/jwtUtils.js";

const saltRounds = 10;

const authController = {

  register: async (req, res) => {
    try {
        const { user_name, user_lastname, user_email, user_password, rolesId } = req.body;

        const existingUser = await User.findOne({ where: { user_email } });

        if (existingUser) {
        return res.status(400).send("Email already in use");
        }

        const hashedPassword = await bcrypt.hash(user_password, saltRounds);

        const newUser = new User({
            user_name,
            user_lastname,
            user_email,
            user_password: hashedPassword
        });

        if (!rolesId) {
            let clienteRole = await Roles.findOne({ where: { user_role: "user" } });
            newUser.rolesId = clienteRole.id;
    }

    await newUser.save();

    return res.status(201).json({ message: "User Created" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
},

Login: async (req, res) => {
    try {
        const { user_email, user_password } = req.body;
        const user = await User.findOne({ where: { user_email } });
        if (!user) {
        return res.status(403).send('Invalid Email or Password');
    }
    const match = await bcrypt.compare(user_password, user.user_password);
        
        if (!match) {
        return res.status(401).json({ message: "Invalid Password" });
        }

    const token = generarToken(user.id);
        
    res.cookie('token', token, { httpOnly: true });

    return res.status(200).json(token);
    
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
};

export default authController;