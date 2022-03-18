//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > 👉🏼 controllers > models > SQL

/* --- 

CONTROLADORES HOME SITIO

FUNCIONALIDADES:
📌 1) RENDER

--- */

//📌 1) RENDER: Renderizo el ejs correspondiente:
const homeController ={
    getHome : (req, res , next) => {
        res.render('index',{title: "Ignacio Amadeo Álvarez"})
    }
}

//Exporto todo con este nombre:
module.exports = homeController