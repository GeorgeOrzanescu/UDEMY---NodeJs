const mysql = require("mysql2");

// Create a pool of connections to the database
// we can run multiple queries at the same time
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "hidden",
});

// we can use async/await to make our code more readable  because of this promise function
module.exports = pool.promise();
