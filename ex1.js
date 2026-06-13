import printConsoleScreen from "./printConsoleScreen.js";
let reais = parseFloat(prompt('Digite um valor em reais: '));
let euroRate = 6.1;
let dolarRate = 5.7;
printConsoleScreen(`R$${reais} em euros: €${(reais / euroRate).toFixed(2)}`);
printConsoleScreen(`R$${reais} em dólares: $${(reais / dolarRate).toFixed(2)}`);