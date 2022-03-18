//Flujo entero: index.js > 👉🏼 app.js > raiz.routes > ruta > controllers > models > SQL

/* --- 
CONFIGURACIÓN GENERAL DE LA APP: 
--- */

const createError = require('http-errors');

//CONFIG EXPRESS - Llamo paquete Express:
const express = require('express');
const app = express();

/*CONFIG SESSION - Llamo a paquete Express-session (para login y cookies):
const session = require("express-session");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
*/

//CONFIG PATH - Llamo paquete Path:
const path = require("path");

/*CONFIG FORMS - Para adaptar métodos PUT y DELETE de forms para html:
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
*/

//CONFIG EJS - Establecer ejs como motor de plantillas:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//CONFIG PUBLIC - Hago pública la carpeta public:
app.use(express.static(path.join(__dirname, 'public')));

/* --- 
MIDDLEWARE: 
--- */
/*
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
*/
/* --- 
RUTEO: 
--- */

//LLAMO a archivo principal de rutas cuando se entra a localhost:3000/
app.use('/', require('./routes/index.routes'));

/* --- 
ERRORES: 
--- */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* --- 
EXPORT: 
--- */

//EXPORTO todo:
module.exports = app;