var nr;
nr = prompt('¿Qué tabla quieres visualizar?', '0');

if (isNaN(nr) ){
  alert('Lo siento, solo puedes ingresar un número\nPrueba de nuevo');
  location.reload();
}else if (nr==null){
  exit;
}else{

document.write("TABLA DEL "+nr);
document.write("<hr>");
document.write("<table style='margin: 0 auto;'>");

var x = 0;

for (x = 1; x <= 10; x++) {
  tabel = nr * x;
  document.write("<tr><td>");
  document.write(nr + "x" + x + "=" + tabel + "<br>");
  document.write("</td></tr>");
}

document.write("</table>");
}
