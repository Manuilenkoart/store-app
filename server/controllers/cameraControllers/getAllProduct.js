const { getAllProductsDb } = require("../../db/mongoCameraActions");
const getAllProduct = async (req, res) => {
  getAllProductsDb().then((data) => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).send("Server error");
    }
  });
};

module.exports = getAllProduct;