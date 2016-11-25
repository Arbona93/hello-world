function mostrarDatos(){
  var info = document.getElementById("informacion");
  var enlaces = document.getElementsByTagName("a");
  info.innerHTML = "Numero de enlaces = "+enlaces.length;
  var mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;
  var contador = 0;
  for(var i=0; i<enlaces.length; i++) {
    if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
      contador++;
    }
  }
  info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a");
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
}

function ocultarParrafo(){
  document.getElementById('primerParrafo').style.display = 'none';
  document.getElementById('segundoParrafo').style.display = 'block';
  var segundo = document.getElementById('segundoParrafo');
  segundo.setAttribute("onClick", "borrarSegundo()");
}

  function borrarSegundo(){
    var parrafo = document.getElementById('segundoParrafo');
    var padre = parrafo.parentNode;
    padre.removeChild(parrafo);
}
