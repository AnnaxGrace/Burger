var express = require("express");
var router = express.Router();
var newBurger = require("../models/burger.js")

//Renders the html for the burger page so we see our front end, and displays all items predefined from our table
router.get("/", function(req, res) {
    newBurger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
})

//Uses the ORM function previously defined to insert the data received from our front end
router.post("/api/burgers", function(req, res) {
        newBurger.insertOne([req.body.burger_name], function(result) {
            res.json({ id: res.insertId });
        })
})

//Makes the data sent useable in our ORM function by making them a number and boolean, respectively
router.put("/api/burgers/:id", function(req, res) {
    var idNum = parseInt(req.params.id);
    var tf = Boolean(req.body.devoured);

    console.log(req.body.devoured)

    newBurger.updateOne(tf, idNum, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            console.log(result);
            res.status(200).end();
        }
    })
})

module.exports = router;