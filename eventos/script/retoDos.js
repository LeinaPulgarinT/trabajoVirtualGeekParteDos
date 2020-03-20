//elemento html
const botton = document.getElementById("boton");

const texto = document.getElementById("text");

//defino mi funcion
const imprimir = () => {
    console.log("Hola " + texto.value);
};

//escuchando el evento
botton.addEventListener("click", imprimir);