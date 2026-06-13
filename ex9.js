function compactarTexto(texto) {
    let charAtual = texto[0];
    let contadorChar = 1;
    let textoFinal = '';
    for (let i = 1; i < texto.length; i++) {
        if (texto[i] === charAtual) {
            contadorChar ++;
        } else {
            textoFinal += charAtual + contadorChar;
            charAtual = texto[i];
            contadorChar = 1;
        }
    }
    textoFinal += charAtual + contadorChar;
    return textoFinal
} 
