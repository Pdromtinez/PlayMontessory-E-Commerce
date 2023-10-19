import { AgeFilter } from "../models/ageFilter.js";
import { Product } from "../models/products.js";


// Get

export const getAges = async(_req, res) => {
  try {
    const Ages = await AgeFilter.findAll({
      attributes: ["id", "age_range"],
    });
    res.json(Ages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const getAge = async (req, res) => {
  const {id} = req.params
  try {
    const Age = await AgeFilter.findOne({where:{id}});
    if (!Age)
    return res.status(404).json({message: "Range not found"});
    res.json(Age);
  } catch (error) {

  }
}


export const getProductsAge = async (req, res) => {
  const {id} = req.params
  try {
    const product = await Product.findAll({where:{AgeFilterId: id}});
    res.json(product);
  } catch (error) {
  
}
}



// Post

export const createAges = async(req , res) => {
  const {age_range} = req.body  
  try {
    let newAge = await AgeFilter.create({
      age_range
    }) 
    res.json({message: "You has create a new age range"});
    return res.json(newAge);
  } catch (error) {
    
  }
}

//Update

export const updateAge = async(req , res) => {
  
  const{id} = req.params
  try{
    const {age_range} = req.body
    const Age = await AgeFilter.findByPk(id)
    Age.age_range = age_range
    await Age.save()
    res.json(Age, {message: "Update product successfully"})

  } catch (error) {
    
  }
}

//Delete

export const deleteAge = async(req , res) => {
const {id} = req.params
try {
    await Product.destroy ({where: {AgeFilterId:id}})
    await AgeFilter.destroy({where:{id}});
    res.json({message: "Product deleted successfully!"})
    
} catch (error) {
  return res.status(500).json({
  });
}
}


