const express = require("express");
// const apiRoute = require("./api-routes");
// const htmlRoute = require("./html-routes");
const path = require("path");

const router = express.Router();

router.get("/",(req,res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise",(req,res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats",(req,res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;