var mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema(
    {
        ticketNum: String,
        dropDate: String, 
        firstName: String, 
        lastName: String, 
        phone: String, 
        pickUpDate: String,
        ticketItems:[{itemName: String, repair: String}],
    }
)

module.exports = mongoose.model('Ticket', TicketSchema);