const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate())),
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: {
    type: Array,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
