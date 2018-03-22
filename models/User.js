// Require the index.js file so you can connect to the database, here.
const { db } = require("../db/index").db;
// Put all the methods you want to use in an object!
const Users = {};
// Now you can make your GET, POST, PUSH, DELETE functions.

// Find all the people!
Users.findAll = () => db.any("SELECT * FROM users ORDER BY id");

// Look at your profile
Users.profile = id => db.one("SELECT username FROM users WHERE id = $1", [id]);

// Create your acount
Users.create = data =>
  db.one(
    "INSERT INTO users (name, email, username, password) VALUES ($1, $2, $3, $4) RETURNING id",
    [data.name, data.email, data.username, data.password]
  );

// edit your account
Users.edit = (data, id) =>
  db.one(
    "UPDATE users SET name = $1, email = $2, username = $3 WHERE id = $4",
    [data.name, data.email, data.username, id]
  );

// delete account
Users.delete = id => db.one("DELETE FROM users WHERE id = $1", [id]);

module.exports = Users;
