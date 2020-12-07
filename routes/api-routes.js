const express = require("express");
const db = require("../models");
const router = express.Router();

//get all workouts
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
//get all workouts in range
router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// get workout by id
router.get("/workouts/:id?", (req, res) => {
  db.Workout.findById(req.query.id)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
//create a workout
router.post("/workouts", (req, res) => {
  console.log(req.body);
  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// add an exercise
router.put("/workouts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  const addDuration = parseInt(req.body.duration);
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body }, $inc: { totalDuration: addDuration } }
  ).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

//return some JSON
router.get("/", (req, res) => {
  res.json({ app: "workout-tracker", url: req.url, version: "0.0.1" });
});

module.exports = router;
