var express = require('express');
var router = express.Router();
var Ticket = require('../models/Ticket');

// Create Ticket 
router.put('/', async (req,res) => {
    res.sendStatus(200);
    await Ticket.create(req.body);
  })

//Update Ticket
router.post('/', async (req,res) => {
  res.sendStatus(200);
  await Ticket.updateOne({id:"id_goes_here"},req.body);
})

module.exports = router;