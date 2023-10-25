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
    res.status(500).json({
      message: error.message,
    });
  }
}


export const getProductsAge = async (req, res) => {
  const {id} = req.params
  try {
    const product = await Product.findAll({where:{ageFilterId: id}});
    res.json(product);
  } catch (error) {
    {
      res.status(500).json({
        message: error.message,
      });
  }
}
}



// Post

export const createAges = async(req , res) => {
  const {age_range} = req.body  
  try {
    let newAge = await AgeFilter.create({
      age_range
    }) 
    return res.json(newAge);
  } catch (error) {
    res.status(500).json ({
      message: error.message
    });
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
    res.json(Age)

  } catch (error) {
    res.status(500).json ({
      message: error.message
    });
  }
}

//Delete

export const deleteAge = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({ where: { ageFilterId: id } });
    await AgeFilter.destroy({ where: { id } });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}



