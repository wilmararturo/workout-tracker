const express = require("express");
const apiRoute = require("./api-routes");
const htmlRoute = require("./html-routes");

const router = express.Router();

router.use("/api", apiRoute);

router.use("/", htmlRoute);

module.exports = router;
