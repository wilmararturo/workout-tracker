const express = require("express");
const compression = require("compression");
// const logger = require("morgan");
const mongojs = require("mongojs");
const router = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

//express application settings

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.use(router);

const databaseUrl = process.env.MONGODB_URI || "mongodb://localhost/workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", (error) => {
  console.log("Database Error:", error);
});

app.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
