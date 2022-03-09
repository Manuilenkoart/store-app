const router = require("express").Router();

const {
  postFilm,
  updateFilm,
  deleteFilm,
  getAllFilm,
  getFilmById,
} = require("../../controllers/index");

router.get("/:id", getFilmById);

router.get("/", getAllFilm);

router.delete("/", deleteFilm);
router.put("/", updateFilm);
router.post("/", postFilm);

module.exports = router;