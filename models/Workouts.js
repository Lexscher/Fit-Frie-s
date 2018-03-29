// Require the index.js file so you can connect to the database, here.
const db = require("../db/index").db;
// Put all the methods you want to use in an object!
const Workouts = {};
// Now you can make your GET, POST, PUSH, DELETE functions.

// Find all the workouts!
Workouts.findAll = () => db.any("SELECT * FROM workouts ORDER BY id");

// Look at a workout
Workouts.findOne = id => db.one("SELECT * FROM workouts WHERE id = $1", [id]);

// Create your workout
Workouts.create = data =>
  db.one(
    "INSERT INTO workouts (title, content) VALUES ($1, $2) RETURNNING id",
    [data.title, data.content]
  );

// edit your workout
Workouts.edit = (data, id) =>
  db.none("UPDATE workouts SET title = $1, content = $2 WHERE id = $3", [
    data.title,
    data.content,
    id
  ]);

// delete workout
Workouts.delete = id => db.one("DELETE FROM workouts WHERE id = $1", [id]);

module.exports = Workouts;
