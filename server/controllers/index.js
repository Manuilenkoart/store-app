// camera
const postCamera = require("./cameraControllers/postProduct");
const updateCamera = require("./cameraControllers/updateProduct");
const deleteCamera = require("./cameraControllers/deleteProduct");
const getAllCamera = require("./cameraControllers/getAllProduct");
const getCameraById = require("./cameraControllers/getProductById");

// film
const postFilm = require("./filmControllers/postProduct");
const updateFilm = require("./filmControllers/updateProduct");
const deleteFilm = require("./filmControllers/deleteProduct");
const getAllFilm = require("./filmControllers/getAllProduct");
const getFilmById = require("./filmControllers/getProductById");

// auth
const register = require('./authControllers/authRegister')

module.exports = {
  postCamera,
  updateCamera,
  deleteCamera,
  getAllCamera,
  getCameraById,
  postFilm,
  updateFilm,
  deleteFilm,
  getAllFilm,
  getFilmById,
  register
};