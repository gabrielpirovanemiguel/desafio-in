let reais = parseFloat(prompt('Digite um valor em reais: '));
let euroRate = 6.1;
let dolarRate = 5.7;
alert(`R$${reais} em euros: €${(reais / euroRate).toFixed(2)}`);
alert(`R$${reais} em dólares: $${(reais / dolarRate).toFixed(2)}`);