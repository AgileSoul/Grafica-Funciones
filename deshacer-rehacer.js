var PASADO = { lineas: [] , noLineas: [] };
var FUTURO = { lineas: [] , noLineas: [] };

document.addEventListener("keydown" , keyDown);
document.addEventListener("keyup" , keyUp);

var btnDeshacer = document.getElementById("btnDeshacer");
btnDeshacer.addEventListener("click" , deshace);
var btnRehacer = document.getElementById("btnRehacer");
btnRehacer.addEventListener("click" , rehace);

//para saber si la tecla control esta presionada
var ctrDn = false;

function keyDown(evt)
{
    if(evt.keyCode == 17)
    {
        ctrDn = true;
    }
}
function keyUp(evt)
{
    //control + z
    if(ctrDn == true && evt.keyCode == 90)
    {
        deshace();
    }
    //control + y
    if(ctrDn == true && evt.keyCode == 89)
    {   
        rehace();
    }
}

function deshacer(numLineas)
{
    if(PASADO.noLineas.length > 0)
    {
        cargarPlano();
        cargarTabla();
        FUTURO.noLineas.push(numLineas);
        PASADO.noLineas.pop();
    }
    if(PASADO.lineas.length > 0)
    {
        for(var i = 0 ; i < PASADO.lineas.length - numLineas ; i++)
        {
            new Function(PASADO.lineas[i])();
        }
        var cont = 0;
        while(cont < numLineas)
        {
            FUTURO.lineas.push(PASADO.lineas[PASADO.lineas.length-1]);
            PASADO.lineas.pop();
            cont++;
        }
    }
    else
    {
        console.log("no se puede deshacer");
    }    
}   

function rehacer(numLineas)
{
    if(FUTURO.noLineas.length > 0)
    {
        cargarPlano();
        cargarTabla();
        PASADO.noLineas.push(FUTURO.noLineas[FUTURO.noLineas.length-1]);
        FUTURO.noLineas.pop();
    }
    if(FUTURO.lineas.length > 0)
    {
        for ( linea of PASADO.lineas)
        {
            new Function(linea)();
        }
        var cont = 0;
        while( cont < numLineas)
        {
            new Function(FUTURO.lineas[FUTURO.lineas.length-1])();
            PASADO.lineas.push(FUTURO.lineas[FUTURO.lineas.length-1]);
            FUTURO.lineas.pop();
            cont++
        }
    }
    else
    {
        console.log("no se puede rehacer");
    }      
}
function deshace()
{
    deshacer(PASADO.noLineas[PASADO.noLineas.length - 1]);
}
function rehace()
{
    rehacer(FUTURO.noLineas[FUTURO.noLineas.length - 1]);
}
