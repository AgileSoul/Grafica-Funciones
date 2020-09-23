plano.addEventListener("mousemove" , mouseMove);
plano.addEventListener("mousedown" , mouseDown);
plano.addEventListener("mouseup" , mouseUp);

tabla.addEventListener("mousemove" , mouseMove);
tabla.addEventListener("mousedown" , mouseDown);
tabla.addEventListener("mouseup" , mouseUp);

var noLineas;
var grosor = 0.9;

//variable para saber cuando el click esta presionado
var mD = false;

//variables para dibujar
var xi= 0 , yi = 0, xf = 0, yf= 0;

/*variables para obtener la posicion relativa del canvas respecto a la pantalla de visualizacion
que luego nos serviran para poder ubicarnos en el canvas y obtener la ubicacion del mouse respecto
al canvas para dibujar en el */

var canvasX = 0 , canvasY = 0;

function mouseDown(evt)
{
    mD = true;
    canvasX = evt.target.getBoundingClientRect().x ; 
    canvasY = evt.target.getBoundingClientRect().y ;
    noLineas = 0;
    if(lineaEnGris == true)
    {
        xi = evt.clientX - canvasX;
        yi = evt.clientY - canvasY;
    }
    if(lapizEnGris == true)
    {
        xi = evt.clientX - canvasX;
        yi = evt.clientY - canvasY;
    }
}
function mouseMove( evt )
{
    if(lineaEnGris == true)
    {
        evt.target.style.cursor = "crosshair";
    }
    if(lapizEnGris == true)
    {
        evt.target.style.cursor = "default";
        if (mD == true)
        {
            canvasX = evt.target.getBoundingClientRect().x ; 
            canvasY = evt.target.getBoundingClientRect().y ;
            xf = evt.clientX - canvasX ;
            yf = evt.clientY - canvasY ;
            dibujarLinea(evt.target.getContext("2d"), color, grosor, xi, yi, xf, yf);
            noLineas = noLineas + 1;
            PASADO.lineas.push(`dibujarLinea(${evt.target.id}.getContext("2d"), "${color}", ${grosor}, ${xi}, ${yi}, ${xf}, ${yf})`);
            borrarFuturo();
            xi = xf;
            yi = yf;
        }
    }
}
function mouseUp(evt)
{
    if(lineaEnGris == true)
    {
        xf = evt.clientX - canvasX ;
        yf = evt.clientY - canvasY ;
        dibujarLinea(evt.target.getContext("2d"), color, grosor, xi, yi, xf, yf);
        PASADO.lineas.push(`dibujarLinea(${evt.target.id}.getContext("2d"), "${color}", ${grosor}, ${xi}, ${yi}, ${xf}, ${yf})`);
        noLineas = noLineas + 1;
        borrarFuturo();
    }
    PASADO.noLineas.push(noLineas);
    FUTURO.noLineas.pop();
    mD = false;
}

function borrarFuturo()
{
    while(FUTURO.lineas.length > 0)
    {
        FUTURO.lineas.pop();
    }
    while(FUTURO.noLineas.length > 0)
    {
        FUTURO.noLineas.pop();
    }
}