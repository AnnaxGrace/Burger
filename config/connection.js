var mysql = require("mysql");

//this creates the connection for both heroku and localhost
var connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "cogsworth",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

