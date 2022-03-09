const router = require("express").Router();

const cameraRouter = require("./cameraRouter");
const filmRouter = require("./filmRouter");
const authRouter = require('./authRouter');

router.use("/camera", cameraRouter);
router.use("/film", filmRouter);
router.use("/auth", authRouter);

module.exports = router;