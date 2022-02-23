// camera
const postCamera = require("./cameraControllers/postProduct");
const updateCamera = require("./cameraControllers/updateProduct");
const deleteCamera = require("./cameraControllers/deleteProduct");
const getAllCamera = require("./cameraControllers/getAllProduct");
const getCameraById = require("./cameraControllers/getProductById");
module.exports = {
  postCamera,
  updateCamera,
  deleteCamera,
  getAllCamera,
  getCameraById,
};