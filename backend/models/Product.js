const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    // Card styling
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    titleColor: {
      type: String,
      default: "#000000",
    },
    descriptionColor: {
      type: String,
      default: "#4a5568",
    },
    priceColor: {
      type: String,
      default: "#047857",
    },
    buttonColor: {
      type: String,
      default: "#000000",
    },
    buttonTextColor: {
      type: String,
      default: "#ffffff",
    },
    // Tag settings
    tagVisible: {
      type: Boolean,
      default: false,
    },
    tagText: {
      type: String,
      default: "New",
    },
    tagBgColor: {
      type: String,
      default: "#ef4444",
    },
    tagTextColor: {
      type: String,
      default: "#ffffff",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
