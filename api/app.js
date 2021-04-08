const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testAPI');
const ticketRouter = require('./routes/ticket');

const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/ShoeRepairDb";

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
console.log(mongoose.connection.readyState);

const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

const app = express();
app.use(cors({ origin: clientOrigins }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(helmet())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
app.use('/ticket', ticketRouter);

app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})

//module.exports = app;
