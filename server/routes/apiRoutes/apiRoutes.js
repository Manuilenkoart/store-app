const router = require("express").Router();

const cameraRouter = require("./cameraRouter");

router.use("/camera", cameraRouter);

module.exports = router;