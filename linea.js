var btnLinea = document.getElementById("btnLinea");
btnLinea.addEventListener("click" , btnLineaClick);

//¿ linea seleccionada ?

var lineaEnGris = false;

function btnLineaClick( evt )
{
    if (lineaEnGris == false)
    {
        btnLinea.style.backgroundColor = "#cad2c5";
        btnLapiz.style.backgroundColor = "initial";
        lapizEnGris = false;
        lineaEnGris = true;
    }
}