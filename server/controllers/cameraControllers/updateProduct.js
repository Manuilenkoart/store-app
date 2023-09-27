const { updateProductDb } = require("../../db/mongoCameraActions");


const updateProduct = async (req, res) => {
  const {data} = req.body
  await updateProductDb(data._id, data).then((updatedProduct) => {
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(500).send("Server error");
    }
  });
};

module.exports = updateProduct;