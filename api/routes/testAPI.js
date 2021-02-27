var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Ticket = require('../models/Ticket');

router.get("/", (req, res, next) => {
    res.send("API is working properly");
});

router.put('/', async (req,res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);

    const result = await Ticket.create(req.body);
    console.log("Coming from /testAPI endpoint",result);
  })

module.exports = router;