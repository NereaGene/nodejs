var express = require('express');
var app=express();
//podría ser también:
//app.router("/libros", function (req. res){
//.get
//.post
//res.send("GET");})
//res.send("POST");})//
app.get('/libros', function (req, res) {
  res.send('GET');
    res.end();
});
app.post('/libros', function (req, res) {
  res.send('POST');
});

app.get("/provincias", function (req, res){
    res.send("<ul><li>León</li><li>Zamora</li><li>Salamanca</li><li>Palencia</li><li>Valladolid</li><li>Burgos</li><li>Soria</li><li>Segovia</li><li>Ávila</li></ul>");
    res.end();
  }  );
//como es un formulario debería hacerse con un plugin body-parser con npm install body-parser --save, por eso subiré el ejercicio3.2//
app.post('/provincias/:id', function(req, res){
    res.send('La provincia es ' + req.params.id);
});

 app.get('/miidentificativo/:id', function(req, res){
    res.send('Mi identificativo es ' + req.params.id);
}); 
app.post('/edit/:miidentificativo/:id', function(req, res){
    res.send('Identificativo editado  ' + req.params.id);
}); 
app.get('/delete/:miidentificativo/:id', function(req, res){
    res.send('identificativo borrado ' + req.params.id);
}); 

app.post('/login/username/:username/password/:password', function(req, res){
    console.log(req.params.username);
    console.log(req.params.password);
    
   if(req.params.username=="admin" && req.params.password=="admin"){
       res.send(true);
   }
    else{
        res.send(false);
    }
})
    
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});