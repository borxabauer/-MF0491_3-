

 // Defino Variable
 
 let añadir = 0
 
  //Manejador de Eventos
  document.querySelector("#button").addEventListener("click", ()=>{
    añadir = añadir + 1;
    document.querySelector("#text").innerText= "Has pulsado e boton "+añadir+"veces";

})
