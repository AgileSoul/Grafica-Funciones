cargarPlano();

var chBox = document.getElementById("chBox_PlanoDecimal");
chBox.addEventListener("click" , cambiarFondo);
chBox.checked = false;

var fondoDec = false;

function cargarPlano()
{
    const ancho = plano.width , alto = plano.height;
    const largoLinea = ancho/80;
    lienzoP.clearRect(0, 0, ancho, alto);
    dibujarLinea(lienzoP, "#000000", 1.2 , largoLinea, alto/2 , ancho - largoLinea, alto/2);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho/2, largoLinea , ancho/2 , alto - largoLinea);
    //lineas de la flechas del plano
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho/2, 0 , ancho/2 - largoLinea , largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho/2, 0 , ancho/2 + largoLinea , largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho/2 - largoLinea, largoLinea , ancho/2 + largoLinea , largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho/2, alto , ancho/2 - largoLinea , alto - largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho/2, alto , ancho/2 + largoLinea , alto - largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho/2 - largoLinea, alto - largoLinea, ancho/2 + largoLinea , alto - largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , 0, alto/2 , largoLinea , alto/2 - largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , 0, alto/2 , largoLinea , alto/2 + largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , largoLinea, alto/2 - largoLinea, largoLinea , alto/2 + largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho, alto/2, ancho - largoLinea, alto/2 + largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho, alto/2, ancho - largoLinea, alto/2 - largoLinea);
    dibujarLinea(lienzoP, "#000000", 1.2 , ancho - largoLinea, alto/2 - largoLinea, ancho - largoLinea, alto/2 + largoLinea);

    lienzoP.font= "bold 15px arial"
    //Y
    lienzoP.fillText("Y" , ancho/2 + 2*largoLinea, 2*largoLinea );
    //-Y
    lienzoP.fillText("-Y" , ancho/2 + 2*largoLinea, alto - largoLinea );
    //X
    lienzoP.fillText("X" , ancho - 2*largoLinea, alto/2 - 2*largoLinea );
    //-X
    lienzoP.fillText("-X" , largoLinea, alto/2 - 2*largoLinea );

    const espacio = ancho / 20;
    var numero = 0;
    var inicial = 0;
    lienzoP.font = " 10px 'Times New Roman', Times, serif";
    if(fondoDec === true)
    {
        numero = -2.25;
        inicial = numero;
        for( var i = -ancho/2 + espacio ; i < ancho; i+= espacio )
        {
            if(numero != 0 && numero <= -inicial)
            {
                dibujarLinea(lienzoP, "#000000", 0.8 , ancho/2 + i, alto/2 - 7 , ancho/2 + i, alto/2 + 7);
                lienzoP.fillText(`${numero}` , ancho/2 + i - 4 , alto/2 + 16);
                dibujarLinea(lienzoP, "#000000", 0.2 , ancho/2 + i, espacio , ancho/2 + i, alto - espacio);
                dibujarLinea(lienzoP, "#000000", 0.8 , ancho/2 + 7, alto/2 + i , ancho/2 - 7, alto/2 + i);
                lienzoP.fillText(`${-numero}` , ancho/2 - 28 , alto/2 + i + 4);
                dibujarLinea(lienzoP, "#000000", 0.2 , espacio , alto/2 + i , ancho - espacio, alto/2 + i );
            }
            numero += 0.25;
        }
    }
    else
    {
        numero = -9;
        inicial = numero;
        for( var i = -ancho/2 + espacio ; i < ancho; i+= espacio )
        {
            if(Math.round(numero) != 0 && numero <= -inicial)
            {
                dibujarLinea(lienzoP, "#000000", 0.8 , ancho/2 + i, alto/2 - 7 , ancho/2 + i, alto/2 + 7);
                lienzoP.fillText(`${Math.round(numero)}` , ancho/2 + i - 4 , alto/2 + 16);
                dibujarLinea(lienzoP, "#000000", 0.2 , ancho/2 + i, espacio , ancho/2 + i, alto - espacio);
                dibujarLinea(lienzoP, "#000000", 0.8 , ancho/2 + 7, alto/2 + i , ancho/2 - 7, alto/2 + i);
                lienzoP.fillText(`${Math.round(-numero)}` , ancho/2 - 21 , alto/2 + i + 4);
                dibujarLinea(lienzoP, "#000000", 0.2 , espacio , alto/2 + i , ancho - espacio, alto/2 + i );
            }
            numero ++
        }
    }
}
function cambiarFondo()
{
    if(chBox.checked === true)
    {
        fondoDec = true;
    }
    else
    {
        fondoDec = false;
    }
    cargarPlano();
    deshacer(PASADO.noLineas[PASADO.noLineas.length - 1]);
    rehacer(FUTURO.noLineas[FUTURO.noLineas.length - 1]);
}