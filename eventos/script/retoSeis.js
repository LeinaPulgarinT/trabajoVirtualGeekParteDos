const cambiarBg = document.querySelector(".body");

const change = event => {
    if (event.keyCode === 82) {
        cambiarBg.classList.add("green");
        cambiarBg.remove("pink");
    }
    if (event.keyCode === 77) {
        cambiarBg.classList.add("pink");
        cambiarBg.classList.remove("green");
    }
};

document.addEventListener("keydown", change);