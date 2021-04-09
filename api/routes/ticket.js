const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Create Ticket 
router.put('/', async (req,res) => {
    res.sendStatus(200);
    await Ticket.create(req.body);
  })

// Update Ticket
router.post('/', async (req,res) => {
  res.sendStatus(200);
  await Ticket.updateOne({id:"id_goes_here"},req.body);
})

// Retrieve tickets
router.get()

module.exports = router;