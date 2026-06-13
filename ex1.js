import printConsoleScreen from "./printConsoleScreen.js";
let reais;
do {
    reais = parseFloat(prompt('Digite um valor em reais: '));
    if (isNaN(reais) || reais <= 0) printConsoleScreen('Entrada inválida, tente novamente.');
} while (isNaN(reais) || reais <= 0);
const euroRate = 6.1;
const dolarRate = 5.7;
const euros = (reais / euroRate).toFixed(2);
const dolars = (reais / dolarRate).toFixed(2);
printConsoleScreen(`Converção de R$${reais}:\nPara euros: €${euros}\nPara dólares: $${dolars}`);
