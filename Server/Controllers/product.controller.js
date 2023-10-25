import { Product } from "../models/products.js";
import { deleteImage, uploadImage } from "../utils/cloudinary.js";
import fs from "fs-extra"
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
    const { product_title, product_description, product_brand, product_price, product_stock, image } = req.body;

    if (!product_title) return res.status(404).json({ message: 'product_title is required' });

    const newProduct = new Product({
      product_title,
      product_description,
      product_brand,
      product_price,
      product_stock
    });

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
