const path = require('path');
const express = require('express');
// const http = require('http');
// const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//--------AWS Stuff--------

const mongoUri = 'mongodb+srv://student:ilovetesting@cluster0-wpwug.mongodb.net/test';
mongoose.connect(mongoUri, { dbName: 'popups', useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  if (!err) console.log('Connected to MongoDB');
});

const app = express();

// require routers
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const fileRoutes = require('./routes/file-upload')

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


/**
 * handle requests for static files
 */
// app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));


/**
 * define route handlers
 */
app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/file-upload', fileRoutes); //maybe /api/v1  

// respond with main app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));


// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

/**
 * express error handler
*/

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred'+err },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
