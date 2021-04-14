const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');


// Create Ticket 
router.put('/', async (req, res) => {
  const body = req.body
  const ticket = new Ticket({
    // ticketNum: String,
    dropDate: req.dropDate,
    firstName: req.firstName,
    lastName: req.lastName,
    phone: req.phone,
    pickUpDate: req.pickUpDate
  })
  ticket.save()
  .then(() => res.sendStatus(200).json(ticket))
  .catch(error => next(error))
})

// Update Ticket
router.post('/', async (req, res) => {

  res.sendStatus(200);
  await Ticket.updateOne({ id: "id_goes_here" }, req.body);
})

// Retrieve tickets
router.get()

module.exports = router;