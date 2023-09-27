const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const Schema = mongoose.Schema;

const ProductScheme = new Schema({
  brand: String,
  model: String,
  format: Number,
  type: String,
  url: String,
  price: Number,
}, {versionKey: false});

module.exports = mongoose.model("Product", ProductScheme);