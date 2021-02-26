var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Ticket = require('../models/Ticket');

//Save Ticket 
router.put('/', async (req,res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);

    const result = await Ticket.create(req.body);
    console.log(result);


  })

module.exports = router;