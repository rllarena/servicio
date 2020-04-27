var nr;
nr = prompt('¿Qué tabla quieres visualizar?', '0');

nr = parseInt(nr);
document.write("<table style='margin: 0 auto;'>");

var x = 0;

for (x = 1; x <= 10; x++) {
  tabel = nr * x;
  document.write("<tr><td>");
  document.write(nr + "x" + x + "=" + tabel + "<br>");
  document.write("</td></tr>");
}

document.write("</table>");
