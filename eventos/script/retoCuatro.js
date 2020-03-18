//guardando cada pelicula en una variable
const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

//obteniendo los elementos
const button = document.querySelector(".boton");

const itemUno = document.querySelector(".listUno");
const itemDos = document.querySelector(".listDos");
const itemTres = document.querySelector(".listTres");
const itemCuatro = document.querySelector(".listCuatro");
const itemCinco = document.querySelector(".listCinco");

//Defino mi funcion que me pintara las movies en el html
const peliculas = () => {
    itemUno.innerHTML = inception;
    itemDos.innerHTML = theButterFlyEffect;
    itemTres.innerHTML = eternalSunshineOfTheSM;
    itemCuatro.innerHTML = blueVelvet;
    itemCinco.innerHTML = split;
};

button.addEventListener("click", peliculas);

//Definiendo las funciones para cada pelicula
const movieUno = () => console.log(`${inception}`);
itemUno.addEventListener("click", movieUno);

const movieDos = () => console.log(`${theButterFlyEffect}`);
itemDos.addEventListener("click", movieDos);

const movieTres = () => console.log(`${eternalSunshineOfTheSM}`);
itemTres.addEventListener("click", movieTres);

const movieCuatro = () => console.log(`${blueVelvet}`);
itemCuatro.addEventListener("click", movieCuatro);

const movieCinco = () => console.log(`${split}`);
itemCinco.addEventListener("click", movieCinco);