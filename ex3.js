import printConsoleScreen from "./printConsoleScreen.js";
let goAgain = "s";
while (goAgain === "s") {
    let num;
    const fatorial = (n) => (n <= 0)? 1: n*fatorial(n-1);
    do {
        num = parseInt(prompt("Insira um número inteiro positivo maior que 0: "));
    } while (num <= 0 || isNaN(num));
    printConsoleScreen(`Fatorial de ${num}: ${fatorial(num)}`);
    do {
        goAgain = prompt("Deseja calcular o fatorial de outro número (S/N)?: ").toLowerCase();
    } while (goAgain !== "s" && goAgain !== "n");
}