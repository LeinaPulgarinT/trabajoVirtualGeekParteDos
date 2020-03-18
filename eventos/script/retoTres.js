//elemento html
const parrafo = document.querySelector(".text");

//defino mi funcion
const add = () => {
    parrafo.text = parrafo + document.write("lorem ipsum");
};

//escuchando al elemento
parrafo.addEventListener("mouseover", add);

// const add = () => {
//     parrafo.innerHTML = parrafo.innerHTML + document.write("lorem ipsum");
// };