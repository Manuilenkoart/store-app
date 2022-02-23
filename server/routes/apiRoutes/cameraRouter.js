const router = require("express").Router();

const {
  postCamera,
  updateCamera,
  deleteCamera,
  getAllCamera,
  getCameraById,
} = require("../../controllers/index");

router.get("/:id", getCameraById);

router.get("/", getAllCamera);

router.delete("/", deleteCamera);
router.put("/", updateCamera);
router.post("/", postCamera);

module.exports = router;