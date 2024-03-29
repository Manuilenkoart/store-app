const { createProduct } = require("../../db/mongoFilmActions");

const postProduct = async (req, res) => {
  await createProduct(req.body).then((data) => {
    if (data) {
      res.status(201).json(data);
    } else {
      res.status(500).send("Server error");
    }
  });
};
module.exports = postProduct;