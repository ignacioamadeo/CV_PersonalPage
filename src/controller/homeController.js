//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta > ๐๐ผ controllers > models > SQL

/* --- 

CONTROLADORES HOME SITIO

FUNCIONALIDADES:
๐ 1) RENDER

--- */

//๐ 1) RENDER: Renderizo el ejs correspondiente:
const homeController ={
    getHome : (req, res , next) => {
        res.render('index',{title: "Ignacio Amadeo รlvarez"})
    }
}

//Exporto todo con este nombre:
module.exports = homeController