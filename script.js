function calcularPrecio() {
    const Precio1 = document.getElementById("precio1").value;
    const Precio2 = document.getElementById("precio2").value;
    const Precio3 = document.getElementById("precio3").value;

    let primerProducto = parseInt(Precio1);
    let segundoProducto = parseInt(Precio2);
    let tercerProducto = parseInt(Precio3);

    let Subtotal = primerProducto + segundoProducto + tercerProducto;
    let IVA = Subtotal * 0.13;
    let Total = Subtotal + IVA;

    document.getElementById("resultado-precios").innerHTML = `
    Precios de los productos:
    - Producto 1: "${primerProducto}"
    - Producto 2: "${segundoProducto}"
    - Producto 3: "${tercerProducto}"

    Subtotal: ₡${Subtotal}
    IVA (13%): ₡${IVA}
    <h2>Total a pagar: ₡${Total} </h2>
    `;
}

function concatenarNombre() {
    const nombre = document.getElementById("nombre").value;
    const apellido1 = document.getElementById("apellido1").value;
    const apellido2 = document.getElementById("apellido2").value;

    let concatenacion = nombre.concat(" ", apellido1, " ", apellido2);

    document.getElementById("resultado-nombres").innerHTML = `
    Nombres ingresados:
    - Nombre: "${nombre}"
    - Primer Apellido: "${apellido1}"
    - Segundo Apellido: "${apellido2}"

    <h2>Concatenación de nombre: "${concatenacion}"</h2>
    `;
}

function verificarParImpar() {
    const numero = document.getElementById("numero").value;

    let num = parseInt(numero);

    if (isNaN(num)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let resultado = "";

    if (num % 2 === 0) {
        resultado = "El número es par.";
    } else {
        resultado = "El número es impar.";
    }

    alert(resultado);

    

    document.getElementById("resultado-par-impar").innerHTML = `
    Número ingresado: "${num}"
    <h2>${resultado}</h2>
    `;
}