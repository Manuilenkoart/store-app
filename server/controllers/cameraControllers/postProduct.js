const { createProduct } = require("../../db/mongoCameraActions");
const postProduct = async (req, res) => {
  await createProduct(req.body.data).then((data) => {
    if (data) {
      res.status(201).json(data);
    } else {
      res.status(500).send("Server error");
    }
  });
};
module.exports = postProduct;