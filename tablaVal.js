var tabla = document.getElementById("tabla");
lienzoT = tabla.getContext("2d");
cargarTabla();

function cargarTabla()
{
    lienzoT.clearRect(0, 0, tabla.width, tabla.height);
    dibujarLinea(lienzoT, "#33415c" , 1, tabla.width/2 , 0, tabla.width/2, tabla.height);
    lienzoT.font = "bold 20px arial";
    //X
    lienzoT.fillText("X", tabla.width/5.45, tabla.height/16);
    //Y
    lienzoT.fillText("Y", tabla.width/1.45, tabla.height/16);
    for( var i = tabla.height/10 ; i < tabla.height ; i+= tabla.height/10 )
    {
        dibujarLinea(lienzoT, "#33415c", 1, 0, i, tabla.width, i);
    }
}