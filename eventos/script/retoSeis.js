//Selecciono la clase de html que quiero modificar
const cambiarBg = document.querySelector(".body");

//defino que quiero que me suceda en el evento keydown
const change = event => {
    if (event.keyCode === 82) {
        cambiarBg.classList.add("green");
        cambiarBg.classList.remove("pink");
    }
    if (event.keyCode === 77) {
        cambiarBg.classList.add("pink");
        cambiarBg.classList.remove("green");
    }
};

//ejecuto la funcion callback cuando suceda el evento keydown
document.addEventListener("keydown", change);