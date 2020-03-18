//tomo el elemento que deso modificar del html
const targeta = document.querySelector(".target");
const textModificar = document.querySelector("text-ocultar");

// targeta.classList.add("teacher--selected");
// textModificar.classList.add("favorite");

const change = () => {
    if (
        targeta.querySelector(".target").classList.contains("teacher--selected")
    ) {
        targeta.classList.remove("teacher--selected");
    } else {
        targeta.classList.add("teacher--selected");
    }
};
targeta.addEventListener("click", change);

const texto = () => {
    if (textModificar.textContent == "Añadir") {
        textModificar.textContent == "Quitar";
    } else {
        textModificar.textContent == "Añadir";
    }
};
textModificar.addEventListener("click", texto);
// document.querySelector(".target").classList.contains("teacher--selected");