/*
1.- todos los ejercicios deberán ser resueltos en una carpeta llamada ejercicio3
2.- Crea una aplicación express, arráncala y comprueba que sepuede acceder correctamente a ella
3.- Gestiona las peticiones que entre por la URL (/libros) para los métodos Get y Post. Devuelve un texto que indique que método es el que se ha empleado para hacer la petición
4.- Crea una nueva ruta en la aplicación que devuelva un listado html con las provincias de castilla y león accesible desde la url /provincias y el método get
5.- Crea una nueva ruta en la aplicación que sea capaz de recoger los datos de un formulario enviados vía post a la url /provincias. Esto deverá devolver un objeto con los datos enviados por el formulario.
6.- Crea una nueva ruta variable que sea del tipo 
/get/miidentificativo donde mi midentificativo sea variable. Haz que devuelva el valor que se le ha dado cada vez a ese identificativo

7.- Crea un nueva ruta para la edición y borrado de items ambas tendrán una ruta parecida al ejercicio 6
/edit/miiden /delete/miiden. En ambos casos se devolverá el identificativo. En el caso de la edición se enviará una petición POST, en el caso del borrado será GET.

8.- Pasa una seríe de parámetros por URL en el formato ?+&. Los datos a pasar son username y password. Devuelve true o false dependiendo de si ambos son "admin" la URL será /login y se hará via POST.*/
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