var plano = document.getElementById("plano");
var lienzoP = plano.getContext("2d");
var color = "#000000";

//definir color de lapiz o linea

function definirColor(c)
{
    color = c;
}

//funcion para dibujar en canvas
function dibujarLinea(lienzo, color, grosor, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor ;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}