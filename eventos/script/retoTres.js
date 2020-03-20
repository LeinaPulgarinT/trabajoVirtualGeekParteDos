//elemento html
const parrafo = document.getElementById("text");
const parrafito = document.querySelector(".hola");
const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit`;
//defino mi funcion
const add = () => {
    parrafo.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>`;
};

//escuchando al elemento
parrafo.addEventListener("mouseover", add);

// parrafo.addEventListener("mouseover", () => {
//     remove.parrafo;
//     parrafito.add.lorem;
// });