
function encriptar(){
    var texto = document.getElementById("input-text").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter"); //al poner las dos diagonales hacemos que evalue toda la palabra-//
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    //Quitamos el mensaje y el icono de la caja donde aparecera el texto cifrado 
    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("texto-msg").style.display = "none";
    //mostrar en el input el texto cifrado 
    document.getElementById("texto-img").innerHTML= txtCifrado;
    document.getElementById("copiar").style.display ="show";
    document.getElementById("copiar").style.display ="inherit";
}

    // boton Descencriptar
    function desencriptar(){
        var texto = document.getElementById("input-text").value.toLowerCase();
    
        var txtCifrado = texto.replace(/enter/igm,"e"); 

        var txtCifrado = txtCifrado.replace(/ober/igm,"o");
        var txtCifrado = txtCifrado.replace(/imes/igm,"i");
        var txtCifrado = txtCifrado.replace(/ai/igm,"a");
        var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

        document.getElementById("imagen-derecha").style.display = "none";
        document.getElementById("texto-msg").style.display = "none";
        document.getElementById("texto-img").innerHTML=txtCifrado;
        document.getElementById("copiar").style.display ="show";
        document.getElementById("copiar").style.display ="inherit";

} 
// boton copiar 
function copiar (){
    var contenido =document.querySelector("#texto-img");
    contenido.select();
    document.execCommand("copy");
    alert("tu texto  ha sido copiado! ");

}

