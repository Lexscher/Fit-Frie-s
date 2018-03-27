# Project-2-Fit-Frie-s-App

WDI Second Project

##

Frit-Frie's
Also known as: Fitness Friends!

###

This fitness app will allow you to make an account, add friends, post workouts, find gyms and see how crowded the gym is, real time!

<img src="/client/images/unnamed.jpg" style="width:450px;height:550px;">
<img src="/client/images/unnamed-1.jpg" style="width:450px;height:550px;">
<img src="/client/images/unnamed-2.jpg" style="width:450px;height:550px;">
<img src="/client/images/unnamed-3.jpg" style="width:450px;height:550px;">

##

MODULES & API's

I'm using pg-promise to connect to my database, fit_fries. and I have a schema and seed file for my basic information. fit_fries has three tables, fritters (the users of the app), workouts (what users can post), and favorite_workouts (so users can like eachothers workshops).

Here's a link to the API's I
https://www.programmableweb.com/api/gymflow

## code snippets of what I am proud of

```
app.get("/fritters", (request, response) => {
  Fritters.findAll().then(data => {
    response.render("index", { data });
  });
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
```

I was really happy that I was able to map out my routes.
I was also able to design my own icon for the corner of the page and the default user profile picture:
<img src="/client/images/favicon.ico">
<img src="/client/images/FritFriesPic.jpg">

---

### Things I'd like to fix:

my route handlers in my ejs views. There's something funky going on there. Once I've deleted or edited a few workouts, the action that once was no longer works

### Additions I'd like to make:

Have a user actually be able to add friends as well as favorite their workouts.
Include the gym API where the user can see how crowed that gym is, realtime.

# WOULD YOU LIKE TO RUN THIS ON YOUR LOCAL HOST?

## Then Step Right Up!

1.  Fork this repository
2.  clone
3.  Open terminal
4.  Find an empty repository you'd like to have this file and use

```
git clone [YOUR LINK HERE]
```

5.  cd into the root file of this repo

```
cd Project-2-Fit-Frie-s-App/
```

6.  run

```
node server.js
```

6.  Open a new page in your browser
7.  Type in the URL:
    http://localhost:3000/fritters/
8.  Have fun!
