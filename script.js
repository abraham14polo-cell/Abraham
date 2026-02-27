function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    try {
        let resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    } catch {
        alert("Operación inválida");
    }
}