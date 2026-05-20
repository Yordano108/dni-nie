const DOCUMENTO = document.getElementById("documento");
const RESULTADO = document.getElementById("resultado");

function procesarDocumento() {
    let doc = DOCUMENTO.value.trim().toUpperCase();

    const patron = /^[XYZ\d]\d{7}[A-Z]$/;
    if (!patron.test(doc)) {
        RESULTADO.innerText = "⚠️ El formato introducido no es válido";
        return;
    }

    let inicio = doc;

    if (doc.startsWith("X")) {
        inicio = "0" + doc.slice(1, 8);
    } else if (doc.startsWith("Y")) {
        inicio = "1" + doc.slice(1, 8);
    } else if (doc.startsWith("Z")) {
        inicio = "2" + doc.slice(1, 8);
    }

    const numeros = parseInt(inicio.substring(0, 8), 10);
    const letraIntroducida = doc[8];

    const letrasOficiales = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = numeros % 23;
    const letraCorrecta = letrasOficiales[resto];

    if (letraIntroducida === letraCorrecta) {
        RESULTADO.innerText = `¡Perfecto! El documento ${doc} es válido`;
    } else {
        RESULTADO.innerText = `Letra incorrecta. Introdujiste la '${letraIntroducida}', pero corresponde la '${letraCorrecta}'`;
    }
}
