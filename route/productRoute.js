const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const {
  getProducts,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts);

router.get("/:id", getProductId);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product

router.delete("/:id", deleteProduct);

module.exports = router;
