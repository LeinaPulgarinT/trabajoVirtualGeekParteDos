const calcularIva = precio => {
    let iva = precio * 0.21;
    let total = precio + iva;
    return `el precion sin iva es ${precio}, el iva es de ${iva}, y el total es ${total}`;
};

calcularIva(10000);