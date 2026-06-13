import printConsoleScreen from "./printConsoleScreen.js";
let a;
do {
    a = parseFloat(prompt("Insira o coeficiente A (A ≠ 0): "));
    if (isNaN(a) || a === 0) printConsoleScreen('Entrada inválida, tente novamente.');
} while (isNaN(a) || a === 0);
let b;
do {
    b = parseFloat(prompt("Insira o coeficiente B: "));
    if (isNaN(b)) printConsoleScreen('Entrada inválida, tente novamente.');
} while (isNaN(b));
let c;
do {
    c = parseFloat(prompt("Insira o coeficiente C: "));
    if (isNaN(c)) printConsoleScreen('Entrada inválida, tente novamente.');
} while(isNaN(c));
const discriminant = (b ** 2) - (4 * a * c);
if (discriminant > 0) {
    const valueDiscriminant = discriminant ** 0.5;
    const denominator = 2 * a;
    const x1 = (-b + valueDiscriminant) / denominator;
    const x2 = (-b - valueDiscriminant) / denominator;
    printConsoleScreen(`Essa equação possui duas raízes.\nValor de x1: ${x1.toFixed(2)}\nValor de x2: ${x2.toFixed(2)}`);
} else if (discriminant === 0) {
    const x = -b / (2 * a);
    printConsoleScreen(`Essa equação possui uma única raiz: ${x.toFixed(2)}`);
} else {
    printConsoleScreen(`Essa equação não possui raízes reais.`);
}