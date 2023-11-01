import { User } from "../models/Users.js";
import { AgeFilter } from "../models/ageFilter.js";
import { Product } from "../models/products.js";
import { deleteImage, uploadImage } from "../utils/cloudinary.js";

import { verificarToken } from "../utils/jwtUtils.js";
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
      message: error.message,
    });
  }
}


// Post
export const createProducts = async (req, res) => {
  try {

    
    const { product_title, product_description, product_brand, product_price, product_stock, ageFilterId, image, userId } = req.body;

    const newProduct = new Product({
      product_title,
      product_description,
      product_brand,
      product_price,
      product_stock,
    });

    if (!userId){
      let token = req.cookies.token || req.headers.authorization;
      
      const decodedToken = verificarToken(token);
      newProduct.userId = decodedToken
      let decodedUser = await User.findByPk(decodedToken)
      console.log(decodedUser)
    }

    if (ageFilterId){
      let rangeId = await AgeFilter.findOne({where:{ age_range: ageFilterId }})
      newProduct.ageFilterId = rangeId.id
    }

    if (image) {
      const result = await uploadImage(`data:image/jpeg;base64,${image}`);
      newProduct.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
    }

    await newProduct.save();

    res.json({ message: "You have created a new product" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Update

export const updateProduct = async(req , res) => {
  
  const{id} = req.params
  try{
    const updated = await Product.update (req.body,{where:{id}});
    if (updated){
        const updatedProduct = await Product.findOne({where:{id}});
    res.json({message: "Update product successfully", product:updatedProduct})
    }else {
        res.status(400).json ({
            message: "product not found"
        })
    }

  } catch (error) {
    res.status(500).json ({
      message: error.message
    });
  }
}

//Delete

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the product has an image before trying to delete it
    if (product.image?.public_id) {
      await deleteImage(product.image.public_id);
    }

    // Delete the product from the database
    await product.destroy();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
