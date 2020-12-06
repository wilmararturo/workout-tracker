const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: {
    type: Array,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
