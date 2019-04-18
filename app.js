// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

const express = require("express");
const http = require("http");
const app = express();
// The port for the HTTP server is provided as an argument
// This is provided by the pm2.json config file
const port = process.argv[2] || 3000;

// Creating the HTTP server and listening to the specified port
var httpServer = http.createServer(app);
httpServer.listen(parseInt(port));

app.get("/", function(req, res) {
  res.header("Content-type", "text/html");
  console.log("Server running at localhost:" + port);
  return res.end("Hello world from localhost:" + port);
});

module.exports = app;
