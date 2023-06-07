const express = require("express");
const router = express.Router();

// const Workout = require("../models/workoutModel");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
/* router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});
 */
router.get("/", getWorkouts);

// GET a single workout
/* router.get("/:id", (req, res) => {
  res.json({ msg: "GET a singe workout" });
}); */
router.get("/:id", getWorkout);

// POST a new workout
/* router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); */
router.post("/", createWorkout);

// DELETE a workout
/* router.delete("/:id", (req, res) => {
  res.json({ msg: "POST a workout" });
}); */
router.delete("/:id", deleteWorkout);

// UPDATE a workout
/* router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
}); */
router.patch("/:id", updateWorkout);

module.exports = router;
