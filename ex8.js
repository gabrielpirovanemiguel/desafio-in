function analisarConsumo(valoresConsumo) {
    let limiteMaximo;
    do {
        limiteMaximo = parseFloat(prompt('Digite um valor limite válido para a categoria "Econômico": '));
    } while (isNaN(limiteMaximo));
    let classificacoes = [];
    valoresConsumo.forEach(valor => {
        if (valor > limiteMaximo) {
            classificacoes.push('Acha que é sócio da Enel');
        } else if (valor === limiteMaximo) {
            classificacoes.push('No Limite');
        } else {
            classificacoes.push('Econômico');
        }
    });
    let mensagem = '';
    classificacoes.forEach((valor, index) => {
        let linha = `Aparelho ${index + 1}: ${valor}`;
        mensagem += `${linha}\n`;
        console.log(linha);
    })
    alert(mensagem);
    return classificacoes;
}
