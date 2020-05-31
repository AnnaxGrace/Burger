var express = require("express");
var router = express.Router();
var newBurger = require("../models/burger.js")

router.get("/", function(req, res) {
    newBurger.selectAll(function(data) {
        console.log(data);
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function(req, res) {
    // console.log(req.body)
        newBurger.insertOne([req.body.burger_name], function(result) {
            console.log(res);
            res.json({ id: res.insertId });
        })
})

module.exports = router;