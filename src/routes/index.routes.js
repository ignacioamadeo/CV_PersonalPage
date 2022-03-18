//Flujo entero: index.js > app.js > 👉🏼 raiz.routes > ruta > controllers > models > SQL

/* --- 
RUTEO PARA TENER UN MODELO DESACOPLADO DE RUTAS:
--- */

//Ejecuto paquetes:
var express = require('express');
var router = express.Router();

//USER: HOME:
router.use('/',require('./home.routes.js'))

//Exporto todo:
module.exports = router;