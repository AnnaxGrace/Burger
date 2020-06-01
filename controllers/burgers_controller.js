var express = require("express");
var router = express.Router();
var newBurger = require("../models/burger.js")

//delete later
var connection = require("../config/connection.js")

router.get("/", function(req, res) {
    newBurger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function(req, res) {
        newBurger.insertOne([req.body.burger_name], function(result) {
            res.json({ id: res.insertId });
        })
})

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