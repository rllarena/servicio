
var bucle = 1;
var cont = 0;
var cont2=1;
var msg = '';   


document.write("<br> <table");

while(bucle <= 100){
    if(cont == 0){
        document.write(" <tr> ");
    }
    cont++;
    document.write(" <td> " +cont2+ " x " +cont+ " = " +cont * cont2+" </td> ");

    bucle++;

    if(cont == 10){
        document.write(" </td> ");
        cont = 0;
        cont2++;
    }
}
document.write(" </table> ");
