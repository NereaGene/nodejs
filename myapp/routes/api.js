var express = require('express');
var router = express.Router();

/* GET API AJAX. */
router.get('/', function(req, res, next) {
    var objetoJSON={
        propiedad:"valor"
    };
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(objetoJSON));
});
router.get("/libros", function(req,res){
    var libros=[
        {
            titulo:"1984",
            autor:"George Owell"
        },{
            titulo:"Manolito gafotas",
            autor:"Elvira Lindo"
    }
    ];
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(libros));
    
})
module.exports = router;