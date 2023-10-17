
import { Roles } from "../models/roles.js";


// Get

export const getRoles = async(_req, res) => {
  try {
    const roles = await Roles.findAll({
      attributes: ["id", "user_role"],
    });
    res.json(roles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const getRole = async (req, res) => {
  const {id} = req.params
  try {
    const Role = await Roles.findOne({where:{id}});
    if (!Role)
    return res.status(404).json({message: "Range not found"});
    res.json(Role);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}




// Post

export const createRoles = async(req , res) => {
  const {user_role} = req.body  
  try {
    let newRole = await Roles.create({
      user_role
    }) 
    return res.json(newRole);
  } catch (error) {
    res.status(500).json ({
      message: error.message
    });
  }
}

//Update

export const updateRole = async(req , res) => {
  
  const{id} = req.params
  try{
    const {user_role} = req.body
    const Role = await Roles.findByPk(id)
    Role.user_role = user_role
    await Role.save()
    res.json(Role)

  } catch (error) {
    res.status(500).json ({
      message: error.message
    });
  }
}


/*
//Delete

export const deleteRole = async(req , res) => {
const {id} = req.params
try {
    await Product.destroy ({where: {RolesId:id}})
    await Roles.destroy({where:{id}});
  return res.sendStatus(204).json ({
    message: "product deleted",
  });
  
} catch (error) {
  return res.status(500).json({
    message: error.message,
  });
}
}
*/