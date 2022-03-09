const { updateProductDb } = require("../../db/mongoFilmActions");

const updateProduct = async (req, res) => {
  await updateProductDb(req.body._id, req.body).then((updatedProduct) => {
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(500).send("Server error");
    }
  });
};

module.exports = updateProduct;