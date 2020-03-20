//tomo los elementos de html que deseo modificar
const targeta = document.querySelector(".target");
const textModificar = document.querySelector(".text-ocultar");
const favorite = document.querySelector(".favorite");

//defino los eventos en la funcion callback

const change = () => {
    //Voy a utilizar remove & add para añadir las clases y quitarlas con classList, pero si quisiera hacerlo con toggle tambien se podria, reemplazando en donde estan remove y add por toggle
    if (textModificar.textContent == "Añadir") {
        targeta.classList.remove("teacher--selected");
        textModificar.textContent = "Quitar";
        favorite.classList.remove("favorite");
    } else {
        targeta.classList.add("teacher--selected");
        textModificar.textContent = "Añadir";
        favorite.classList.add("favorite");
    }
};

//Escucho los eventos
targeta.addEventListener("click", change);