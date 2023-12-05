const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 300,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
