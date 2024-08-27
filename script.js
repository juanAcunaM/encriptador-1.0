const textArea = document.querySelector(".caja-texcto");
const mensaje = document.querySelector(".mensaje-encriptado");
const btnCopiar = document.querySelector(".copiar-texto");

// Mapa de sustitución para encriptar y desencriptar
const mapaEncriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();
    let textoEncriptado = "";

    for (let i = 0; i < stringEncriptada.length; i++) {
        const letra = stringEncriptada[i];
        textoEncriptado += mapaEncriptacion[letra] || letra;
    }

    return textoEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();
    let textoDesencriptado = "";

    for (let i = 0; i < stringDesencriptada.length; i++) {
        let substr = stringDesencriptada[i];
        for (let key in mapaEncriptacion) {
            if (stringDesencriptada.slice(i).startsWith(mapaEncriptacion[key])) {
                substr = key;
                i += mapaEncriptacion[key].length - 1;
                break;
            }
        }
        textoDesencriptado += substr;
    }

    return textoDesencriptado;
}

btnCopiar.addEventListener("click", function() {
    mensaje.select();
    document.execCommand("copy");
    textArea.focus();
    mensaje.value = "";
}); 
