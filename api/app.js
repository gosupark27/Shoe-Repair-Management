require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./routes/customers');
const ticketRouter = require('./routes/ticket');

const app = express();
app.use(cors({ origin: clientOrigins }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(helmet())
app.use('/users', usersRouter);
app.use('/ticket', ticketRouter);

app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})

//module.exports = app;
