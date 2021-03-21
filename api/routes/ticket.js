var express = require('express');
var router = express.Router();
var Ticket = require('../models/Ticket');

// Save Ticket 
router.put('/', async (req,res) => {
    res.sendStatus(200);
    await Ticket.create(req.body);
  })

module.exports = router;