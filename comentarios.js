function enviarComentario(comentario,nombre){
    if(comentario=='' || nombre==''){
        alert("¡Todos los datos deben estar ingresados!")
    }
    else{
        document.getElementById("mostrarComentario").innerHTML =nombre+" Escribió "+comentario+"&nbsp;&nbsp;&nbsp;&nbsp;"+fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();    
    } 
}
    
var fecha= new Date();