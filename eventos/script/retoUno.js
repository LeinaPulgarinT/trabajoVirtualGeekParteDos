//elemento html
const botton = document.querySelector(".cambiar-texto");
const parrafo = document.querySelector(".text");
const textChange = "Mi primer click, ¡ole yo y la mujer que me parió!";

//definiendo la funcion manejadora

const change = () => {
    parrafo.innerHTML = textChange;
};

//escuchando al elemento
botton.addEventListener("click", change);