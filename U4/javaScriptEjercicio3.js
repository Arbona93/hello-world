function recorreTag(){
        var p = document.getElementsByTagName('p');
        var color = document.getElementById('txtColor').value;
        for (var i = 0; i < p.length; i++) {
          p[i].style.color = color;
        }
      }
