var orm = require("../config/orm.js")


var burgerORM = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    insertOne: function(newBurger, cb) {
        orm.insertOne("burgers", "burger_name", newBurger, function(res) {
            cb(res);
        });
    },

    updateOne: function(tf, idNum, cb) {
        orm.updateOne("burgers", "devoured", tf, idNum, function(res) {
            cb(res);
        });
    }
}

module.exports = burgerORM;