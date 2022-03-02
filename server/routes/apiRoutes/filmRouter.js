const router = require("express").Router();

const {
  postFilm,
  updateFilm,
  deleteFilm,
  getAllFilm,
  getFilmById,
} = require("../../controllers/index");
const roleMiddleware = require('../../middlewares/rolesMiddleware');
const Roles = require('../../access/roles');

router.get("/:id", getFilmById);

router.get("/", getAllFilm);

router.delete("/", deleteFilm);
router.put("/", roleMiddleware([Roles.admin]), updateFilm);
router.post("/", roleMiddleware([Roles.admin]), postFilm);

module.exports = router;