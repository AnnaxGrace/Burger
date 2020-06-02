var orm = require("../config/orm.js")

//Is the middleware inbetween our controller and our orm. Put parameters for our burger orm that do not need to be defined in our controller.
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