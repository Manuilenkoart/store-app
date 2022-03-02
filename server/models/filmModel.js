const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FilmScheme = new Schema({
  brand: String,
  model: String,
  format: Number,
  iso: Number,
  frames: Number,
  url: String,
  price: Number,
}, {versionKey: false});

module.exports = mongoose.model("Film", FilmScheme);