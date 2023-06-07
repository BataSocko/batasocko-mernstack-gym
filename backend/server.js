require("dotenv").config();
const express = require("express");
// express app
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// listen for requests
/* app.listen(process.env.PORT, () => {
  console.log("Connected to db and listening on port", process.env.PORT);
}); */

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
/* app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
}); */
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and listening on port", process.env.PORT);
    });
  })

  .catch((error) => {
    console.log(error);
  });
