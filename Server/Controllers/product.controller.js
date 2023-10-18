import { Product } from "../models/products.js";


// Get

export const getProducts = async(_req, res) => {
  try {
    const Products = await Product.findAll();
    res.json(Products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const getProduct = async (req, res) => {
  const {id} = req.params
  try {
    const product = await Product.findOne({where:{id}});
    if (!product)
    return res.status(404).json({message: "Product not found"});
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
}


// Post

export const createProducts = async(req , res) => {
  try {
    await Product.create(req.body) 
    res.json({message: "You has create a new product"});
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
}

//Update

export const updateProduct = async(req , res) => {
  
  const{id} = req.params
  try{
    const updated = await Product.update (req.body,{where:{id}});
    res.json({message: "Update product successfully"})
    if (updated){
        const updatedProduct = await Product.findOne({where:{id}});
    res.json({message: "Update product successfully", product:updatedProduct})
    }
  } catch(error) {
    res.status(500).json({
      message: "product not found"
  })
    };
  }


//Delete

export const deleteProduct = async(req , res) => {
const {id} = req.params
try {
  const product = await Product.destroy({where:{id}});
  res.json({message: "Product deleted successfully!"})
  res.json(product);
} catch (error) {
    res.status(404).json({message: "Product not found"});
  };
}

