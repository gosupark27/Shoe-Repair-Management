var mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema(
    {
        ticketNum: String,
        dropDate: String, 
        firstName: String, 
        lastName: String, 
        phone: String, 
        pickUpDate: String
    }
)

module.exports = mongoose.model('Ticket', TicketSchema);