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
const Fritters = require("./models/Users");
const Workouts = require("./models/Workouts");
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
app.use("/client", express.static("client"));
// get bycrypt in here
const bcrypt = require("bcrypt");
// salt key
const salt = "$2a$10$1fFhZQ4.4k0135ZaigTDSO";

// show the home page! The user should be able to decide if they want to log in or make a new account.
app.get("/home", (request, response) => {
  response.render("home");
});
// the user will go to this route to sign up.
app.get("/home/signup", (request, response) => {
  response.render("signup");
});
// the user will go to this route to log in.
app.get("/home/login", (request, response) => {
  response.render("login");
});

// const data = request.body;
// const passwordEnteredByUser = data.password;
// const passwordToSend = bcrypt(passwordEnteredByUser, salt);
// User.create(data);

// *** NOTE: you may see "fritter(s)" a lot in my code, Fritter means user. ***

// this page should have all the members of the app!
app.get("/fritters", (request, response) => {
  Fritters.findAll().then(data => {
    response.render("index", { data });
  });
});

app.get("/gyms", (request, response) => {
  response.render("gymdex");
});
// This page should show you the specific user.
app.get("/fritters/:id", (request, response) => {
  const id = Number(request.params.id);
  Fritters.findById(id).then(fritterData => {
    response.render("profile", { fritterData });
  });
});

app.get("/fritters/:id/workouts", (request, response) => {
  Workouts.findAll().then(data => {
    response.render("workouts", { data });
  });
});

app.get("/fritters/:id/workouts/:id", (request, response) => {
  const id = Number(request.params.id);
  Workouts.findOne(id).then(data => {
    response.render("workout", { data });
  });
});

app.get(
  "/fritters/:id/workouts/:id/edit",
  urlencodedParser,
  (request, response) => {
    const data = request.body;
    const id = Number(request.params.id);
    Workouts.findOne(id).then(task => {
      response.render("edit", { task });
    });
  }
);
app.put("/fritters/:id/workouts/:id", urlencodedParser, (request, response) => {
  const data = request.body;
  const id = Number(request.params.id);
  Workouts.edit(data, id).then(task => {
    response.redirect(`/fritters/:id/workouts/${task.id}`);
  });
});

app.delete(
  "/fritters/:id/workouts/:id",
  urlencodedParser,
  (request, response) => {
    const id = Number(request.params.id);
    const data = request.body;
    Workouts.delete(id).then(deleteTask => {
      response.render("edit", { deleteTask });
    });
    response.redirect(`/fritters/:id/workouts`);
  }
);
// app.post("/fritters");

//
// app.get("/fritter/:id", (request, response) => {
//
// })
//
// app.get("/fritter/:id/edit", (request, response) => {
//
// })
//
// app.get("", (request, response) => {
//
// })
//
// app.get("", (request, response) => {
//
// })

app.listen(PORT, () => {
  console.log(`Linda is finally Listening, on PORT ${PORT}!`);
});
