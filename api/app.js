var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var { auth } = require("express-openid-connect");

var mongoose = require('mongoose');
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
  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ticketRouter = require('./routes/ticket');

var app = express();

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(
  auth({
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    secret: process.env.SESSION_SECRET,
    authRequired: false,
    auth0Logout: true,
  })
);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ticket', ticketRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})

//module.exports = app;
