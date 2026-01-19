const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      image,
      backgroundColor,
      titleColor,
      descriptionColor,
      priceColor,
      buttonColor,
      buttonTextColor,
      tagVisible,
      tagText,
      tagBgColor,
      tagTextColor,
    } = req.body;

    // Basic validation
    if (!title || !price || !description || !image) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    const newProduct = new Product({
      title,
      price,
      description,
      image,
      backgroundColor,
      titleColor,
      descriptionColor,
      priceColor,
      buttonColor,
      buttonTextColor,
      tagVisible,
      tagText,
      tagBgColor,
      tagTextColor,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
