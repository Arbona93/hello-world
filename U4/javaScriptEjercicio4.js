function cambiarH1(){
  var h = document.getElementsByTagName('h1');
  for (var i = 0; i < h.length; i++) {
    var h1 = h[i];
    h1.innerHTML = "h1 cambiado";
  }
}
function cambiarDestacado(){
  var d= document.getElementsByClassName('destacado');
  for (var i = 0; i < d.length; i++) {
    var d1 = d[i];
    d1.style.fontWeight = "bold";
  }
}
function ocultarResultado(){
  document.getElementById('resultado').style.display = 'none';
}

function obligatorio(){
  var requerido = document.getElementsByName('sugerencia');
  requerido[0].setAttribute("required", "true");
}
function mostrarResultado(){
  document.getElementById('resultado').style.display = 'block';
}
