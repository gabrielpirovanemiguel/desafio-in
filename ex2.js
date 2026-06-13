//Refatorar
let a;
do {
    a = parseFloat(prompt("Insira uma raiz A ≠ 0 para a equação: "));
} while (a === 0)
let b = parseFloat(prompt("Insira a raiz B para a equação: "));
let c = parseFloat(prompt("Insira a raiz C para a equação: "));
let discriminant = (b**2) - (4*a*c);
if (discriminant > 0) {
    let valueDiscriminant = discriminant ** 0.5;
    let denominator = 2*a;
    let x1 = -b + valueDiscriminant / denominator;
    let x2 = -b - valueDiscriminant / denominator;
    alert(`Essa equação possui duas raízes.\nValor de x1: ${x1.toFixed(2)}\nValor de x2: ${x2.toFixed(2)}`);
} else if (discriminant === 0) {
    let x = -b / (2*a);
    alert(`Essa equação possui uma única raiz: ${x.toFixed(2)}`)
} else {
    alert(`Essa equação não possui raízes reais.`)
}
