// Require the index.js file so you can connect to the database, here.
const db = require("../db/index").db;
// Put all the methods you want to use in an object!
const Fritters = {};
// Now you can make your GET, POST, PUSH, DELETE functions.

// Find all the people!
Fritters.findAll = () => db.any("SELECT * FROM fritters ORDER BY id");

// Look at your profile
Fritters.findById = id => db.one("SELECT * FROM fritters WHERE id = $1", [id]);

// Create your acount
Fritters.create = data =>
  db.one(
    "INSERT INTO fritters (email, username, password) VALUES ($1, $2, $3, $4) RETURNING id",
    [data.email, data.username, data.password]
  );

// edit your account
Fritters.edit = (data, id) =>
  db.one("UPDATE fritters SET  $1, email = $2, username = $3 WHERE id = $4", [
    data.username,
    id
  ]);

// delete account
Fritters.delete = id => db.one("DELETE FROM fritters WHERE id = $1", [id]);

module.exports = Fritters;
