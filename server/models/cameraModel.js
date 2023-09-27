const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CameraScheme = new Schema({
  brand: String,
  model: String,
  format: Number,
  type: String,
  url: String,
  price: Number,
}, {versionKey: false});

module.exports = mongoose.model("Camera", CameraScheme);