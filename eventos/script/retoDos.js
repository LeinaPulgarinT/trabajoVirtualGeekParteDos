//elemento html
const botton = document.querySelector(".boton");

const texto = document.querySelector(".text");

//defino mi funcion
const imprimir = () => {
    console.log("Hola " + texto.value);
};

botton.addEventListener("click", imprimir);