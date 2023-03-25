/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function convertir()
{
    var valor=parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    var dolar=3.85;
    var euro=3.91;
    resultado=0;   
    //sol de Dolar
    if(de==1&&a==2)
    {
        resultado=valor/dolar;
    }
    //sol a Euro
    else if(de==1&&a==3)
    {
        resultado=valor/euro;
    }
    //Dolar a sol
    else if(de==2&&a==1)
    {
        resultado=valor*dolar;
    }
    //Dolar a euro
    else if(de==2&&a==3)
    {
        resultado=valor*(dolar/euro);
    }
    //Euro a sol
    else if(de==3&&a==1)
    {
        resultado=valor*euro;
    }
    //Euro a dolar
    else if(de==3&&a==2)
    {
        resultado=valor*(euro/dolar);
    }
    //sol a sol,dolar a dolar y euro a euro
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="Resultado: $"+resultado.toFixed(2);

} 

