const DOCUMENTO = document.getElementById("documento");
const RESULTADO = document.getElementById("resultado");

function validarDNI_NIE(documento) {
    let doc = documento.trim().toUpperCase();

    const patron = /^[XYZ\d]\d{7}[A-Z]$/;
    if (!patron.test(doc)) {
        return "⚠️ El formato introducido no es válido";
    }

    let numeroEvaluar = doc;
    if (doc.startsWith("X")) numeroEvaluar = doc.replace("X", "0");
    if (doc.startsWith("Y")) numeroEvaluar = doc.replace("Y", "1");
    if (doc.startsWith("Z")) numeroEvaluar = doc.replace("Z", "2");

    const numeros = parseInt(numeroEvaluar.substring(0, 8), 10);
    const letraIntroducida = doc.charAt(8);

    const letrasOficiales = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = numeros % 23;
    const letraCorrecta = letrasOficiales.charAt(resto);

    if (letraIntroducida === letraCorrecta) {
        return `¡Perfecto! El documento ${doc} es válido`;
    } else {
        return `Letra incorrecta. Introdujiste la '${letraIntroducida}', pero corresponde la '${letraCorrecta}'`;
    }
}

function procesarDocumento() {
    const valorInput = DOCUMENTO.value;

    const mensajeResultado = validarDNI_NIE(valorInput);

    RESULTADO.innerText = mensajeResultado;
}
