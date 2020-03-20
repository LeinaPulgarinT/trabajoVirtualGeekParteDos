//elemento html
const botton = document.getElementById("cambiar-texto");
const parrafo = document.getElementById("text");

//definiendo la funcion manejadora

const change = () => {
    parrafo.innerHTML = `<p>Mi primer click, ¡ole yo y la mujer que me parió!</p>`;
};

//escuchando al evento
botton.addEventListener("click", change);