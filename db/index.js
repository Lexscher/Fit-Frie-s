// Start to connect database by importing pg-promise.
const pgp = require("pg-promise")({});
// Make your connection URL
const connectionURL = "postgres://localhost:5432/fit_fries";
// Connect with the database using the connectionURL
const db = pgp(connectionURL);

// Make sure you export this file so you can use these in models!

module.exports = {
  db
};
