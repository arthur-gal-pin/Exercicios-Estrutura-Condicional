const num = parseInt(prompt("Insira um número:"));

//Verifica se o input realizado pelo usuário no prompt é um número.
if (isNaN(num)) {
    alert('Erro: Você não digitou um número válido!')
}

if (!isNaN(num)); {
    //Avalia se o número é maior ou igual a zero e divisível por 2 ao mesmo tempo.
    if (num >= 0 && num % 2 == 0) {
        alert("O número é par.");
    } else if (num >= 0 && num % 2 != 0) {
        alert("O número é ímpar.");
    } else if (num < 0) {
        alert("Um número negativo não pode ser par, já que esse conceito é exclusivo ao conjunto dos números naturais.")
    }
}
