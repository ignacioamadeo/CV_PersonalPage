//Flujo entero: 👉🏼 index.js > app.js > raiz.routes > ruta > controllers > models > SQL

//Uso este archivo para dar de alta el servidor y llamar a app.js.

/* --- 
IMPORTO: 
--- */

//IMPORTAR APP.JS- Llamo al contenido del archivo app.js:
const app = require('./app')

/* --- 
CONFIGURACIÓN SERVIDOR: 
--- */

//CONFIG SERVER - Doy de alta el SERVIDOR LOCAL:
const port = process.env.PORT || 3000
app.listen(port,() => { 
    console.log(`server is runnig in port ${port}`);
})

