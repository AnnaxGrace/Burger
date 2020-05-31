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

module.exports = router;