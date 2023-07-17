const express=require('express');
const path = require('path');
const globalErrorHandler = require('./controllers/errorController');
const dotenv = require("dotenv");
const AppError = require('./utils/appError');
dotenv.config();
const synonyms=require('./routes/getSynonyms');
// Start express app
const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/',synonyms);




app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });


  app.use(globalErrorHandler);
module.exports = app;
