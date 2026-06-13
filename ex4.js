let phrase = (prompt("Insira uma frase: ").toLowerCase()).replaceAll(" ", "");
alert(isPalindrome(phrase) ? `A frase ${phrase} é um palíndromo.` : `A frase ${phrase} não é um palíndromo.`);

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