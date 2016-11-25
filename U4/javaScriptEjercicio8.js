function modificarSize(){
var h1 = document.querySelectorAll('h1');
var p = document.querySelector('p');
var t = document.getElementById("combo");
var tamaño = t.options[t.selectedIndex].value;
h1.style.fontSize = tamaño;
p.style.fontSize = tamaño;
}
