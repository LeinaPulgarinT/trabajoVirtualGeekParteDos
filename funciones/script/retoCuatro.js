//pido informacion para saber si es border-box o content-box
let tipoCaja = parseInt(
    prompt("Por favor ingrese 1 si es border-box ó 2 si es content-box")
);

const modeloCaja = (anchoEnteroCaja, padding, border) => {
    if (tipoCaja === 1) {
        let borderBox = anchoEnteroCaja - 2 * padding - 2 * border;
        return `el border-box de la caja es ${borderBox}`;
    } else if (tipoCaja === 2) {
        let contentBox = anchoEnteroCaja + 2 * padding + 2 * border;
        return `el content-box de la caja es ${contentBox}`;
    }
};

modeloCaja(160, 20, 8);