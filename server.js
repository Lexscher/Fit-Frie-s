// Main Server: Get youre dependencies
// require express!
const express = require("express");
// require your controllers
const userController = require("./controllers/userController");
const workoutController = require("./controllers/workoutController");
// call the express function.
const app = express();
// set the port you're going to listen to.
const PORT = 3000;
// require the body parser!
const bodyParser = require("body-parser");
// get your models in here, man!
const Users = require("./models/Users");
// const Workouts = require("./models/Workouts")
// const Gyms = require("./models/Gyms")

// Make sure you are able to override default get and post functions:
const methodOverride = require("method-override");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

// Set the view engine so that you can use/read ejs in the views.
app.set("view engine", "ejs");

// method Override will come in handy with your views.
app.use(methodOverride("_method"));
// get those assets so that you can use your static files.
app.use("/assets", express.static("assets"));

// fire controllers
userController();
workoutController();

app.listen(PORT, () => {
  console.log(`Linda is finally Listening, on PORT ${PORT}!`);
});
