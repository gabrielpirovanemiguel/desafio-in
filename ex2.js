import printConsoleScreen from "./printConsoleScreen.js";
let a;
do {
    a = parseFloat(prompt("Insira uma raiz A ≠ 0 para a equação: "));
} while (a === 0)
const b = parseFloat(prompt("Insira a raiz B para a equação: "));
const c = parseFloat(prompt("Insira a raiz C para a equação: "));
const discriminant = (b**2) - (4*a*c);
if (discriminant > 0) {
    const valueDiscriminant = discriminant ** 0.5;
    const denominator = 2*a;
    const x1 = (-b + valueDiscriminant) / denominator;
    const x2 = (-b - valueDiscriminant) / denominator;
    printConsoleScreen(`Essa equação possui duas raízes.\nValor de x1: ${x1.toFixed(2)}\nValor de x2: ${x2.toFixed(2)}`);
} else if (discriminant === 0) {
    let x = -b / (2*a);
    printConsoleScreen(`Essa equação possui uma única raiz: ${x.toFixed(2)}`);
} else {
    printConsoleScreen(`Essa equação não possui raízes reais.`);
}
