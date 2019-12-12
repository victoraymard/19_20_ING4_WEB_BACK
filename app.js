const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/database.config');

// on se connecte à la base de données
mongoose.connect(config.url, { useNewUrlParser: true });
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const userRouter = require('./routes/user');
const sensorsRouter = require('./routes/sensors');
const sensorRouter = require('./routes/sensor');
const measuresRouter = require('./routes/measures');
const measureRouter = require('./routes/measure');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/users', usersRouter);
app.use('/sensor', sensorRouter);
app.use('/sensors', sensorsRouter);
app.use('/measure', measureRouter);
app.use('/measures', measuresRouter);

module.exports = app;
