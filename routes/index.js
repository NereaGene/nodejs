/*
Carga y uso de un modulo
var miModulo=require("./mimodulo");
miModulo.imprimeDatos("Mis datos");
*/

var servidor = require('./servidor'); //Importamos el módulo servidor creado se encuentra en servidor.js
var router = require('./router'); //Importamos el módulo router en router.js
servidor.inicializar(router.route); //Llama al método inicializar del objeto servidor