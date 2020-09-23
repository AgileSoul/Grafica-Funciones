var btnLapiz = document.getElementById("btnLapiz");
btnLapiz.addEventListener("click" , btnLapizClick);

//¿ lapiz seleccionado ?

var lapizEnGris = false;

function btnLapizClick()
{
    if (lapizEnGris == false)
    {
        btnLapiz.style.backgroundColor = "#cad2c5";
        btnLinea.style.backgroundColor = "initial";
        lineaEnGris = false;
        lapizEnGris = true;
    }
}