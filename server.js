const express = require("express");
const compression = require("compression");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes");
const PORT = process.env.PORT || 3000;
const app = express();

//express application settings

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.use(logger("dev"));

app.use(router);

const databaseUrl = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
