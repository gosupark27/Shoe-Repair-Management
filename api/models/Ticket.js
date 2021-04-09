const mongoose = require('mongoose');

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB', result.connection._hasOpened)
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

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