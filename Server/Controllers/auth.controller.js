import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../models/Users.js"
import { tokenSecret } from "../config.js";


const saltRounds = 10;



const  authController = {

//user Register

    register: async (req, res) => {
    try{
        const {user_name, user_lastname,  user_email, user_password, user_role} = req.body;

        const existingUser = await User.findOne({where : {user_email}})
        if(existingUser){
            return res.status(400).send("Email already in use")
    }

    const hashedPassword = await bcrypt.hash(user_password, saltRounds)

    const newUser = await User.create({
        
            user_name,
            user_lastname,
            user_email,
            user_password: hashedPassword,
            user_role
        
    })
    if(newUser){
        return res.status(201).json({message: "User Created"})
    }
}catch(error){
    return res.status(500).json({message: message.error})
}},

//User Login
    Login: async (req,res) => {
        try{
            const {user_email, user_password} = req.body;
            const user = await User.findOne({where: {user_email}});
            if(!user){
                return res.status(403).send('Invalid Email or Password')
            }
            const match = await bcrypt.compare(user_password, user.user_password);
            if(!match){
                return res.status(401).json({message: "Invalid Password"})
            }

            const token = jwt.sign({userId: user.id}, tokenSecret);

            return res.status(200).json(token)}
        catch(error){
        return res.status(500).json({message: message.error})
        }

}
};

export default authController;