// Add packages
const express = require("express");
// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// import cors
var cors = require("cors");
app.use(cors());
// import database
var mysql = require("mysql2");
var dbConn = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "reactjs!nodejs$ingenieurinformatique",
  database: "node_mysql_crud_db",
  // multipleStatements: true,
  port: "3306",
});
const port = process.env.PORT || 3002;
app.listen(port, function () {
  console.log("Node app is running on port " + port);
});
let router = require("./routes");
app.use("/user", router);
// Export the Express API
// Creating GET Router to fetch all the employes  from the MySQL Database

module.exports = app;
