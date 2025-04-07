const num = parseInt(prompt("Informe um número:"));

//Verifica se o input realizado pelo usuário no prompt é um número.
if (isNaN(num)) {
    alert('Erro: Você não digitou um valor válido!')
}

if (!isNaN(num)); {
    //Avalia se o número é maior ou igual a zero e divisível por 5 ao mesmo tempo.
    if (num >= 0 && num % 5 == 0) {
        alert(`O número ${num} é divisível por 5.`)
    } else if (num >= 0 && num % 5 != 0) //Número positivo não divisível por 5.
    {
        alert(`O número ${num} não é divisível por 5.`);
    } else if (num <= 0) //Número negativo
    {
        alert("O número não pode ser negativo! O conceito de divisibilidade se aplica apenas ao conjunto dos números naturais.");
    }
}
