function init(){
    console.log("Hola navegador!");//esto se ejecuta en el navegador.
  $.getJSON(
        "http://localhost:3000/api/", 
        function(datos){
     //hacer algo con los datos 
            console.log(datos);
            $("body").append("<h1>"+datos.propiedad+"</h1>")
    }); 
      $.getJSON(
        "http://localhost:3000/api/libros/", 
        function(datos){
     //hacer algo con los datos 
            console.log(datos);
            var html="<ul>";
            for( var item of datos){
                html+="<li>"+item.autor+"</li>";
            }
            html+="</ul>"
            
        $("body").append(html);
    }
      ); 
}
$(document).ready(init);