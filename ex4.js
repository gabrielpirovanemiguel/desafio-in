import printConsoleScreen from "./printConsoleScreen";
const phrase = (prompt("Insira uma frase: ").toLowerCase()).replaceAll(" ", "");
const isPhrasePalindrome = isPalindrome(phrase);

isPhrasePalindrome ? printConsoleScreen(`A frase ${phrase} é um palíndromo.`) : printConsoleScreen(`A frase ${phrase} não é um palíndromo.`);

function isPalindrome(text) {
    let i = 0;
    let j = text.length - 1
    while (i < j) {
        if (text[i] !== text[j]) return false;
        i++;
        j--;
    }
    return true;
}