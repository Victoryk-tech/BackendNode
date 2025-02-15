const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//get all products
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    //res.status(500).json({ message: error.message });
  }
});

//get single by id

const getProductId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ message: error.message });
  }
});

//post product

const createProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500);
    throw new Error(error.message);
    //res.status(500).json({ message: error.message });
  }
});

//update product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // we cannot find any product in database
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ message: error.message });
  }
});
//delete product

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    //res.status(500).json({ message: error.message });
  }
});
module.exports = {
  getProducts,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
