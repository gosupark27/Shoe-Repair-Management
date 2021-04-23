const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
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
        pickUpDate: String,
        ticketItems:[{category:String, itemName: String, repair:[{name:String,price:{type:String, default:Math.ceil(Math.random() * 100)}}] }],
    }
)

module.exports = mongoose.model('Ticket', TicketSchema);