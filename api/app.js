require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./routes/customers');
const ticketRouter = require('./routes/tickets');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(helmet())
app.use('/users', usersRouter);
app.use('/api/tickets', ticketRouter);
//app.use('/api/user', authRouter)


app.set('port', process.env.PORT || 5000)

// app.use(
//   auth({
//     issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.AUTH0_CLIENT_ID,
//     secret: process.env.SESSION_SECRET,
//     authRequired: false,
//     auth0Logout: true,
//   })
// );

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})

//module.exports = app;
