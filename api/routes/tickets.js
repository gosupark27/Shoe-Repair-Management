const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');


// Create Ticket 
router.put('/', async (req, res) => {
  const body = req.body
  const ticket = new Ticket({
    ticketNum: body.ticketNumber,
    dropDate: body.dropDate,
    firstName: body.firstName,
    lastName: body.lastName,
    phone: body.phone,
    pickUpDate: body.pickUpDate,
    ticketItems:body.ticketItems
  })
  ticket.save()
  .then(() => res.status(200).json(ticket))
  .catch(error => console.log(error))
})

// Update Ticket
router.post('/:id', async (req, res) => {

  res.sendStatus(200);
  await Ticket.updateOne({ id: "id_goes_here" }, req.body);
})

// Retrieve tickets
router.get('/', async (req,res) =>{
  await Ticket.find()
        .then((tickets) => res.status(200).json(tickets))
        .catch(error => console.log(error))
})

module.exports = router;