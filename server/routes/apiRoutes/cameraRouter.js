const router = require("express").Router();

const {
  postCamera,
  updateCamera,
  deleteCamera,
  getAllCamera,
  getCameraById,
} = require("../../controllers/index");
const roleMiddleware = require('../../middlewares/rolesMiddleware');
const Roles = require('../../access/roles');

router.get("/:id", getCameraById);

router.get("/", getAllCamera);

router.delete("/", deleteCamera);
router.put("/", roleMiddleware([Roles.admin]), updateCamera);
router.post("/", roleMiddleware([Roles.admin]), postCamera);

module.exports = router;