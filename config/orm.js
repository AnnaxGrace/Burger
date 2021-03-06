
var connection = require("../config/connection.js")

var orm = {

    //Lets the user select all items in a table
    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result) {
            if (err) throw err;
            cb (result);
         });
    },

    //Lets the user insert values into a table
    insertOne: function(table, property, value, cb) {
        let query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, property, value], function(err, result) {
            if (err) throw err;
            cb(result);
        });

    },

    //Lets the user update values already given in a table
    updateOne: function(table, tableProperty, tablePropertyValue, idVal, cb) {
        let query = "UPDATE ?? SET ?? = " + tablePropertyValue + " WHERE id = " + idVal 
        connection.query(query, [table, tableProperty], function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },

}

module.exports = orm;