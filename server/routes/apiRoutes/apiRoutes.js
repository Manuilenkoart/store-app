const router = require("express").Router();

const cameraRouter = require("./cameraRouter");
const filmRouter = require("./filmRouter");

router.use("/camera", cameraRouter);
router.use("/film", filmRouter);

module.exports = router;