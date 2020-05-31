
var connection = require("../config/connection.js")

var orm = {

    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result) {
            if (err) throw err;
            cb (result);
         });
    },

    insertOne: function(table, property, value, cb) {
        let query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, property, value], function(err, result) {
            if (err) throw err;
            cb(result);
        });

    },

    updateOne: function(table, tableProperty, tablePropertyValue, id, idVal, cb) {
        let query = "UPDATE ?? SET ?? = ? WHERE ?? = ? "
        connection.query(query, [table, tableProperty, tablePropertyValue, id, idVal], function(err, result) {
            if (err) throw err;
            cb(result)
        });
    }

}

module.exports = orm;