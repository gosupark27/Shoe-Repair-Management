var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Ticket = require('../models/Ticket');

// Update Ticket 
//TODO: doesn't update need id??
router.put('/', async (req,res) => {
    res.sendStatus(200);
    await Ticket.update(req.body);
  })

//Create Ticket
router.post('/', async (req,res) => {
  res.sendStatus(200);
  await Ticket.create(req.body);
})

module.exports = router;